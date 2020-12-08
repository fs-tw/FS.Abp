import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractAccountSettingsService } from '../../abstracts/abstract-account-config.service';
import { AccountCaptchaService } from '../../services/account-captcha.service';
import { AbstractAccountSettingsComponent } from '../../abstracts/abstract-account-settings.component';
import { AccountCaptchaSettings } from '../../models/account-settings';

@Component({
  selector: 'abp-account-settings-captcha',
  templateUrl: './account-settings-captcha.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractAccountSettingsService,
      useClass: AccountCaptchaService,
    },
  ],
})
export class AccountSettingsCaptchaComponent extends AbstractAccountSettingsComponent<
  AccountCaptchaSettings
> {
  mapTenantSettingsForSubmit(newSettings: Partial<AccountCaptchaSettings>) {
    return {
      version: newSettings.version,
      siteKey: newSettings.siteKey,
      siteSecret: newSettings.siteSecret,
    };
  }
}
