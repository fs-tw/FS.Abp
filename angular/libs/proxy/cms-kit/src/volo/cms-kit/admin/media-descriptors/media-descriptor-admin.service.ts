import type { CreateMediaInputWithStream, MediaDescriptorDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaDescriptorAdminService {
  apiName = 'CmsKitAdmin';

  createByEntityTypeAndInputStream = (entityType: string, inputStream: CreateMediaInputWithStream) =>
    this.restService.request<any, MediaDescriptorDto>({
      method: 'POST',
      url: `/api/cms-kit-admin/media/${entityType}`,
      params: { name: inputStream.name },
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/media/${id}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
