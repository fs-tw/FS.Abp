import type { CreateDirectoryInput, DirectoryContentDto, DirectoryContentRequestInput, DirectoryDescriptorDto, DirectoryDescriptorInfoDto, MoveDirectoryInput, RenameDirectoryInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectoryDescriptorService {
  apiName = 'FileManagement';

  createByInput = (input: CreateDirectoryInput) =>
    this.restService.request<any, DirectoryDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/directory-descriptor`,
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/file-management/directory-descriptor/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, DirectoryDescriptorDto>({
      method: 'GET',
      url: `/api/file-management/directory-descriptor/${id}`,
    },
    { apiName: this.apiName });

  getContentByInput = (input: DirectoryContentRequestInput) =>
    this.restService.request<any, PagedResultDto<DirectoryContentDto>>({
      method: 'GET',
      url: `/api/file-management/directory-descriptor`,
      params: { filter: input.filter, sorting: input.sorting, id: input.id },
    },
    { apiName: this.apiName });

  getListByParentId = (parentId: string) =>
    this.restService.request<any, ListResultDto<DirectoryDescriptorInfoDto>>({
      method: 'GET',
      url: `/api/file-management/directory-descriptor/sub-directories`,
      params: { parentId: parentId },
    },
    { apiName: this.apiName });

  moveByInput = (input: MoveDirectoryInput) =>
    this.restService.request<any, DirectoryDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/directory-descriptor/move`,
      body: input,
    },
    { apiName: this.apiName });

  renameByIdAndInput = (id: string, input: RenameDirectoryInput) =>
    this.restService.request<any, DirectoryDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/directory-descriptor/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
