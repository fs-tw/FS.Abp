import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AccountLdapSettings } from '../../models/account-settings';
import { AbstractAccountSettingsComponent } from '../../abstracts/abstract-account-settings.component';
import { AbstractAccountSettingsService } from '../../abstracts/abstract-account-config.service';
import { AccountLdapService } from '../../services/account-ldap-settings.service';

@Component({
  selector: 'abp-account-settings-ldap',
  templateUrl: './account-settings-ldap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractAccountSettingsService,
      useClass: AccountLdapService,
    },
  ],
})
export class AccountSettingsLdapComponent extends AbstractAccountSettingsComponent<
  AccountLdapSettings
> {}
