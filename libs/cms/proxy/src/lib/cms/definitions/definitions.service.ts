import type { BlogCreateInput, BlogDto, BlogUpdateInput, PutStorageLockDto, StorageDto, StorageLockDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefinitionsService {
  apiName = 'Default';

  blogCreateByInput = (input: BlogCreateInput) =>
    this.restService.request<any, BlogDto>({
      method: 'POST',
      url: `/api/cms/definitions/blogs`,
      body: input,
    },
    { apiName: this.apiName });

  blogDeleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms/definitions/blogs/${id}`,
    },
    { apiName: this.apiName });

  blogGetById = (id: string) =>
    this.restService.request<any, BlogDto>({
      method: 'GET',
      url: `/api/cms/definitions/blogs/${id}`,
    },
    { apiName: this.apiName });

  blogGetList = () =>
    this.restService.request<any, BlogDto[]>({
      method: 'GET',
      url: `/api/cms/definitions/blogs`,
    },
    { apiName: this.apiName });

  blogUpdateByIdAndInput = (id: string, input: BlogUpdateInput) =>
    this.restService.request<any, BlogDto>({
      method: 'PUT',
      url: `/api/cms/definitions/blogs/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  checkDeleteFileByFileName = (FileName: string) =>
    this.restService.request<any, StorageLockDto>({
      method: 'POST',
      url: `/api/cms/definitions/storages/${FileName}`,
    },
    { apiName: this.apiName });

  getFile = () =>
    this.restService.request<any, StorageDto[]>({
      method: 'GET',
      url: `/api/cms/definitions/storages`,
    },
    { apiName: this.apiName });

  setFileLockByInputAndFileName = (input: PutStorageLockDto, fileName: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/cms/definitions/storages/${fileName}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
