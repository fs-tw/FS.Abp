import { AuthService } from '@fs-tw/account';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ListService} from '@abp/ng.core';

import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';

import { eCmsComponentNames } from '@fs-tw/cms/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsComponentNames.Cms,
    },
  ],
})
export class HomeComponent {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService, private authService: AuthService,
    //private extensionsServiceng : ExtensionsService, //CMS extensivetable
    public readonly list: ListService) {}

  login() {
    this.authService.initLogin();
  }
}
