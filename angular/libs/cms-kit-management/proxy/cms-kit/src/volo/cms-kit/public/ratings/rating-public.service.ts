import type { CreateUpdateRatingInput, RatingDto, RatingWithStarCountDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingPublicService {
  apiName = 'CmsKitAdmin';

  create = (entityType: string, entityId: string, input: CreateUpdateRatingInput) =>
    this.restService.request<any, RatingDto>({
      method: 'PUT',
      url: `/api/cms-kit-public/ratings/${entityType}/${entityId}`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (entityType: string, entityId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-public/ratings/${entityType}/${entityId}`,
    },
    { apiName: this.apiName });

  getGroupedStarCounts = (entityType: string, entityId: string) =>
    this.restService.request<any, RatingWithStarCountDto[]>({
      method: 'GET',
      url: `/api/cms-kit-public/ratings/${entityType}/${entityId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
