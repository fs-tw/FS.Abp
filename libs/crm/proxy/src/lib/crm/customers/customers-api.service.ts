import type { CustomerCreateDto, CustomerGetListDto, CustomerPrimaryKeyDto, CustomerUpdateDto, CustomerWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersApiService {
  apiName = 'Default';

  createByCustomerCreate = (CustomerCreate: CustomerCreateDto) =>
    this.restService.request<any, CustomerWithDetailsDto>({
      method: 'POST',
      url: `/api/crm/customers/customer`,
      body: CustomerCreate,
    },
    { apiName: this.apiName });

  deleteByCustomerPrimaryKey = (CustomerPrimaryKey: CustomerPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/crm/customers/customer/id`,
      params: { id: CustomerPrimaryKey.id },
    },
    { apiName: this.apiName });

  getByCustomerPrimaryKey = (CustomerPrimaryKey: CustomerPrimaryKeyDto) =>
    this.restService.request<any, CustomerWithDetailsDto>({
      method: 'GET',
      url: `/api/crm/customers/customer/id`,
      params: { id: CustomerPrimaryKey.id },
    },
    { apiName: this.apiName });

  getListByCustomerGetList = (CustomerGetList: CustomerGetListDto) =>
    this.restService.request<any, PagedResultDto<CustomerWithDetailsDto>>({
      method: 'GET',
      url: `/api/crm/customers/customer`,
      params: { fields: CustomerGetList.fields, value: CustomerGetList.value, sorting: CustomerGetList.sorting, skipCount: CustomerGetList.skipCount, maxResultCount: CustomerGetList.maxResultCount },
    },
    { apiName: this.apiName });

  updateByCustomerPrimaryKeyAndCustomerUpdate = (CustomerPrimaryKey: CustomerPrimaryKeyDto, CustomerUpdate: CustomerUpdateDto) =>
    this.restService.request<any, CustomerWithDetailsDto>({
      method: 'PUT',
      url: `/api/crm/customers/customer/id`,
      params: { id: CustomerPrimaryKey.id },
      body: CustomerUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
