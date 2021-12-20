import type { EntityContentDefinitionCreateDto, EntityContentDefinitionGetListDto, EntityContentDefinitionUpdateDto, EntityContentDefinitionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityContentDefinitionCrudService {
  apiName = 'cms-kit-management';

  create = (input: EntityContentDefinitionCreateDto) =>
    this.restService.request<any, EntityContentDefinitionWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/entity-content-definition-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/entity-content-definition-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EntityContentDefinitionWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/entity-content-definition-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: EntityContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/entity-content-definition-crud',
      params: { entityType: input.entityType, entityId: input.entityId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: EntityContentDefinitionUpdateDto) =>
    this.restService.request<any, EntityContentDefinitionWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/entity-content-definition-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
