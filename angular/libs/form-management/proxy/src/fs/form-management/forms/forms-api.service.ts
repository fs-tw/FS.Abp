import type { FormalGetListDto, FormalWithDetailsDto, GroupGetListDto, GroupWithDetailsDto, ItemGetListDto, ItemWithDetailsDto, MetaData } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsApiService {
  apiName = 'Default';

  getListByFormalGetList = (FormalGetList: FormalGetListDto) =>
    this.restService.request<any, PagedResultDto<FormalWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/forms/formal`,
      params: { fields: FormalGetList.fields, value: FormalGetList.value, sorting: FormalGetList.sorting, skipCount: FormalGetList.skipCount, maxResultCount: FormalGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByGroupGetList = (GroupGetList: GroupGetListDto) =>
    this.restService.request<any, PagedResultDto<GroupWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/forms/group`,
      params: { fields: GroupGetList.fields, value: GroupGetList.value, sorting: GroupGetList.sorting, skipCount: GroupGetList.skipCount, maxResultCount: GroupGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByItemGetList = (ItemGetList: ItemGetListDto) =>
    this.restService.request<any, PagedResultDto<ItemWithDetailsDto>>({
      method: 'GET',
      url: `/api/form-management/forms/item`,
      params: { fields: ItemGetList.fields, value: ItemGetList.value, sorting: ItemGetList.sorting, skipCount: ItemGetList.skipCount, maxResultCount: ItemGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/form-management/forms`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
