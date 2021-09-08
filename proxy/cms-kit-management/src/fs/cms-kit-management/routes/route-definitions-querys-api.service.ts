import type { RouteDefinitionDto } from './dtos/models';
import type { Query } from './querys/route-definitions/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteDefinitionsQuerysApiService {
  apiName = 'cms-kit-management';

  query = (query: Query) =>
    this.restService.request<any, RouteDefinitionDto[]>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Routes.Querys.RouteDefinitions.Query',
      body: {...query,...{$type:'FS.CmsKitManagement.Routes.Querys.RouteDefinitions.Query'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
