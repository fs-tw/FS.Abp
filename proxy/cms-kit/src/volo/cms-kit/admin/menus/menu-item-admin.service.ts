import type { MenuItemCreateInput, MenuItemMoveInput, MenuItemUpdateInput, PageLookupDto, PageLookupInputDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { MenuItemDto } from '../../menus/models';

@Injectable({
  providedIn: 'root',
})
export class MenuItemAdminService {
  apiName = 'CmsKitAdmin';

  create = (input: MenuItemCreateInput) =>
    this.restService.request<any, MenuItemDto>({
      method: 'POST',
      url: '/api/cms-kit-admin/menu-items',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/menu-items/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MenuItemDto>({
      method: 'GET',
      url: `/api/cms-kit-admin/menu-items/${id}`,
    },
    { apiName: this.apiName });

  getList = () =>
    this.restService.request<any, ListResultDto<MenuItemDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/menu-items',
    },
    { apiName: this.apiName });

  getPageLookup = (input: PageLookupInputDto) =>
    this.restService.request<any, PagedResultDto<PageLookupDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/menu-items/lookup/pages',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  moveMenuItem = (id: string, input: MenuItemMoveInput) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/cms-kit-admin/menu-items/${id}/move`,
      body: input,
    },
    { apiName: this.apiName });

  update = (id: string, input: MenuItemUpdateInput) =>
    this.restService.request<any, MenuItemDto>({
      method: 'PUT',
      url: `/api/cms-kit-admin/menu-items/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
