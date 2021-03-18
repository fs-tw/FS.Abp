import type { MetaData, RouteDefinitionGetListDto, RouteDefinitionWithDetailsDto, RouteGetListDto, RouteWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoutesApiService {
  apiName = 'Default';

  getListByRouteDefinitionGetList = (RouteDefinitionGetList: RouteDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<RouteDefinitionWithDetailsDto>>({
      method: 'GET',
      url: `/api/theme/routes/route-definition`,
      params: { fields: RouteDefinitionGetList.fields, value: RouteDefinitionGetList.value, sorting: RouteDefinitionGetList.sorting, skipCount: RouteDefinitionGetList.skipCount, maxResultCount: RouteDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByRouteGetList = (RouteGetList: RouteGetListDto) =>
    this.restService.request<any, PagedResultDto<RouteWithDetailsDto>>({
      method: 'GET',
      url: `/api/theme/routes/route`,
      params: { fields: RouteGetList.fields, value: RouteGetList.value, sorting: RouteGetList.sorting, skipCount: RouteGetList.skipCount, maxResultCount: RouteGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/theme/routes`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
