import type { SerialNumberCreateDto, SerialNumberGetListDto, SerialNumberUpdateDto, SerialNumberWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerialNumberCrudService {
  apiName = 'coding-management';

  create = (input: SerialNumberCreateDto) =>
    this.restService.request<any, SerialNumberWithDetailsDto>({
      method: 'POST',
      url: '/api/coding-management/serial-number-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/coding-management/serial-number-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SerialNumberWithDetailsDto>({
      method: 'GET',
      url: `/api/coding-management/serial-number-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: SerialNumberGetListDto) =>
    this.restService.request<any, PagedResultDto<SerialNumberWithDetailsDto>>({
      method: 'GET',
      url: '/api/coding-management/serial-number-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: SerialNumberUpdateDto) =>
    this.restService.request<any, SerialNumberWithDetailsDto>({
      method: 'PUT',
      url: `/api/coding-management/serial-number-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
