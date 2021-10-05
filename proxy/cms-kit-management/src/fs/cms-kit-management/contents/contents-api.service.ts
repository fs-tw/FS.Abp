import type { ContentDefinitionGetListDto, ContentDefinitionWithDetailsDto, ContentGetListDto, ContentTypeGetListDto, ContentTypeWithDetailsDto, ContentWithDetailsDto, EntityContentDefinitionGetListDto, EntityContentDefinitionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentsApiService {
  apiName = 'cms-kit-management';

  getListByContent = (Content: ContentGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content',
      params: { fields: Content.fields, value: Content.value, sorting: Content.sorting, skipCount: Content.skipCount, maxResultCount: Content.maxResultCount },
    },
    { apiName: this.apiName });

  getListByContentDefinition = (ContentDefinition: ContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-definition',
      params: { fields: ContentDefinition.fields, value: ContentDefinition.value, sorting: ContentDefinition.sorting, skipCount: ContentDefinition.skipCount, maxResultCount: ContentDefinition.maxResultCount },
    },
    { apiName: this.apiName });

  getListByContentType = (ContentType: ContentTypeGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentTypeWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-type',
      params: { fields: ContentType.fields, value: ContentType.value, sorting: ContentType.sorting, skipCount: ContentType.skipCount, maxResultCount: ContentType.maxResultCount },
    },
    { apiName: this.apiName });

  getListByEntityContentDefinition = (EntityContentDefinition: EntityContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/entity-content-definition',
      params: { fields: EntityContentDefinition.fields, value: EntityContentDefinition.value, sorting: EntityContentDefinition.sorting, skipCount: EntityContentDefinition.skipCount, maxResultCount: EntityContentDefinition.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
