import type { ContentDefinitionCreateDto, ContentDefinitionGetListDto, ContentDefinitionUpdateDto, ContentDefinitionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentDefinitionCrudService {
  apiName = 'cms-kit-management';

  create = (input: ContentDefinitionCreateDto) =>
    this.restService.request<any, ContentDefinitionWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/content-definition-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/content-definition-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ContentDefinitionWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/content-definition-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: ContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/content-definition-crud',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: ContentDefinitionUpdateDto) =>
    this.restService.request<any, ContentDefinitionWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/content-definition-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
