import type { MultiLingualTranslationCreateDto, MultiLingualTranslationGetListDto, MultiLingualTranslationUpdateDto, MultiLingualTranslationWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiLingualTranslationCrudService {
  apiName = 'cms-kit-management';

  create = (input: MultiLingualTranslationCreateDto) =>
    this.restService.request<any, MultiLingualTranslationWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/multi-lingual-translation-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/multi-lingual-translation-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MultiLingualTranslationWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/multi-lingual-translation-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: MultiLingualTranslationGetListDto) =>
    this.restService.request<any, PagedResultDto<MultiLingualTranslationWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/multi-lingual-translation-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: MultiLingualTranslationUpdateDto) =>
    this.restService.request<any, MultiLingualTranslationWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/multi-lingual-translation-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
