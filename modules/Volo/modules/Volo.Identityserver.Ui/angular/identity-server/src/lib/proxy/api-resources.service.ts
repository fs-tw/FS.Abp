import type { ApiResourceWithDetailsDto, CreateApiResourceDto, GetApiResourceListInput, UpdateApiResourceDto } from './api-resource/dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiResourcesService {
  apiName = 'AbpIdentityServer';

  create = (input: CreateApiResourceDto) =>
    this.restService.request<any, ApiResourceWithDetailsDto>({
      method: 'POST',
      url: `/api/identity-server/api-resources`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity-server/api-resources`,
      params: { id },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ApiResourceWithDetailsDto>({
      method: 'GET',
      url: `/api/identity-server/api-resources/${id}`,
    },
    { apiName: this.apiName });

  getAllList = () =>
    this.restService.request<any, ApiResourceWithDetailsDto[]>({
      method: 'GET',
      url: `/api/identity-server/api-resources/all`,
    },
    { apiName: this.apiName });

  getList = (input: GetApiResourceListInput) =>
    this.restService.request<any, PagedResultDto<ApiResourceWithDetailsDto>>({
      method: 'GET',
      url: `/api/identity-server/api-resources`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateApiResourceDto) =>
    this.restService.request<any, ApiResourceWithDetailsDto>({
      method: 'PUT',
      url: `/api/identity-server/api-resources/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
