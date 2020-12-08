import type { CreateFileInput, FileDescriptorDto, FileUploadPreInfoDto, FileUploadPreInfoRequest, MoveFileInput, RenameFileInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileDescriptorService {
  apiName = 'FileManagement';

  create = (input: CreateFileInput) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/file-management/file-descriptor/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'GET',
      url: `/api/file-management/file-descriptor/${id}`,
    },
    { apiName: this.apiName });

  getContent = (id: string) =>
    this.restService.request<any, number[]>({
      method: 'GET',
      url: `/api/file-management/file-descriptor/content`,
      params: { id: id },
    },
    { apiName: this.apiName });

  getList = (directoryId: string) =>
    this.restService.request<any, ListResultDto<FileDescriptorDto>>({
      method: 'GET',
      url: `/api/file-management/file-descriptor`,
      params: { directoryId: directoryId },
    },
    { apiName: this.apiName });

  getPreInfo = (input: FileUploadPreInfoRequest[]) =>
    this.restService.request<any, FileUploadPreInfoDto[]>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/pre-upload-info`,
      body: input,
    },
    { apiName: this.apiName });

  move = (input: MoveFileInput) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/move`,
      body: input,
    },
    { apiName: this.apiName });

  rename = (id: string, input: RenameFileInput) =>
    this.restService.request<any, FileDescriptorDto>({
      method: 'POST',
      url: `/api/file-management/file-descriptor/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
