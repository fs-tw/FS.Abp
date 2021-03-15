import type { MetaData, WebSiteDefinitionGetListDto, WebSiteDefinitionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSitesApiService {
  apiName = 'Default';

  getListByWebSiteDefinitionGetList = (WebSiteDefinitionGetList: WebSiteDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<WebSiteDefinitionWithDetailsDto>>({
      method: 'GET',
      url: `/api/theme/web-sites/web-site-definition`,
      params: { fields: WebSiteDefinitionGetList.fields, value: WebSiteDefinitionGetList.value, sorting: WebSiteDefinitionGetList.sorting, skipCount: WebSiteDefinitionGetList.skipCount, maxResultCount: WebSiteDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/theme/web-sites`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
