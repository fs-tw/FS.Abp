import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { AccountLdapSettings } from '../models/account-settings';
import { AbstractAccountSettingsService } from '../abstracts/abstract-account-config.service';

@Injectable()
export class AccountLdapService extends AbstractAccountSettingsService<AccountLdapSettings> {
  protected url = '/api/account-admin/settings/ldap';

  constructor(restService: RestService) {
    super(restService);
  }
}
