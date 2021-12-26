import type { EntityBlogGetListDto, EntityBlogWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityBlogsApiService {
  apiName = 'cms-kit-management';

  getListByEntityBlog = (EntityBlog: EntityBlogGetListDto) =>
    this.restService.request<any, PagedResultDto<EntityBlogWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/entity-blogs/entity-blog',
      params: { entityType: EntityBlog.entityType, entityId: EntityBlog.entityId, skipCount: EntityBlog.skipCount, maxResultCount: EntityBlog.maxResultCount, sorting: EntityBlog.sorting, page: EntityBlog.page, perPage: EntityBlog.perPage, sortBy: EntityBlog.sortBy, sort: EntityBlog.sort, combineWith: EntityBlog.combineWith },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
