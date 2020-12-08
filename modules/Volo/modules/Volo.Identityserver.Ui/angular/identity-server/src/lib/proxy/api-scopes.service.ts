import type {
  ApiScopeWithDetailsDto,
  CreateApiScopeDto,
  GetApiScopeListInput,
  UpdateApiScopeDto,
} from './api-scope/dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiScopesService {
  apiName = 'AbpIdentityServer';

  create = (input: CreateApiScopeDto) =>
    this.restService.request<any, ApiScopeWithDetailsDto>(
      {
        method: 'POST',
        url: `/api/identity-server/apiScopes`,
        body: input,
      },
      { apiName: this.apiName },
    );

  delete = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/identity-server/apiScopes`,
        params: { id },
      },
      { apiName: this.apiName },
    );

  get = (id: string) =>
    this.restService.request<any, ApiScopeWithDetailsDto>(
      {
        method: 'GET',
        url: `/api/identity-server/apiScopes/${id}`,
      },
      { apiName: this.apiName },
    );

  getAllList = () =>
    this.restService.request<any, ApiScopeWithDetailsDto[]>(
      {
        method: 'GET',
        url: `/api/identity-server/apiScopes/all`,
      },
      { apiName: this.apiName },
    );

  getList = (input: GetApiScopeListInput) =>
    this.restService.request<any, PagedResultDto<ApiScopeWithDetailsDto>>(
      {
        method: 'GET',
        url: `/api/identity-server/apiScopes`,
        params: {
          filter: input.filter,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName },
    );

  update = (id: string, input: UpdateApiScopeDto) =>
    this.restService.request<any, ApiScopeWithDetailsDto>(
      {
        method: 'PUT',
        url: `/api/identity-server/apiScopes/${id}`,
        body: input,
      },
      { apiName: this.apiName },
    );

  constructor(private restService: RestService) {}
}
