import type { BlogPostSettingDto, BlogPostSettingGetDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsApiService {
  apiName = 'cms-kit-management';

  get = (BlogPostSettingGet: BlogPostSettingGetDto, fallback: boolean = true) =>
    this.restService.request<any, BlogPostSettingDto>({
      method: 'GET',
      url: '/api/cms-kit-management/blogs/blog-post-setting',
      params: { providerName: BlogPostSettingGet.providerName, providerKey: BlogPostSettingGet.providerKey, fallback },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
