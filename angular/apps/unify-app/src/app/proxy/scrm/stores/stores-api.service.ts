import type { MetaData, StoreCreateDto, StoreGetListDto, StorePrimaryKeyDto, StoreSocialAccountServiceGetListDto, StoreSocialAccountServiceWithDetailsDto, StoreUpdateDto, StoreWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoresApiService {
  apiName = 'Default';

  createByStoreCreate = (StoreCreate: StoreCreateDto) =>
    this.restService.request<any, StoreWithDetailsDto>({
      method: 'POST',
      url: `/api/scrm/stores/store`,
      body: StoreCreate,
    },
    { apiName: this.apiName });

  deleteByStorePrimaryKey = (StorePrimaryKey: StorePrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/scrm/stores/store/id`,
      params: { id: StorePrimaryKey.id },
    },
    { apiName: this.apiName });

  getByStorePrimaryKey = (StorePrimaryKey: StorePrimaryKeyDto) =>
    this.restService.request<any, StoreWithDetailsDto>({
      method: 'GET',
      url: `/api/scrm/stores/store/id`,
      params: { id: StorePrimaryKey.id },
    },
    { apiName: this.apiName });

  getListByStoreGetList = (StoreGetList: StoreGetListDto) =>
    this.restService.request<any, PagedResultDto<StoreWithDetailsDto>>({
      method: 'GET',
      url: `/api/scrm/stores/store`,
      params: { fields: StoreGetList.fields, value: StoreGetList.value, sorting: StoreGetList.sorting, skipCount: StoreGetList.skipCount, maxResultCount: StoreGetList.maxResultCount },
    },
    { apiName: this.apiName });

  getListByStoreSocialAccountServiceGetList = (StoreSocialAccountServiceGetList: StoreSocialAccountServiceGetListDto) =>
    this.restService.request<any, PagedResultDto<StoreSocialAccountServiceWithDetailsDto>>({
      method: 'GET',
      url: `/api/scrm/stores/store-social-account-service`,
      params: { fields: StoreSocialAccountServiceGetList.fields, value: StoreSocialAccountServiceGetList.value, sorting: StoreSocialAccountServiceGetList.sorting, skipCount: StoreSocialAccountServiceGetList.skipCount, maxResultCount: StoreSocialAccountServiceGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/scrm/stores`,
    },
    { apiName: this.apiName });

  updateByStorePrimaryKeyAndStoreUpdate = (StorePrimaryKey: StorePrimaryKeyDto, StoreUpdate: StoreUpdateDto) =>
    this.restService.request<any, StoreWithDetailsDto>({
      method: 'PUT',
      url: `/api/scrm/stores/store/id`,
      params: { id: StorePrimaryKey.id },
      body: StoreUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
