import { Component, OnInit } from '@angular/core';
import { ConfigState, ConfigStateService, SessionStateService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountExternalProviderService } from '../services/account-external-provider.service';
import { AccountCaptchaService } from '../services/account-captcha.service';
import { eTwoFactorBehaviour } from '../enums/two-factor-behaviour';

@Component({
  selector: 'abp-account-settings',
  templateUrl: './account-settings.component.html',
  providers: [AccountExternalProviderService, AccountCaptchaService],
})
export class AccountSettingsComponent implements OnInit {
  isLdapSettingsEnabled: boolean;
  isTwoFactorSettingsEnabled: boolean;
  isExternalProviderEnabled$: Observable<boolean>;
  isCaptchaEnabled$: Observable<boolean>;

  isTenant: boolean;

  constructor(
    private configStateService: ConfigStateService,
    private store: Store,
    private sessionStateService: SessionStateService,
    private captchaService: AccountCaptchaService,
    private externalProviderService: AccountExternalProviderService,
  ) {}

  ngOnInit() {
    this.isLdapSettingsEnabled =
      this.configStateService.getFeature('Account.EnableLdapLogin').toLowerCase() !== 'false';
    this.isTwoFactorSettingsEnabled =
      this.configStateService.getFeature('Identity.TwoFactor') ===
      eTwoFactorBehaviour[eTwoFactorBehaviour.Optional];

    this.isTenant = !!this.sessionStateService.getTenant();
    if (this.isTenant) {
      this.isExternalProviderEnabled$ = this.externalProviderService
        .getSettings()
        .pipe(map(result => result.settings.some(settings => settings.enabled)));
      this.isCaptchaEnabled$ = this.captchaService
        .getSettings()
        .pipe(map(result => result.useCaptchaOnLogin || result.useCaptchaOnRegistration));
    } else {
      this.isExternalProviderEnabled$ = of(true);
      this.isCaptchaEnabled$ = of(true);
    }
  }
}
