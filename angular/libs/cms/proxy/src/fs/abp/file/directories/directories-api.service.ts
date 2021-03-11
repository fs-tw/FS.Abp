import type { DirectoryDescriptorDto } from './dtos/models';
import type { DirectoryProviderDefinition } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectoriesApiService {
  apiName = 'Default';

  findByProviderByKeyAndGroup = (key: string, group?: string) =>
    this.restService.request<any, any>({
      method: 'GET',
      url: `/api/file-management/directory-descriptor/provider/${key}`,
      params: { group: group },
    },
    { apiName: this.apiName });

  getDefinitions = () =>
    this.restService.request<any, DirectoryProviderDefinition[]>({
      method: 'GET',
      url: `/api/file-management/directory-descriptor/definitions`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
