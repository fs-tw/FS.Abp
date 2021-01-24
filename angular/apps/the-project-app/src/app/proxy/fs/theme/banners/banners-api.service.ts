import type { BannerDefinitionGetListDto, BannerDefinitionWithDetailsDto, BannerGetListDto, BannerWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BannersApiService {
  apiName = 'Default';

  getListByBannerDefinitionGetList = (BannerDefinitionGetList: BannerDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<BannerDefinitionWithDetailsDto>>({
      method: 'GET',
      url: `/api/theme/banners/banner-definition`,
      params: { fields: BannerDefinitionGetList.fields, value: BannerDefinitionGetList.value, sorting: BannerDefinitionGetList.sorting, skipCount: BannerDefinitionGetList.skipCount, maxResultCount: BannerDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByBannerGetList = (BannerGetList: BannerGetListDto) =>
    this.restService.request<any, PagedResultDto<BannerWithDetailsDto>>({
      method: 'GET',
      url: `/api/theme/banners/banner`,
      params: { fields: BannerGetList.fields, value: BannerGetList.value, sorting: BannerGetList.sorting, skipCount: BannerGetList.skipCount, maxResultCount: BannerGetList.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
