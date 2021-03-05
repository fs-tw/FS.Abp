import type { MetaData, TagCreateDto, TagGetListDto, TagPrimaryKeyDto, TagUpdateDto, TagWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TagsApiService {
  apiName = 'Default';

  createByTagCreate = (TagCreate: TagCreateDto) =>
    this.restService.request<any, TagWithDetailsDto>({
      method: 'POST',
      url: `/api/cms/tags/tag`,
      body: TagCreate,
    },
    { apiName: this.apiName });

  deleteByTagPrimaryKey = (TagPrimaryKey: TagPrimaryKeyDto) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms/tags/tag/id`,
      params: { id: TagPrimaryKey.id },
    },
    { apiName: this.apiName });

  getByTagPrimaryKey = (TagPrimaryKey: TagPrimaryKeyDto) =>
    this.restService.request<any, TagWithDetailsDto>({
      method: 'GET',
      url: `/api/cms/tags/tag/id`,
      params: { id: TagPrimaryKey.id },
    },
    { apiName: this.apiName });

  getListByTagGetList = (TagGetList: TagGetListDto) =>
    this.restService.request<any, PagedResultDto<TagWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms/tags/tag`,
      params: { fields: TagGetList.fields, value: TagGetList.value, sorting: TagGetList.sorting, skipCount: TagGetList.skipCount, maxResultCount: TagGetList.maxResultCount },
    },
    { apiName: this.apiName });

  options = () =>
    this.restService.request<any, MetaData>({
      method: 'OPTIONS',
      url: `/api/cms/tags`,
    },
    { apiName: this.apiName });

  updateByTagPrimaryKeyAndTagUpdate = (TagPrimaryKey: TagPrimaryKeyDto, TagUpdate: TagUpdateDto) =>
    this.restService.request<any, TagWithDetailsDto>({
      method: 'PUT',
      url: `/api/cms/tags/tag/id`,
      params: { id: TagPrimaryKey.id },
      body: TagUpdate,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
