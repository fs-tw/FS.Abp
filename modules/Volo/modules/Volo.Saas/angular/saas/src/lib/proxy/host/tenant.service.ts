import type { GetTenantsInput, SaasTenantCreateDto, SaasTenantDto, SaasTenantUpdateDto } from './dtos/models';
import type { PagedResultDto } from '@abp/ng.core';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  apiName = 'SaasHost';

  create = (input: SaasTenantCreateDto) =>
    this.restService.request<any, SaasTenantDto>(
      {
        method: 'POST',
        url: `/api/saas/tenants`,
        body: input,
      },
      { apiName: this.apiName },
    );

  delete = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/saas/tenants/${id}`,
      },
      { apiName: this.apiName },
    );

  deleteDefaultConnectionString = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/saas/tenants/${id}/default-connection-string`,
      },
      { apiName: this.apiName },
    );

  get = (id: string) =>
    this.restService.request<any, SaasTenantDto>(
      {
        method: 'GET',
        url: `/api/saas/tenants/${id}`,
      },
      { apiName: this.apiName },
    );

  getDefaultConnectionString = (id: string) =>
    this.restService.request<any, string>(
      {
        method: 'GET',
        url: `/api/saas/tenants/${id}/default-connection-string`,
        responseType: 'text',
      },
      { apiName: this.apiName },
    );

  getList = (input: GetTenantsInput) =>
    this.restService.request<any, PagedResultDto<SaasTenantDto>>(
      {
        method: 'GET',
        url: `/api/saas/tenants`,
        params: {
          filter: input.filter,
          getEditionNames: input.getEditionNames,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName },
    );

  update = (id: string, input: SaasTenantUpdateDto) =>
    this.restService.request<any, SaasTenantDto>(
      {
        method: 'PUT',
        url: `/api/saas/tenants/${id}`,
        body: input,
      },
      { apiName: this.apiName },
    );

  updateDefaultConnectionString = (id: string, defaultConnectionString: string) =>
    this.restService.request<any, void>(
      {
        method: 'PUT',
        url: `/api/saas/tenants/${id}/default-connection-string`,
        params: { defaultConnectionString },
      },
      { apiName: this.apiName },
    );

  constructor(private restService: RestService) {}
}
