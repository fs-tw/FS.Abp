import type { AttachmentMediaCreateDto, AttachmentMediaGetListDto, AttachmentMediaUpdateDto, AttachmentMediaWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttachmentMediaCrudService {
  apiName = 'cms-kit-management';

  create = (input: AttachmentMediaCreateDto) =>
    this.restService.request<any, AttachmentMediaWithDetailsDto>({
      method: 'POST',
      url: '/api/cms-kit-management/attachment-media-crud',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-management/attachment-media-crud/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, AttachmentMediaWithDetailsDto>({
      method: 'GET',
      url: `/api/cms-kit-management/attachment-media-crud/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: AttachmentMediaGetListDto) =>
    this.restService.request<any, PagedResultDto<AttachmentMediaWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/attachment-media-crud',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: AttachmentMediaUpdateDto) =>
    this.restService.request<any, AttachmentMediaWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms-kit-management/attachment-media-crud/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
