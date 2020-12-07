import type { EditionCreateDto, EditionDto, EditionUpdateDto, GetEditionsInput } from './dtos/models';
import type { GetEditionUsageStatisticsResult } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditionService {
  apiName = 'SaasHost';

  create = (input: EditionCreateDto) =>
    this.restService.request<any, EditionDto>({
      method: 'POST',
      url: `/api/saas/editions`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/saas/editions/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, EditionDto>({
      method: 'GET',
      url: `/api/saas/editions/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetEditionsInput) =>
    this.restService.request<any, PagedResultDto<EditionDto>>({
      method: 'GET',
      url: `/api/saas/editions`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getUsageStatistics = () =>
    this.restService.request<any, GetEditionUsageStatisticsResult>({
      method: 'GET',
      url: `/api/saas/editions/statistics/usage-statistic`,
    },
    { apiName: this.apiName });

  update = (id: string, input: EditionUpdateDto) =>
    this.restService.request<any, EditionDto>({
      method: 'PUT',
      url: `/api/saas/editions/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
