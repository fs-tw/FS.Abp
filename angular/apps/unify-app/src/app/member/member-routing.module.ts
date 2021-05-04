import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './providers/auth.service';
import { PhoneVerificationComponent } from './components/phone-verification/phone-verification.component';
import { PhoneCodeComfirmComponent } from './components/phone-code-comfirm/phone-code-comfirm.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'phone-verification',
    component: PhoneVerificationComponent
  },
  {
    path: 'phone-code-comfirm',
    component: PhoneCodeComfirmComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
