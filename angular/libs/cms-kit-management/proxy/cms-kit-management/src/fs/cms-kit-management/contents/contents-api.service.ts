import type { ContentDefinitionGetListDto, ContentDefinitionWithDetailsDto, ContentPropertyGetListDto, ContentPropertyWithDetailsDto, EntityContentDefinitionGetListDto, EntityContentDefinitionWithDetailsDto, EntityContentGetListDto, EntityContentWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentsApiService {
  apiName = 'cms-kit-management';

  getListByContentDefinition = (ContentDefinition: ContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-definition',
      params: { filter: ContentDefinition.filter, skipCount: ContentDefinition.skipCount, maxResultCount: ContentDefinition.maxResultCount, page: ContentDefinition.page, perPage: ContentDefinition.perPage, combineWith: ContentDefinition.combineWith, sort: ContentDefinition.sort, sortBy: ContentDefinition.sortBy, sorting: ContentDefinition.sorting },
    },
    { apiName: this.apiName });

  getListByContentProperty = (ContentProperty: ContentPropertyGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentPropertyWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-property',
      params: { skipCount: ContentProperty.skipCount, maxResultCount: ContentProperty.maxResultCount, page: ContentProperty.page, perPage: ContentProperty.perPage, combineWith: ContentProperty.combineWith, sort: ContentProperty.sort, sortBy: ContentProperty.sortBy, sorting: ContentProperty.sorting },
    },
    { apiName: this.apiName });

  getListByEntityContent = (EntityContent: EntityContentGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/entity-content',
      params: { skipCount: EntityContent.skipCount, maxResultCount: EntityContent.maxResultCount, page: EntityContent.page, perPage: EntityContent.perPage, combineWith: EntityContent.combineWith, sort: EntityContent.sort, sortBy: EntityContent.sortBy, sorting: EntityContent.sorting },
    },
    { apiName: this.apiName });

  getListByEntityContentDefinition = (EntityContentDefinition: EntityContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/entity-content-definition',
      params: { entityType: EntityContentDefinition.entityType, entityId: EntityContentDefinition.entityId, skipCount: EntityContentDefinition.skipCount, maxResultCount: EntityContentDefinition.maxResultCount, page: EntityContentDefinition.page, perPage: EntityContentDefinition.perPage, combineWith: EntityContentDefinition.combineWith, sort: EntityContentDefinition.sort, sortBy: EntityContentDefinition.sortBy, sorting: EntityContentDefinition.sorting },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
