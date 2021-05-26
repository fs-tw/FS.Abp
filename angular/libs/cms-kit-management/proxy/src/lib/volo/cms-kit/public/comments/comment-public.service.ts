import type { CommentDto, CommentWithDetailsDto, CreateCommentInput, UpdateCommentInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentPublicService {
  apiName = 'CmsKitAdmin';

  createByEntityTypeAndEntityIdAndInput = (entityType: string, entityId: string, input: CreateCommentInput) =>
    this.restService.request<any, CommentDto>({
      method: 'POST',
      url: `/api/cms-kit-public/comments/${entityType}/${entityId}`,
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-public/comments/${id}`,
    },
    { apiName: this.apiName });

  getListByEntityTypeAndEntityId = (entityType: string, entityId: string) =>
    this.restService.request<any, ListResultDto<CommentWithDetailsDto>>({
      method: 'GET',
      url: `/api/cms-kit-public/comments/${entityType}/${entityId}`,
    },
    { apiName: this.apiName });

  updateByIdAndInput = (id: string, input: UpdateCommentInput) =>
    this.restService.request<any, CommentDto>({
      method: 'PUT',
      url: `/api/cms-kit-public/comments/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
