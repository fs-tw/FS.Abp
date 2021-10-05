import type { AttachmentMediaGetListDto, AttachmentMediaWithDetailsDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MediaDescriptorsApiService {
  apiName = 'cms-kit-management';

  getListByAttachmentMedia = (AttachmentMedia: AttachmentMediaGetListDto) =>
    this.restService.request<any, PagedResultDto<AttachmentMediaWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-kit-management/media-descriptors/attachment-media',
      params: { fields: AttachmentMedia.fields, value: AttachmentMedia.value, sorting: AttachmentMedia.sorting, skipCount: AttachmentMedia.skipCount, maxResultCount: AttachmentMedia.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}