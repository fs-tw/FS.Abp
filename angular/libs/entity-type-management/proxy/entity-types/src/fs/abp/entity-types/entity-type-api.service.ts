import type { EntityDefinition, EntityType } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityTypeApiService {
  apiName = 'entity-types';

  getEntityDefinitionList = () =>
    this.restService.request<any, EntityDefinition[]>({
      method: 'GET',
      url: '/api/entity-types/entity-definitions',
    },
    { apiName: this.apiName });

  getEntityTypeDefinitionList = () =>
    this.restService.request<any, EntityType[]>({
      method: 'GET',
      url: '/api/entity-types/entity-type-definitions',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
