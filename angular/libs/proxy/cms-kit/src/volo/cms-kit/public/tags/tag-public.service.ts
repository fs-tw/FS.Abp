import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { TagDto } from '../../tags/models';

@Injectable({
  providedIn: 'root',
})
export class TagPublicService {
  apiName = 'CmsKitAdmin';

  getAllRelatedTagsByEntityTypeAndEntityId = (entityType: string, entityId: string) =>
    this.restService.request<any, TagDto[]>({
      method: 'GET',
      url: `/api/cms-kit-public/tags/${entityType}/${entityId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
