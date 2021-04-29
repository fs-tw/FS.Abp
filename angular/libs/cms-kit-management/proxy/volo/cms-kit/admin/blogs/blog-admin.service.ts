import type { BlogDto, BlogGetListInput, CreateBlogDto, UpdateBlogDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogAdminService {
  apiName = 'CmsKitAdmin';

  createByInput = (input: CreateBlogDto) =>
    this.restService.request<any, BlogDto>({
      method: 'POST',
      url: '/api/cms-kit-admin/blogs',
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/blogs/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, BlogDto>({
      method: 'GET',
      url: `/api/cms-kit-admin/blogs/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: BlogGetListInput) =>
    this.restService.request<any, PagedResultDto<BlogDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/blogs',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: UpdateBlogDto) =>
    this.restService.request<any, BlogDto>({
      method: 'PUT',
      url: `/api/cms-kit-admin/blogs/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
