import type { BlogPostSettingDto, BlogPostSettingGetDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsApiService {
  apiName = 'cms-kit-management';

  getByBlogPostSettingAndFallback = (BlogPostSetting: BlogPostSettingGetDto, fallback: boolean = true) =>
    this.restService.request<any, BlogPostSettingDto>({
      method: 'GET',
      url: '/api/cms-kit-management/blogs/blog-post-setting',
      params: { providerName: BlogPostSetting.providerName, providerKey: BlogPostSetting.providerKey, fallback },
    },
    { apiName: this.apiName });

  updateByBlogPostSettingAndProviderNameAndProviderKey = (BlogPostSetting: BlogPostSettingDto, providerName?: string, providerKey?: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/cms-kit-management/blogs/blog-post-setting',
      params: { providerName, providerKey },
      body: BlogPostSetting,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
