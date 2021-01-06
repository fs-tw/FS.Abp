import type { BannerForCreateDto, BannerForSort, MenuForCreateDto, MenuForUpdateDto, ThemeDto, ThemeForUpdateDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefinitionsService {
  apiName = 'Default';

  createThemeBannerByThemeNoAndInput = (themeNo: string, input: BannerForCreateDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/theme-core/banner/${themeNo}`,
      body: input,
    },
    { apiName: this.apiName });

  createThemeMenuByThemeNoAndInput = (themeNo: string, input: MenuForCreateDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/theme-core/menu/${themeNo}`,
      body: input,
    },
    { apiName: this.apiName });

  deleteThemeCodeById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/theme-core/${id}`,
    },
    { apiName: this.apiName });

  getThemeByThemeNo = (themeNo: string) =>
    this.restService.request<any, ThemeDto>({
      method: 'GET',
      url: `/api/theme-core/${themeNo}`,
    },
    { apiName: this.apiName });

  getThemeDefinitionChildren = () =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: `/api/theme-core/themeNos`,
    },
    { apiName: this.apiName });

  putBannersForSortByThemeNoAndInput = (themeNo: string, input: BannerForSort) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/theme-core/banners-for-sort/${themeNo}`,
      body: input,
    },
    { apiName: this.apiName });

  putThemeMenuByThemeNoAndInput = (themeNo: string, input: MenuForUpdateDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/theme-core/menu/${themeNo}`,
      body: input,
    },
    { apiName: this.apiName });

  putThemeSettingByThemeNoAndInput = (themeNo: string, input: ThemeForUpdateDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/theme-core/theme-setting/${themeNo}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
