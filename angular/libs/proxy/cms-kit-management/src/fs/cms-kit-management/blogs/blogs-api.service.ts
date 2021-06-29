import type { BlogDto, BlogPostDto, BlogPostSettingDto, BlogPostSettingGetDto, MetaData, PetchBlogPostDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsApiService {
  apiName = 'Default';

  get = () =>
    this.restService.request<any, BlogDto[]>({
      method: 'GET',
      url: '/api/cms-kit-management/blogs/blog',
    },
    { apiName: this.apiName });

  getBlogPostByIdById = (id: string) =>
    this.restService.request<any, BlogPostDto>({
      method: 'GET',
      url: `/api/cms-kit-management/blogs/blog-post/admin/${id}`,
    },
    { apiName: this.apiName });

  getBlogPostBySlugByBlogSlugAndBlogPostSlug = (blogSlug: string, blogPostSlug: string) =>
    this.restService.request<any, BlogPostDto>({
      method: 'GET',
      url: `/api/cms-kit-management/blogs/blog-post/slug/${blogSlug}/${blogPostSlug}`,
    },
    { apiName: this.apiName });

  getBlogPostsByBlogSlugAndInput = (blogSlug: string, input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<BlogPostDto>>({
      method: 'GET',
      url: `/api/cms-kit-management/blogs/blog-post/blog-slug/${blogSlug}`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  getBlogPostsByRouteIdAndInput = (routeId: string, input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<BlogPostDto>>({
      method: 'GET',
      url: `/api/cms-kit-management/blogs/blog-post/route/${routeId}`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  getByBlogPostSettingGetAndFallback = (BlogPostSettingGet: BlogPostSettingGetDto, fallback: boolean = true) =>
    this.restService.request<any, BlogPostSettingDto>({
      method: 'GET',
      url: '/api/cms-kit-management/blogs/blog-post-setting',
      params: { providerName: BlogPostSettingGet.providerName, providerKey: BlogPostSettingGet.providerKey, fallback },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: '/api/cms-kit-management/blogs',
    },
    { apiName: this.apiName });

  patchBlogPostByInput = (input: PetchBlogPostDto) =>
    this.restService.request<any, BlogPostDto>({
      method: 'PATCH',
      url: '/api/cms-kit-management/blogs/blog-post/admin',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
