import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { AbstractAccountSettingsService } from '../abstracts/abstract-account-config.service';
import { AccountSettings } from '../models/account-settings';

@Injectable()
export class AccountSettingsService extends AbstractAccountSettingsService<AccountSettings> {
  protected url = '/api/account-admin/settings';

  constructor(restService: RestService) {
    super(restService);
  }
}
