import type { BlogPostDto } from './dtos/models';
import type { BlogQuery, FindQuery, RouteQuery, SlugQuery } from './querys/blog-posts/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsQuerysApiService {
  apiName = 'cms-kit-management';

  blogQuery = (query: BlogQuery) =>
    this.restService.request<any, PagedResultDto<BlogPostDto>>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Blogs.Querys.BlogPosts.BlogQuery',
      body: {...query,...{$type:'FS.CmsKitManagement.Blogs.Querys.BlogPosts.BlogQuery'}},
    },
    { apiName: this.apiName });

  findQuery = (query: FindQuery) =>
    this.restService.request<any, BlogPostDto>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Blogs.Querys.BlogPosts.FindQuery',
      body: {...query,...{$type:'FS.CmsKitManagement.Blogs.Querys.BlogPosts.FindQuery'}},
    },
    { apiName: this.apiName });

  routeQuery = (query: RouteQuery) =>
    this.restService.request<any, PagedResultDto<BlogPostDto>>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Blogs.Querys.BlogPosts.RouteQuery',
      body: {...query,...{$type:'FS.CmsKitManagement.Blogs.Querys.BlogPosts.RouteQuery'}},
    },
    { apiName: this.apiName });

  slugQuery = (query: SlugQuery) =>
    this.restService.request<any, BlogPostDto>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Blogs.Querys.BlogPosts.SlugQuery',
      body: {...query,...{$type:'FS.CmsKitManagement.Blogs.Querys.BlogPosts.SlugQuery'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
