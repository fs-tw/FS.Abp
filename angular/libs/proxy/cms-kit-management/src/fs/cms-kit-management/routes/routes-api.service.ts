import type { MetaData, RouteDefinitionDto, RouteDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoutesApiService {
  apiName = 'cms-kit-management';

  getRouteDefinitions = () =>
    this.restService.request<any, RouteDefinitionDto[]>({
      method: 'GET',
      url: '/api/cms-kit-management/routes/route-definitions',
    },
    { apiName: this.apiName });

  getRoutesByRouteDefinitionId = (routeDefinitionId: string) =>
    this.restService.request<any, RouteDto[]>({
      method: 'GET',
      url: `/api/cms-kit-management/routes/routes/${routeDefinitionId}`,
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: '/api/cms-kit-management/routes',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
