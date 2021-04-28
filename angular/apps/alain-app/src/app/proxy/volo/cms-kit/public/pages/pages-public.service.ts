import type { PageDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagesPublicService {
  apiName = 'CmsKitAdmin';

  findBySlugBySlug = (slug: string) =>
    this.restService.request<any, PageDto>({
      method: 'GET',
      url: `/api/cms-kit-public/pages/${slug}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
