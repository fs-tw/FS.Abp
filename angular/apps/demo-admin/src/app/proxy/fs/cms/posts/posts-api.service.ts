import type { GetPostByBlogIdInput, MetaData, PostCreateDto, PostGetListDto, PostPrimaryKeyDto, PostTagMapGetListDto, PostTagMapWithDetailsDto, PostUpdateDto, PostWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  apiName = 'Default';

  createByPostCreate = (PostCreate: PostCreateDto) =>
    this.restService.request<any, PostWithDetailsDto>({
      method: 'POST',
      url: `/api/cms/posts/post`,
      body: PostCreate,
    },
    { apiName: this.apiName });

  deleteByPostPrimaryKey = (PostPrimaryKey: PostPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms/posts/post/id`,
      params: { id: PostPrimaryKey.id },
    },
    { apiName: this.apiName });

  getByPostPrimaryKey = (PostPrimaryKey: PostPrimaryKeyDto) =>
    this.restService.request<any, PostWithDetailsDto>({
      method: 'GET',
      url: `/api/cms/posts/post/id`,
      params: { id: PostPrimaryKey.id },
    },
    { apiName: this.apiName });

  getFrontPostsByBlogIdByInput = (input: GetPostByBlogIdInput) =>
    this.restService.request<any, PagedResultDto<PostWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/posts/get-front-posts-by-blog-id`,
      params: { blogId: input.blogId, keyword: input.keyword, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getListByPostGetList = (PostGetList: PostGetListDto) =>
    this.restService.request<any, PagedResultDto<PostWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/posts/post`,
      params: { fields: PostGetList.fields, value: PostGetList.value, sorting: PostGetList.sorting, skipCount: PostGetList.skipCount, maxResultCount: PostGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByPostTagMapGetList = (PostTagMapGetList: PostTagMapGetListDto) =>
    this.restService.request<any, PagedResultDto<PostTagMapWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/posts/post-tag-map`,
      params: { fields: PostTagMapGetList.fields, value: PostTagMapGetList.value, sorting: PostTagMapGetList.sorting, skipCount: PostTagMapGetList.skipCount, maxResultCount: PostTagMapGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getPostsByBlogIdByInput = (input: GetPostByBlogIdInput) =>
    this.restService.request<any, PagedResultDto<PostWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/posts/get-posts-by-blog-id`,
      params: { blogId: input.blogId, keyword: input.keyword, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/cms/posts`,
    },
    { apiName: this.apiName });

  updateByPostPrimaryKeyAndPostUpdate = (PostPrimaryKey: PostPrimaryKeyDto, PostUpdate: PostUpdateDto) =>
    this.restService.request<any, PostWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms/posts/post/id`,
      params: { id: PostPrimaryKey.id },
      body: PostUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
