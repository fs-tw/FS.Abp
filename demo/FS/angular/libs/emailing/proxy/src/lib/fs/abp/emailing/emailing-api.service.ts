import type { EmailSettingsDto, EmailSettingsGetDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailingApiService {
  apiName = 'Default';

  getByEmailSettingsGet = (EmailSettingsGet?: EmailSettingsGetDto) =>
    this.restService.request<any, EmailSettingsDto>({
      method: 'GET',
      url: `/api/abp/emailing/email-settings`,
      params: { providerName: EmailSettingsGet.providerName, providerKey: EmailSettingsGet.providerKey },
    },
    { apiName: this.apiName });

  updateByEmailSettingsAndProviderNameAndProviderKey = (EmailSettings: EmailSettingsDto, providerName?: string, providerKey?: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/abp/emailing/email-settings`,
      params: { providerName: providerName, providerKey: providerKey },
      body: EmailSettings,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
