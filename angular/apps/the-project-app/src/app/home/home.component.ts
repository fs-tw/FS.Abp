import { Component, AfterViewInit, NgZone } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import { interval, of } from 'rxjs';
import { timeout, delay } from 'rxjs/operators';
import { LayoutStateService } from '@fs-tw/theme-the-project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(
    private layoutStateService: LayoutStateService,
    private oAuthService: OAuthService,
    private authService: AuthService) { }

  login() {
    this.authService.initLogin();
  }
}
