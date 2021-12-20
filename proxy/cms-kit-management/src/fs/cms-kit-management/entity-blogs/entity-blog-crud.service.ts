import type { EntityBlogCreateDto, EntityBlogGetListDto, EntityBlogUpdateDto, EntityBlogWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityBlogCrudService {
  apiName = 'cms-kit-management';

  create = (input: EntityBlogCreateDto) =>
    this.restService.request<any, EntityBlogWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/entity-blog-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/entity-blog-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EntityBlogWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/entity-blog-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: EntityBlogGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityBlogWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/entity-blog-crud',
      params: { entityType: input.entityType, entityId: input.entityId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: EntityBlogUpdateDto) =>
    this.restService.request<any, EntityBlogWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/entity-blog-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
