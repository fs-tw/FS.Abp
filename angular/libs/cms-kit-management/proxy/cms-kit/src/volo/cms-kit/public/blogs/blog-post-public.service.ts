import type { BlogPostPublicDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostPublicService {
  apiName = 'CmsKitAdmin';

  get = (blogSlug: string, blogPostSlug: string) =>
    this.restService.request<any, BlogPostPublicDto>({
      method: 'GET',
      url: `/api/cms-kit-public/blog-posts/${blogSlug}/${blogPostSlug}`,
    },
    { apiName: this.apiName });

  getList = (blogSlug: string, input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<BlogPostPublicDto>>({
      method: 'GET',
      url: `/api/cms-kit-public/blog-posts/${blogSlug}`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
