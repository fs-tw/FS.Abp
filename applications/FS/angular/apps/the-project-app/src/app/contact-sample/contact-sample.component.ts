import { Component, AfterViewInit, NgZone } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import { LayoutService } from '@fs/theme.the-project';
import { interval, of } from 'rxjs';
import { timeout, delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './contact-sample.component.html',
})
export class ContactSampleComponent implements AfterViewInit {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(
    private layoutService: LayoutService,
    private oAuthService: OAuthService,
    private authService: AuthService) { }
  ngAfterViewInit(): void {
    of(null).pipe(delay(0))
      .subscribe(() => this.layoutService.ready$.next(true));

    // interval(0).subscribe(x => {
    //   this.layoutService.ready$.next(true);
    // });

  }

  login() {
    this.authService.initLogin();
  }
}
