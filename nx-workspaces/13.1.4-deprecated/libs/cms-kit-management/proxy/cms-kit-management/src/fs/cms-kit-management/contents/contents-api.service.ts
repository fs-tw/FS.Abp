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
      params: { filter: ContentDefinition.filter, skipCount: ContentDefinition.skipCount, maxResultCount: ContentDefinition.maxResultCount, sorting: ContentDefinition.sorting, page: ContentDefinition.page, perPage: ContentDefinition.perPage, sortBy: ContentDefinition.sortBy, sort: ContentDefinition.sort, combineWith: ContentDefinition.combineWith },
    },
    { apiName: this.apiName });

  getListByContentProperty = (ContentProperty: ContentPropertyGetListDto) =>
    this.restService.request<any, PagedResultDto<ContentPropertyWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/content-property',
      params: { skipCount: ContentProperty.skipCount, maxResultCount: ContentProperty.maxResultCount, sorting: ContentProperty.sorting, page: ContentProperty.page, perPage: ContentProperty.perPage, sortBy: ContentProperty.sortBy, sort: ContentProperty.sort, combineWith: ContentProperty.combineWith },
    },
    { apiName: this.apiName });

  getListByEntityContent = (EntityContent: EntityContentGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/entity-content',
      params: { skipCount: EntityContent.skipCount, maxResultCount: EntityContent.maxResultCount, sorting: EntityContent.sorting, page: EntityContent.page, perPage: EntityContent.perPage, sortBy: EntityContent.sortBy, sort: EntityContent.sort, combineWith: EntityContent.combineWith },
    },
    { apiName: this.apiName });

  getListByEntityContentDefinition = (EntityContentDefinition: EntityContentDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityContentDefinitionWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/contents/entity-content-definition',
      params: { entityType: EntityContentDefinition.entityType, entityId: EntityContentDefinition.entityId, skipCount: EntityContentDefinition.skipCount, maxResultCount: EntityContentDefinition.maxResultCount, sorting: EntityContentDefinition.sorting, page: EntityContentDefinition.page, perPage: EntityContentDefinition.perPage, sortBy: EntityContentDefinition.sortBy, sort: EntityContentDefinition.sort, combineWith: EntityContentDefinition.combineWith },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
