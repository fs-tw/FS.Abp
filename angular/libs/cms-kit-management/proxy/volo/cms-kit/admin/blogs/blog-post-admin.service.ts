import type { BlogPostDto, BlogPostGetListInput, BlogPostListDto, CreateBlogPostDto, UpdateBlogPostDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostAdminService {
  apiName = 'CmsKitAdmin';

  createByInput = (input: CreateBlogPostDto) =>
    this.restService.request<any, BlogPostDto>({
      method: 'POST',
      url: '/api/cms-kit-admin/blogs/blog-posts',
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/blogs/blog-posts/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, BlogPostDto>({
      method: 'GET',
      url: `/api/cms-kit-admin/blogs/blog-posts/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: BlogPostGetListInput) =>
    this.restService.request<any, PagedResultDto<BlogPostListDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/blogs/blog-posts',
      params: { filter: input.filter, blogId: input.blogId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: UpdateBlogPostDto) =>
    this.restService.request<any, BlogPostDto>({
      method: 'PUT',
      url: `/api/cms-kit-admin/blogs/blog-posts/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
