import { AuthService } from '@abp/ng.core';
import { Component, Injector } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Fs } from '@fs-tw/proxy/cms-kit-management';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  service: Fs.CmsKitManagement.Blogs.BlogsQuerysApiService;
  constructor(
    injector: Injector,
    private oAuthService: OAuthService,
    private authService: AuthService
  ) {
    this.service = injector.get(
      Fs.CmsKitManagement.Blogs.BlogsQuerysApiService
    );

    this.service.query({} as any).subscribe((x) => {
      console.log(x);
    });
  }

  login() {
    this.authService.navigateToLogin();
  }
}
