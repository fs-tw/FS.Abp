import type { BlogPostSettingDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogPostSettingService {
  apiName = 'cms-kit-management';

  get = (providerName: string, providerKey: string, fallback: boolean = true) =>
    this.restService.request<any, BlogPostSettingDto>({
      method: 'GET',
      url: '/api/cms-kit-management/blog-post-setting',
      params: { providerName, providerKey, fallback },
    },
    { apiName: this.apiName });

  update = (input: BlogPostSettingDto, providerName?: string, providerKey?: string, forceToSet: boolean = true) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/cms-kit-management/blog-post-setting',
      params: { providerName, providerKey, forceToSet },
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
