import type { CodingCreateDto, CodingGetListDto, CodingUpdateDto, CodingWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodingCrudService {
  apiName = 'coding-management';

  create = (input: CodingCreateDto) =>
    this.restService.request<any, CodingWithDetailsDto>({
      method: 'POST',
      url: '/api/coding-management/coding-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/coding-management/coding-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, CodingWithDetailsDto>({
      method: 'GET',
      url: `/api/coding-management/coding-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: CodingGetListDto) =>
    this.restService.request<any, PagedResultDto<CodingWithDetailsDto>>({
      method: 'GET',
      url: '/api/coding-management/coding-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CodingUpdateDto) =>
    this.restService.request<any, CodingWithDetailsDto>({
      method: 'PUT',
      url: `/api/coding-management/coding-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
