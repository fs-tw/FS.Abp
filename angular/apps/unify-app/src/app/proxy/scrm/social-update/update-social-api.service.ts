import type { LinkUsersRegisterDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateSocialApiService {
  apiName = 'Default';

  registerOrUpdateByInput = (input: LinkUsersRegisterDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/update-social/register-or-update`,
      body: input,
    },
    { apiName: this.apiName });

  test = () =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/update-social/test-xml`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
