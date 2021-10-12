import type { EntityType } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityTypeApiService {
  apiName = 'entity-types';

  getList = () =>
    this.restService.request<any, EntityType[]>({
      method: 'GET',
      url: '/api/entity-types/definitions',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
