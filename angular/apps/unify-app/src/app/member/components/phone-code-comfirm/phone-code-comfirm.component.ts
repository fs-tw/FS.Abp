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
  selector: 'app-phone-code-comfirm',
  templateUrl: './phone-code-comfirm.component.html',
  styleUrls: ['./phone-code-comfirm.component.css']
})
export class PhoneCodeComfirmComponent implements OnInit {

  form: FormGroup;
  input: Scrm.PhoneVerification.Dtos.PhoneVerificationDto = {} as any;
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
      this.input.phoneNumber = x.get("phone");
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', [required, maxLength(4)]]
    });
  }

  onSubmit() {
    if (!this.form.valid) return;      
    this.input.code = this.form.value.code;
    this.pageService.confirmPhoneVerificationByInput(this.input).subscribe(x=>{
      this.toasterService.success("驗證成功！");
      this.router.navigate(['./'])
    })

  }

}
