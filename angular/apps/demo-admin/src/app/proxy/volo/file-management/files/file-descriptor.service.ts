import type { CreateFileInput, FileDescriptorDto, FileUploadPreInfoDto, FileUploadPreInfoRequest, MoveFileInput, RenameFileInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { RemoteStreamContent } from '../../abp/content/models';

@Injectable({
  providedIn: 'root',
})
export class FileDescriptorService {
  apiName = 'FileManagement';

  createByInput = (input: CreateFileInput) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor`,
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/file-management/file-descriptor/${id}`,
    },
    { apiName: this.apiName });

  downloadById = (id: string) =>
    this.restService.request<any, RemoteStreamContent>({
      method: 'GET',
      url: `/api/file-management/file-descriptor/download/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'GET',
      url: `/api/file-management/file-descriptor/${id}`,
    },
    { apiName: this.apiName });

  getContentById = (id: string) =>
    this.restService.request<any, number[]>({
      method: 'GET',
      url: `/api/file-management/file-descriptor/content`,
      params: { id: id },
    },
    { apiName: this.apiName });

  getListByDirectoryId = (directoryId: string) =>
    this.restService.request<any, ListResultDto<FileDescriptorDto>>({
      method: 'GET',
      url: `/api/file-management/file-descriptor`,
      params: { directoryId: directoryId },
    },
    { apiName: this.apiName });

  getPreInfoByInput = (input: FileUploadPreInfoRequest[]) =>
    this.restService.request<any, FileUploadPreInfoDto[]>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/pre-upload-info`,
      body: input,
    },
    { apiName: this.apiName });

  moveByInput = (input: MoveFileInput) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/move`,
      body: input,
    },
    { apiName: this.apiName });

  renameByIdAndInput = (id: string, input: RenameFileInput) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
