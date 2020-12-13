import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { AbstractAccountSettingsService } from '../abstracts/abstract-account-config.service';
import { AccountTwoFactorSettingsDto } from '../models/account-settings';

@Injectable()
export class AccountTwoFactorSettingService extends AbstractAccountSettingsService<
  AccountTwoFactorSettingsDto
> {
  protected url = '/api/account-admin/settings/two-factor';

  constructor(restService: RestService) {
    super(restService);
  }
}
