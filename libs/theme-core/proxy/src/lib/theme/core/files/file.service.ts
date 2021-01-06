import type { FilePutDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  apiName = 'Default';

  delete = (name: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/theme-core/file/${name}`,
    },
    { apiName: this.apiName });

  getBase64ByName = (name: string) =>
    this.restService.request<any, string>({
      method: 'GET',
      url: `/api/theme-core/file/base64/${name}`,
    },
    { apiName: this.apiName });

  getByName = (name: string) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/theme-core/file/${name}`,
    },
    { apiName: this.apiName });

  put = (body: FormData) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/theme-core/file`,
      body
    },
    { apiName: this.apiName });

  putByNameAndBase64 = (name: string, base64: FilePutDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/theme-core/file/${name}`,
      body: base64,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
