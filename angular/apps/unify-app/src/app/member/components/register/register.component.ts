import { AuthService, ConfigState } from '@abp/ng.core';
import { PageService, RegisterRequest } from '../../providers/page.service';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import snq from 'snq';
import { ActivatedRoute } from '@angular/router';
import { AuthService as FsAuthService } from '../../providers/auth.service';
const { maxLength, required, email } = Validators;
import { Scrm } from '../../../proxy'

@Component({
  selector: 'fs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  code = "";
  socialType = "";

  form: FormGroup;

  inProgress: boolean;

  isSelfRegistrationEnabled = true;


  constructor(
    private fb: FormBuilder,
    private pageService: PageService,
    private fsOauthService: FsAuthService,
    private store: Store,
    private toasterService: ToasterService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParamMap.subscribe(x => {
      this.code = x.get("code")
      this.socialType = x.get("type");
    })
  }

  ngOnInit() {
    this.isSelfRegistrationEnabled =
      (
        this.store.selectSnapshot(
          ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled'),
        ) || ''
      ).toLowerCase() !== 'false';
    if (!this.isSelfRegistrationEnabled) {
      this.toasterService.warn(
        {
          key: 'AbpAccount::SelfRegistrationDisabledMessage',
          defaultValue: 'Self registration is disabled.',
        },
        null,
        { life: 10000 },
      );
      return;
    }

    this.form = this.fb.group({
      username: ['', [required, maxLength(255)]],
      password: ['', [required]],
      email: ['', [required, email]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.toasterService.error('Website::Login.PasswordOrMailError')
      return
    };

    this.inProgress = true;

    const newUser = {
      userName: this.form.get('username').value,
      password: this.form.get('password').value,
      emailAddress: this.form.get('email').value,
      appName: 'Angular',
    } as RegisterRequest;

    this.pageService
      .register(newUser)
      .pipe(
        switchMap(() => this.fsOauthService.login(newUser.userName, newUser.password)),
        catchError(err => {
          this.toasterService.error(
            snq(() => err.error.error_description) ||
            snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'),
            'Error',
            { life: 7000 },
          );
          return throwError(err);
        }),
        finalize(() => (this.inProgress = false)),
      )
      .subscribe(
        x => {
          this.toasterService.success('Website::Login.RegisterSuccess')
          // this.pageService.registerOrUpdateByInput({ socialType: Scrm.SocialMessages.SocialType[this.socialType], socialId: this.code }).subscribe(()=>{})
        }
      );
  }
}
