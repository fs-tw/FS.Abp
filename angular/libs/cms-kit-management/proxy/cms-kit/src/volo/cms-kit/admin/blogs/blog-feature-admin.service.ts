import type { BlogFeatureInputDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BlogFeatureDto } from '../../blogs/models';

@Injectable({
  providedIn: 'root',
})
export class BlogFeatureAdminService {
  apiName = 'CmsKitAdmin';

  getList = (blogId: string) =>
    this.restService.request<any, BlogFeatureDto[]>({
      method: 'GET',
      url: `/api/cms-kit-admin/blogs/${blogId}/features`,
    },
    { apiName: this.apiName });

  set = (blogId: string, dto: BlogFeatureInputDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/cms-kit-admin/blogs/${blogId}/features`,
      body: dto,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
