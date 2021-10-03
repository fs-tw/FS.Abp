import type { RouteDto } from './dtos/models';
import type { Query } from './querys/routes/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoutesQuerysApiService {
  apiName = 'cms-kit-management';

  query = (query: Query) =>
    this.restService.request<any, RouteDto[]>({
      method: 'POST',
      url: '/api/mediator/query?$type=FS.CmsKitManagement.Routes.Querys.Routes.Query',
      body: {...query,...{$type:'FS.CmsKitManagement.Routes.Querys.Routes.Query'}},
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
