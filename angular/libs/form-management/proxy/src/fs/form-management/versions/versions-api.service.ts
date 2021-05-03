import type { MetaData, VersionDefinitionGetListDto, VersionDefinitionWithDetailsDto, VersionGetListDto, VersionWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionsApiService {
  apiName = 'Default';

  getListByVersionDefinitionGetList = (VersionDefinitionGetList: VersionDefinitionGetListDto) =>
    this.restService.request<any, PagedResultDto<VersionDefinitionWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/versions/version-definition`,
      params: { fields: VersionDefinitionGetList.fields, value: VersionDefinitionGetList.value, sorting: VersionDefinitionGetList.sorting, skipCount: VersionDefinitionGetList.skipCount, maxResultCount: VersionDefinitionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByVersionGetList = (VersionGetList: VersionGetListDto) =>
    this.restService.request<any, PagedResultDto<VersionWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/versions/version`,
      params: { fields: VersionGetList.fields, value: VersionGetList.value, sorting: VersionGetList.sorting, skipCount: VersionGetList.skipCount, maxResultCount: VersionGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/form-management/versions`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
