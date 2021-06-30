import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CmsUserDto {
  id?: string;
  userName?: string;
  name?: string;
  surname?: string;
}

export interface CommentGetListInput extends PagedAndSortedResultRequestDto {
  entityType?: string;
  text?: string;
  repliedCommentId?: string;
  author?: string;
  creationStartDate?: string;
  creationEndDate?: string;
}

export interface CommentWithAuthorDto {
  id?: string;
  entityType?: string;
  entityId?: string;
  text?: string;
  repliedCommentId?: string;
  creatorId?: string;
  creationTime?: string;
  author: CmsUserDto;
}
