import type { CustomerGetListDto, CustomerWithDetailsDto, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersApiService {
  apiName = 'Default';

  getListByCustomerGetList = (CustomerGetList: CustomerGetListDto) =>
    this.restService.request<any, PagedResultDto<CustomerWithDetailsDto>>({
      method: 'GET',
      url: `/api/fs/customers/customer`,
      params: { discriminator: CustomerGetList.discriminator, fields: CustomerGetList.fields, value: CustomerGetList.value, sorting: CustomerGetList.sorting, skipCount: CustomerGetList.skipCount, maxResultCount: CustomerGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/fs/customers`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
