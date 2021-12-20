import type { EntityContentCreateDto, EntityContentGetListDto, EntityContentUpdateDto, EntityContentWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityContentCrudService {
  apiName = 'cms-kit-management';

  create = (input: EntityContentCreateDto) =>
    this.restService.request<any, EntityContentWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/entity-content-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/entity-content-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EntityContentWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/entity-content-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: EntityContentGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/entity-content-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: EntityContentUpdateDto) =>
    this.restService.request<any, EntityContentWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/entity-content-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
