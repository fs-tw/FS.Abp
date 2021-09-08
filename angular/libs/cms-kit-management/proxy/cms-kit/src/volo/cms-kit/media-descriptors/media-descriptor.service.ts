import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { RemoteStreamContent } from '../../abp/content/models';

@Injectable({
  providedIn: 'root',
})
export class MediaDescriptorService {
  apiName = 'CmsKitAdmin';

  download = (id: string) =>
    this.restService.request<any, RemoteStreamContent>({
      method: 'GET',
      url: `/api/cms-kit/media/${id}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
