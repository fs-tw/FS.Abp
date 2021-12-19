import type { ContentPropertyCreateDto, ContentPropertyGetListDto, ContentPropertyUpdateDto, ContentPropertyWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentPropertyCrudService {
  apiName = 'cms-kit-management';

  create = (input: ContentPropertyCreateDto) =>
    this.restService.request<any, ContentPropertyWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/content-property-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/content-property-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ContentPropertyWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/content-property-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: ContentPropertyGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentPropertyWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/content-property-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: ContentPropertyUpdateDto) =>
    this.restService.request<any, ContentPropertyWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/content-property-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
