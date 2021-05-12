import { ConfigStateService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import snq from 'snq';
import { Scrm } from '../../../proxy'
import { IdentificationNumberChecker } from '../../../shared';
import { AuthService as HisAuthService } from '../../providers/auth.service';
import { ActivatedRoute } from '@angular/router'
const { maxLength, minLength, required } = Validators;
import { PageService } from '../../providers/page.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountId = "";
  socialType = "";
  socialServiceId = "";

  form: FormGroup;
  recaptchaReactive: string = "";
  inProgress: boolean;

  get isSelfRegistrationEnabled$(): Observable<boolean> {
    return of(false)
  }
  useCaptchaOnLogin = false;
  captchSiteKey = "";
  get isUseCaptchaOnLogin(): boolean {
    return this.configStateService.getSetting('Abp.Account.Captcha.UseCaptchaOnLogin').toLocaleLowerCase() == 'true';
  }

  get getCaptchaSiteKey(): string {
    return this.configStateService.getSetting('Abp.Account.Captcha.SiteKey');
  }

  constructor(
    private fb: FormBuilder,
    private pageService:PageService,
    private activatedRoute:ActivatedRoute,
    private configStateService: ConfigStateService,
    private toasterService: ToasterService,
    private hisAuthService: HisAuthService,
  ) {
    this.useCaptchaOnLogin = this.isUseCaptchaOnLogin;
    this.captchSiteKey = this.getCaptchaSiteKey;

    this.activatedRoute.queryParamMap.subscribe(x=>{
      this.accountId = x.get("accountId")
      this.socialType = x.get("type");
      this.socialServiceId = x.get("socialServiceId");
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [required, maxLength(255)]],
      password: ['', [required, maxLength(128)]],
      remember: [false],
    });
  }

  recaptchaIsNull() {
    return this.recaptchaReactive == '' || this.recaptchaReactive == null;
  }


  onSubmit() {

    if (!this.form.valid) return;
    this.inProgress = true;
    this.hisAuthService
      .login(this.form.get('username').value, this.form.get('password').value)
      .pipe(
        catchError(err => {
          this.toasterService.error(
            snq(() => err.error.error_description) ||
            snq(() => err.error.error.message, '登入失敗！無此用戶。'),
            '系統訊息',
            { life: 7000 },
          );
          return throwError(err);
        }),
        finalize(() => (this.inProgress = false)),
      )
      .subscribe((x) => {       
        this.toasterService.success("登入成功！");        
        // this.pageService.registerOrUpdateByInput(
        //   {
        //     socialType:Scrm.SocialMessages.SocialType[this.socialType],
        //     accountId:this.accountId,
        //     socialServiceId:this.socialServiceId
        //   }).subscribe(()=>{})
      });
  }


}
