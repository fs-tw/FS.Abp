import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { AbstractAccountSettingsService } from '../abstracts/abstract-account-config.service';
import { AccountExternalProviderSettings } from '../models/account-settings';

@Injectable()
export class AccountExternalProviderService extends AbstractAccountSettingsService<
  AccountExternalProviderSettings
> {
  protected url = '/api/account-admin/settings/external-provider';

  constructor(restService: RestService) {
    super(restService);
  }
}
