import type { TagCreateDto, TagDefinitionDto, TagGetListInput, TagUpdateDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { TagDto } from '../../tags/models';

@Injectable({
  providedIn: 'root',
})
export class TagAdminService {
  apiName = 'CmsKitAdmin';

  create = (input: TagCreateDto) =>
    this.restService.request<any, TagDto>({
      method: 'POST',
      url: '/api/cms-kit-admin/tags',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/tags/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, TagDto>({
      method: 'GET',
      url: `/api/cms-kit-admin/tags/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: TagGetListInput) =>
    this.restService.request<any, PagedResultDto<TagDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/tags',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getTagDefinitions = () =>
    this.restService.request<any, TagDefinitionDto[]>({
      method: 'GET',
      url: '/api/cms-kit-admin/tags/tag-definitions',
    },
    { apiName: this.apiName });

  update = (id: string, input: TagUpdateDto) =>
    this.restService.request<any, TagDto>({
      method: 'PUT',
      url: `/api/cms-kit-admin/tags/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
