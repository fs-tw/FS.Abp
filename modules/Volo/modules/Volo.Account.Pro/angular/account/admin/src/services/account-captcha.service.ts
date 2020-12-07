import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { AbstractAccountSettingsService } from '../abstracts/abstract-account-config.service';
import { AccountCaptchaSettings } from '../models/account-settings';

@Injectable()
export class AccountCaptchaService extends AbstractAccountSettingsService<AccountCaptchaSettings> {
  protected url = '/api/account-admin/settings/recaptcha';

  constructor(restService: RestService) {
    super(restService);
  }
}
