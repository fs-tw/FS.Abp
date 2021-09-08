import type { EntityTagCreateDto, EntityTagRemoveDto, EntityTagSetDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntityTagAdminService {
  apiName = 'CmsKitAdmin';

  addTagToEntity = (input: EntityTagCreateDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-kit-admin/entity-tags',
      body: input,
    },
    { apiName: this.apiName });

  removeTagFromEntity = (input: EntityTagRemoveDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/cms-kit-admin/entity-tags',
      params: { tagId: input.tagId, entityType: input.entityType, entityId: input.entityId },
    },
    { apiName: this.apiName });

  setEntityTags = (input: EntityTagSetDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/cms-kit-admin/entity-tags',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
