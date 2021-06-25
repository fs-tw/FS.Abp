import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { MediaDescriptorDto } from '../models/models';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Injectable({
  providedIn: 'root',
})
export class MediaDescriptorService {
  apiName = 'CmsKitAdmin';

  download(item: MediaDescriptorDto) {
    return this.restService.request<any, any>(
      {
        method: 'GET',
        url: `/api/cms-kit/media/${item.id}`,
        responseType: 'blob',
      },
      { apiName: 'CmsKitAdmin' }
    );
  }

  uploadFile(entityType: string, file: NzUploadFile) {
    let formdata = new FormData();
    formdata.append('inputStream.name', file.name);
    formdata.append('inputStream.file', file as any, file.name);

    return this.restService.request<any, MediaDescriptorDto>(
      {
        method: 'POST',
        url: `/api/cms-kit-admin/media/${entityType}`,
        body: formdata,
      },
      { apiName: 'CmsKitAdmin' }
    );
  }

  constructor(private restService: RestService) {}
}
