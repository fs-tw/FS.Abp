import type { BlogCreateDto, BlogGetListDto, BlogPrimaryKeyDto, BlogUpdateDto, BlogWithDetailsDto, GetBlogsInput, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsApiService {
  apiName = 'Default';

  createByBlogCreate = (BlogCreate: BlogCreateDto) =>
    this.restService.request<any, BlogWithDetailsDto>({
      method: 'POST',
      url: `/api/cms/blogs/blog`,
      body: BlogCreate,
    },
    { apiName: this.apiName });

  deleteByBlogPrimaryKey = (BlogPrimaryKey: BlogPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms/blogs/blog/id`,
      params: { id: BlogPrimaryKey.id },
    },
    { apiName: this.apiName });

  getBlogsByInput = (input: GetBlogsInput) =>
    this.restService.request<any, PagedResultDto<BlogWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/blogs/get-blogs`,
      params: { keyword: input.keyword, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getByBlogPrimaryKey = (BlogPrimaryKey: BlogPrimaryKeyDto) =>
    this.restService.request<any, BlogWithDetailsDto>({
      method: 'GET',
      url: `/api/cms/blogs/blog/id`,
      params: { id: BlogPrimaryKey.id },
    },
    { apiName: this.apiName });

  getFrontBlogsByInput = (input: GetBlogsInput) =>
    this.restService.request<any, PagedResultDto<BlogWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/blogs/get-front-blogs`,
      params: { keyword: input.keyword, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getListByBlogGetList = (BlogGetList: BlogGetListDto) =>
    this.restService.request<any, PagedResultDto<BlogWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/blogs/blog`,
      params: { fields: BlogGetList.fields, value: BlogGetList.value, sorting: BlogGetList.sorting, skipCount: BlogGetList.skipCount, maxResultCount: BlogGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/cms/blogs`,
    },
    { apiName: this.apiName });

  updateByBlogPrimaryKeyAndBlogUpdate = (BlogPrimaryKey: BlogPrimaryKeyDto, BlogUpdate: BlogUpdateDto) =>
    this.restService.request<any, BlogWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms/blogs/blog/id`,
      params: { id: BlogPrimaryKey.id },
      body: BlogUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
