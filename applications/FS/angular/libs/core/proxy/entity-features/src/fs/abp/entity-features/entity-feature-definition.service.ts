import type { EntityFeature } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityFeatureDefinitionService {
  apiName = 'entity-features';

  getEntityFeatureDefinitionList = () =>
    this.restService.request<any, EntityFeature[]>({
      method: 'GET',
      url: '/api/entity-features/entity-feature-definition/entity-feature-definition-list',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
