import type { ClientWithDetailsDto, CreateClientDto, GetClientListInput, UpdateClientDto } from './client/dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiName = 'AbpIdentityServer';

  create = (input: CreateClientDto) =>
    this.restService.request<any, ClientWithDetailsDto>({
      method: 'POST',
      url: `/api/identity-server/clients`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity-server/clients`,
      params: { id },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ClientWithDetailsDto>({
      method: 'GET',
      url: `/api/identity-server/clients/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetClientListInput) =>
    this.restService.request<any, PagedResultDto<ClientWithDetailsDto>>({
      method: 'GET',
      url: `/api/identity-server/clients`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateClientDto) =>
    this.restService.request<any, ClientWithDetailsDto>({
      method: 'PUT',
      url: `/api/identity-server/clients/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
