import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountSettings } from '../../models/account-settings';
import { AccountSettingsService } from '../../services/account-settings.service';
import { AbstractAccountSettingsService } from '../../abstracts/abstract-account-config.service';
import { AbstractAccountSettingsComponent } from '../../abstracts/abstract-account-settings.component';

@Component({
  selector: 'abp-account-settings-general',
  templateUrl: './account-settings-general.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractAccountSettingsService,
      useClass: AccountSettingsService,
    },
  ],
})
export class AccountSettingsGeneralComponent extends AbstractAccountSettingsComponent<
  AccountSettings
> {}
