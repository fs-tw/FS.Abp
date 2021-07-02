import type { BlogFeatureDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogFeatureService {
  apiName = 'CmsKitAdmin';

  getOrDefault = (blogId: string, featureName: string) =>
    this.restService.request<any, BlogFeatureDto>({
      method: 'GET',
      url: `/api/cms-kit/blogs/${blogId}/features/${featureName}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
