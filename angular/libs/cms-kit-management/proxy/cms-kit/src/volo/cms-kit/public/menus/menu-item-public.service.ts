import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { MenuItemDto } from '../../menus/models';

@Injectable({
  providedIn: 'root',
})
export class MenuItemPublicService {
  apiName = 'CmsKitAdmin';

  getList = () =>
    this.restService.request<any, MenuItemDto[]>({
      method: 'GET',
      url: '/api/cms-kit-public/menu-items',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
