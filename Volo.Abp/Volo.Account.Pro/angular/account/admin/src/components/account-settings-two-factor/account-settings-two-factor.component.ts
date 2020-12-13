import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountTwoFactorSettingsDto } from '../../models/account-settings';
import { AccountTwoFactorSettingService } from '../../services/account-two-factor-settings.service';
import { AbstractAccountSettingsService } from '../../abstracts/abstract-account-config.service';
import { AbstractAccountSettingsComponent } from '../../abstracts/abstract-account-settings.component';
import { eTwoFactorBehaviour, twoFactorBehaviourOptions } from '../../enums/two-factor-behaviour';

@Component({
  selector: 'abp-account-settings-two-factor',
  templateUrl: './account-settings-two-factor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractAccountSettingsService,
      useClass: AccountTwoFactorSettingService,
    },
  ],
})
export class AccountSettingsTwoFactorComponent extends AbstractAccountSettingsComponent<
  AccountTwoFactorSettingsDto
> {
  eTwoFactorBehaviour = eTwoFactorBehaviour;
  twoFactorBehaviourOptions = twoFactorBehaviourOptions;
}
