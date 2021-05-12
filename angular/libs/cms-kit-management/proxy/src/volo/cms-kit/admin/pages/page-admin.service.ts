import type { CreatePageInputDto, GetPagesInputDto, PageDto, UpdatePageInputDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageAdminService {
  apiName = 'CmsKitAdmin';

  createByInput = (input: CreatePageInputDto) =>
    this.restService.request<any, PageDto>({
      method: 'POST',
      url: '/api/cms-kit-admin/pages',
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/pages/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, PageDto>({
      method: 'GET',
      url: `/api/cms-kit-admin/pages/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: GetPagesInputDto) =>
    this.restService.request<any, PagedResultDto<PageDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/pages',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: UpdatePageInputDto) =>
    this.restService.request<any, PageDto>({
      method: 'PUT',
      url: `/api/cms-kit-admin/pages/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
