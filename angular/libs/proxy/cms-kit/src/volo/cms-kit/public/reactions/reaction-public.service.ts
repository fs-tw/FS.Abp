import type { ReactionWithSelectionDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReactionPublicService {
  apiName = 'CmsKitAdmin';

  createByEntityTypeAndEntityIdAndReaction = (entityType: string, entityId: string, reaction: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/cms-kit-public/reactions/${entityType}/${entityId}/${reaction}`,
    },
    { apiName: this.apiName });

  deleteByEntityTypeAndEntityIdAndReaction = (entityType: string, entityId: string, reaction: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-public/reactions/${entityType}/${entityId}/${reaction}`,
    },
    { apiName: this.apiName });

  getForSelectionByEntityTypeAndEntityId = (entityType: string, entityId: string) =>
    this.restService.request<any, ListResultDto<ReactionWithSelectionDto>>({
      method: 'GET',
      url: `/api/cms-kit-public/reactions/${entityType}/${entityId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
