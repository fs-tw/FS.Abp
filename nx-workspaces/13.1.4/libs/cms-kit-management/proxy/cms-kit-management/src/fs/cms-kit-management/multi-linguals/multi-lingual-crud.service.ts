import type { MultiLingualCreateDto, MultiLingualFindDto, MultiLingualGetListDto, MultiLingualPatchDto, MultiLingualUpdateDto, MultiLingualWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualCrudService {
  apiName = 'cms-kit-management';

  create = (input: MultiLingualCreateDto) =>
    this.restService.request<any, MultiLingualWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/multi-lingual-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/multi-lingual-crud/${id}`,
    },
    { apiName: this.apiName });

  find = (input: MultiLingualFindDto) =>
    this.restService.request<any, MultiLingualWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/multi-lingual-crud/find',
      body: input,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MultiLingualWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/multi-lingual-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: MultiLingualGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-lingual-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  patch = (input: MultiLingualPatchDto) =>
    this.restService.request<any, void>({
      method: 'PATCH',
      url: '/api/cms-kit-management/multi-lingual-crud',
      body: input,
    },
    { apiName: this.apiName });

  update = (id: string, input: MultiLingualUpdateDto) =>
    this.restService.request<any, MultiLingualWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/multi-lingual-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
