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
import { ActivatedRoute, Router } from '@angular/router'
const { maxLength, minLength, required } = Validators;
import { PageService } from '../../providers/page.service';
@Component({
  selector: 'app-phone-verification',
  templateUrl: './phone-verification.component.html',
  styleUrls: ['./phone-verification.component.css']
})
export class PhoneVerificationComponent implements OnInit {

  form: FormGroup;

  input: Scrm.PhoneVerification.Dtos.CreatePhoneVerificationDto = {} as any;
  userName: string = "";
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toasterService: ToasterService,
    private router: Router,
    private pageService: PageService,
  ) {
    this.activatedRoute.queryParamMap.subscribe(x => {
      this.input.accountId = x.get("accountId");
      this.input.socialServiceId = x.get("socialServiceId");
      this.userName = x.get("userName");
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber: ['', [required, maxLength(20)]]
    });
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.input.phoneNumber = this.form.value.phoneNumber;
    this.input.userName = this.userName;
    this.pageService.createPhoneVerificationCodeByInput(this.input).subscribe(x => {
      this.toasterService.success("簡訊發送成功！");
      this.router.navigate(["/member/phone-code-comfirm"], {
        queryParams: {
          accountId: this.input.accountId,
          socialServiceId: this.input.socialServiceId,
          phone: this.input.phoneNumber
        }
      });
    })


  }

}
