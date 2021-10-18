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
      params: { skipCount: AttachmentMedia.skipCount, maxResultCount: AttachmentMedia.maxResultCount, page: AttachmentMedia.page, perPage: AttachmentMedia.perPage, combineWith: AttachmentMedia.combineWith, sort: AttachmentMedia.sort, sortBy: AttachmentMedia.sortBy, sorting: AttachmentMedia.sorting },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
