import type { CreateIdentityResourceDto, GetIdentityResourceListInput, IdentityResourceWithDetailsDto, UpdateIdentityResourceDto } from './identity-resource/dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentityResourcesService {
  apiName = 'AbpIdentityServer';

  create = (input: CreateIdentityResourceDto) =>
    this.restService.request<any, IdentityResourceWithDetailsDto>({
      method: 'POST',
      url: `/api/identity-server/identity-resources`,
      body: input,
    },
    { apiName: this.apiName });

  createStandardResources = () =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/identity-server/identity-resources/create-standard-resources`,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity-server/identity-resources`,
      params: { id },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, IdentityResourceWithDetailsDto>({
      method: 'GET',
      url: `/api/identity-server/identity-resources/${id}`,
    },
    { apiName: this.apiName });

  getAllList = () =>
    this.restService.request<any, IdentityResourceWithDetailsDto[]>({
      method: 'GET',
      url: `/api/identity-server/identity-resources/all`,
    },
    { apiName: this.apiName });

  getList = (input: GetIdentityResourceListInput) =>
    this.restService.request<any, PagedResultDto<IdentityResourceWithDetailsDto>>({
      method: 'GET',
      url: `/api/identity-server/identity-resources`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateIdentityResourceDto) =>
    this.restService.request<any, IdentityResourceWithDetailsDto>({
      method: 'PUT',
      url: `/api/identity-server/identity-resources/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
