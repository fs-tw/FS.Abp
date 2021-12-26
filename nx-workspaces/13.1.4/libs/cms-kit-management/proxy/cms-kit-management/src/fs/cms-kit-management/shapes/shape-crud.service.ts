import type { ShapeCreateDto, ShapeGetListDto, ShapeUpdateDto, ShapeWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShapeCrudService {
  apiName = 'cms-kit-management';

  create = (input: ShapeCreateDto) =>
    this.restService.request<any, ShapeWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/shape-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/shape-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ShapeWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/shape-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: ShapeGetListDto) =>
    this.restService.request<any, PagedResultDto<ShapeWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/shape-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: ShapeUpdateDto) =>
    this.restService.request<any, ShapeWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/shape-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
