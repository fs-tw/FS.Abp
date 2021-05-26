import type { CommentGetListInput, CommentWithAuthorDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentAdminService {
  apiName = 'CmsKitAdmin';

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-admin/comments/${id}`,
    },
    { apiName: this.apiName });

  getById = (id: string) =>
    this.restService.request<any, CommentWithAuthorDto>({
      method: 'GET',
      url: `/api/cms-kit-admin/comments/${id}`,
    },
    { apiName: this.apiName });

  getListByInput = (input: CommentGetListInput) =>
    this.restService.request<any, PagedResultDto<CommentWithAuthorDto>>({
      method: 'GET',
      url: '/api/cms-kit-admin/comments',
      params: { entityType: input.entityType, text: input.text, repliedCommentId: input.repliedCommentId, author: input.author, creationStartDate: input.creationStartDate, creationEndDate: input.creationEndDate, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
