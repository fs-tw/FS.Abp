import type { MultiLingualGetListDto, MultiLingualTranslationGetListDto, MultiLingualTranslationWithDetailsDto, MultiLingualWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualsApiService {
  apiName = 'cms-kit-management';

  getList = (MultiLingualTranslationGetList: MultiLingualTranslationGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualTranslationWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual-translation',
      params: { fields: MultiLingualTranslationGetList.fields, value: MultiLingualTranslationGetList.value, sorting: MultiLingualTranslationGetList.sorting, skipCount: MultiLingualTranslationGetList.skipCount, maxResultCount: MultiLingualTranslationGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (MultiLingualGetList: MultiLingualGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-linguals/multi-lingual',
      params: { fields: MultiLingualGetList.fields, value: MultiLingualGetList.value, sorting: MultiLingualGetList.sorting, skipCount: MultiLingualGetList.skipCount, maxResultCount: MultiLingualGetList.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
