import type { EntityType } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityTypeDefinitionService {
  apiName = 'entity-types';

  getEntityTypeDefinitionList = () =>
    this.restService.request<any, EntityType[]>({
      method: 'GET',
      url: '/api/entity-types/entity-type-definition/entity-type-definition-list',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
