import type { MultiLingualFindDto, MultiLingualGetListDto, MultiLingualPatchDto, MultiLingualWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualsApiService {
  apiName = 'cms-kit-management';

  findByInput = (input: MultiLingualFindDto) =>
    this.restService.request<any, MultiLingualWithDetailsDto>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual/find',
      params: { entityType: input.entityType, entityId: input.entityId, combineWith: input.combineWith },
    },
    { apiName: this.apiName });

  getListByMultiLingual = (MultiLingual: MultiLingualGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual',
      params: { skipCount: MultiLingual.skipCount, maxResultCount: MultiLingual.maxResultCount, sorting: MultiLingual.sorting, page: MultiLingual.page, perPage: MultiLingual.perPage, sortBy: MultiLingual.sortBy, sort: MultiLingual.sort, combineWith: MultiLingual.combineWith },
    },
    { apiName: this.apiName });

  patchByInput = (input: MultiLingualPatchDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual/patch',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
