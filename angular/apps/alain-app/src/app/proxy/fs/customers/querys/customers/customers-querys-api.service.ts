import type { FindQuery, Query } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CustomerWithDetailsDto } from '../../dtos/models';

@Injectable({
  providedIn: 'root',
})
export class CustomersQuerysApiService {
  apiName = 'Default';

  findQuery = (query: FindQuery) =>
    this.restService.request<any, CustomerWithDetailsDto>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.Customers.Querys.Customers.FindQuery',
      body: {...query,...{$type:'FS.Customers.Querys.Customers.FindQuery'}},
    },
    { apiName: this.apiName });

  query = (query: Query) =>
    this.restService.request<any, PagedResultDto<CustomerWithDetailsDto>>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.Customers.Querys.Customers.Query',
      body: {...query,...{$type:'FS.Customers.Querys.Customers.Query'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
