import type { IdentityClaimTypeDto } from './claim-type/dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentityServerClaimTypesService {
  apiName = 'AbpIdentityServer';

  getList = () =>
    this.restService.request<any, IdentityClaimTypeDto[]>({
      method: 'GET',
      url: `/api/identity-server/claim-types`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
