import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  currentDate:Date = new Date();

  constructor(private oAuthService: OAuthService, private authService: AuthService) {
    setInterval(()=>{
      this.currentDate = new Date();
    },500)
  }

  login() {
    this.authService.initLogin();
  }
}
