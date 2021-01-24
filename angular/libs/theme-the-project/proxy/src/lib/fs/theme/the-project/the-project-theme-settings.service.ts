import type { TheProjectThemeSettingsDto, UpdateTheProjectThemeSettingsDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TheProjectThemeSettingsService {
  apiName = 'theme-the-project';

  get = () =>
    this.restService.request<any, TheProjectThemeSettingsDto>({
      method: 'GET',
      url: `/api/theme-the-project/settings`,
    },
    { apiName: this.apiName });

  updateByInput = (input: UpdateTheProjectThemeSettingsDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/theme-the-project/settings`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
