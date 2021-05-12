import { CoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import {
  NgbDatepickerModule, NgbDropdownModule,
  NgbPopoverModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MemberRoutingModule } from './member-routing.module';
import { AuthService } from './providers/auth.service';
import { PageService } from './providers/page.service';
import { PhoneVerificationComponent } from './components/phone-verification/phone-verification.component';
import { PhoneCodeComfirmComponent } from './components/phone-code-comfirm/phone-code-comfirm.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, PhoneVerificationComponent, PhoneCodeComfirmComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,

    CoreModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    NgbPopoverModule,
    NgbDatepickerModule,
    NgbTooltipModule,
  ],
  providers: [
    AuthService,
    PageService,
    // {
    //   provide: "ACCOUNT_OPTIONS",
    //   useValue: { redirectUrl: '/appointment' }
    // }
  ]
})
export class MemberModule { }
