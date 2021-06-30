import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Volo } from '@fs-tw/proxy/cms-kit';
import { NzUploadFile } from 'ng-zorro-antd/upload';
type MediaDescriptorDto = Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto;

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
