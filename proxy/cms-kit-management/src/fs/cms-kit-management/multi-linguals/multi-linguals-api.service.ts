import type { MultiLingualGetListDto, MultiLingualTranslationGetListDto, MultiLingualTranslationWithDetailsDto, MultiLingualWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualsApiService {
  apiName = 'cms-kit-management';

  getListByMultiLingual = (MultiLingual: MultiLingualGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual',
      params: { fields: MultiLingual.fields, value: MultiLingual.value, sorting: MultiLingual.sorting, skipCount: MultiLingual.skipCount, maxResultCount: MultiLingual.maxResultCount },
    },
    { apiName: this.apiName });

  getListByMultiLingualTranslation = (MultiLingualTranslation: MultiLingualTranslationGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualTranslationWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual-translation',
      params: { fields: MultiLingualTranslation.fields, value: MultiLingualTranslation.value, sorting: MultiLingualTranslation.sorting, skipCount: MultiLingualTranslation.skipCount, maxResultCount: MultiLingualTranslation.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
