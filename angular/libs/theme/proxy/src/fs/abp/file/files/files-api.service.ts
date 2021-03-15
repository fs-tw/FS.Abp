import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class FilesApiService {
  apiName = 'Default';

  getContentById = (id: string) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/api/file-management/file-descriptor/file-content`,
      params: { id: id },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
