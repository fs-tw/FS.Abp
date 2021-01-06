import { PostCreateDto, PostGetListDto, PostPrimaryKeyDto, PostUpdateDto, PostWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  apiName = 'Default';

  create = (input: PostCreateDto) =>
    this.restService.request<any, PostWithDetailsDto>({
      method: 'POST',
      url: `/api/cms/posts/post`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (key: PostPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms/posts/post/id`,
      params: { id: key.id },
    },
    { apiName: this.apiName });

  get = (key: PostPrimaryKeyDto) =>
    this.restService.request<any, PostWithDetailsDto>({
      method: 'GET',
      url: `/api/cms/posts/post/id`,
      params: { id: key.id },
    },
    { apiName: this.apiName });

  getList = (input: PostGetListDto) =>
    this.restService.request<any, PagedResultDto<PostWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/posts/post`,
      params: { blogCodeId: input.blogCodeId, fields: input.fields, value: input.value, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (key: PostPrimaryKeyDto, input: PostUpdateDto) =>
    this.restService.request<any, PostWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms/posts/post/id`,
      params: { id: key.id },
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
