import type { ContentDefinitionGetListDto, ContentDefinitionWithDetailsDto, ContentGetListDto, ContentTypeGetListDto, ContentTypeWithDetailsDto, ContentWithDetailsDto, EntityContentDefinitionGetListDto, EntityContentDefinitionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentsApiService {
  apiName = 'cms-kit-management';

  getList = (EntityContentDefinitionGetList: EntityContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/entity-content-definition',
      params: { fields: EntityContentDefinitionGetList.fields, value: EntityContentDefinitionGetList.value, sorting: EntityContentDefinitionGetList.sorting, skipCount: EntityContentDefinitionGetList.skipCount, maxResultCount: EntityContentDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (ContentTypeGetList: ContentTypeGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentTypeWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-type',
      params: { fields: ContentTypeGetList.fields, value: ContentTypeGetList.value, sorting: ContentTypeGetList.sorting, skipCount: ContentTypeGetList.skipCount, maxResultCount: ContentTypeGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (ContentDefinitionGetList: ContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-definition',
      params: { fields: ContentDefinitionGetList.fields, value: ContentDefinitionGetList.value, sorting: ContentDefinitionGetList.sorting, skipCount: ContentDefinitionGetList.skipCount, maxResultCount: ContentDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (ContentGetList: ContentGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content',
      params: { fields: ContentGetList.fields, value: ContentGetList.value, sorting: ContentGetList.sorting, skipCount: ContentGetList.skipCount, maxResultCount: ContentGetList.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
