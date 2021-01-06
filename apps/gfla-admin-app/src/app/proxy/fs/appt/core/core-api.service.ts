import type { AreaGetListDto, AreaWithDetailsDto, CustomerGetListDto, CustomerWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreApiService {
  apiName = 'Default';

  getListByAreaGetList = (AreaGetList: AreaGetListDto) =>
    this.restService.request<any, PagedResultDto<AreaWithDetailsDto>>({
      method: 'GET',
      url: `/api/appt/core/area`,
      params: { fields: AreaGetList.fields, value: AreaGetList.value, sorting: AreaGetList.sorting, skipCount: AreaGetList.skipCount, maxResultCount: AreaGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByCustomerGetList = (CustomerGetList: CustomerGetListDto) =>
    this.restService.request<any, PagedResultDto<CustomerWithDetailsDto>>({
      method: 'GET',
      url: `/api/appt/core/customer`,
      params: { fields: CustomerGetList.fields, value: CustomerGetList.value, sorting: CustomerGetList.sorting, skipCount: CustomerGetList.skipCount, maxResultCount: CustomerGetList.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
