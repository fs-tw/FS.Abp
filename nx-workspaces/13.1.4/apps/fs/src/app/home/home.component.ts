import { AuthService } from '@abp/ng.core';
import { Component,Injector } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(
    private oAuthService: OAuthService, private authService: AuthService,
    private Injector :Injector
    ) {


    }

  login() {
    this.authService.navigateToLogin();
  }
}
