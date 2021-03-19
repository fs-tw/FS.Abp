import type { MetaData, RecordGetListDto, RecordItemGetListDto, RecordItemWithDetailsDto, RecordWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsApiService {
  apiName = 'Default';

  getListByRecordGetList = (RecordGetList: RecordGetListDto) =>
    this.restService.request<any, PagedResultDto<RecordWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/records/record`,
      params: { fields: RecordGetList.fields, value: RecordGetList.value, sorting: RecordGetList.sorting, skipCount: RecordGetList.skipCount, maxResultCount: RecordGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByRecordItemGetList = (RecordItemGetList: RecordItemGetListDto) =>
    this.restService.request<any, PagedResultDto<RecordItemWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/records/record-item`,
      params: { fields: RecordItemGetList.fields, value: RecordItemGetList.value, sorting: RecordItemGetList.sorting, skipCount: RecordItemGetList.skipCount, maxResultCount: RecordItemGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/form-management/records`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
