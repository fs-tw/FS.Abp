import type { EntityDto, FullAuditedEntityDto, PagedResultRequestDto } from '@abp/ng.core';
import type { DisplayMode } from '../display-mode.enum';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface AttachmentFileInfoDto {
  fileId?: string;
  name?: string;
}

export interface GetPostByBlogIdInput extends PagedResultRequestDto {
  blogId?: string;
  keyword?: string;
}

export interface MetaData {
  attachmentFileInfoDto: AttachmentFileInfoDto;
  postPrimaryKeyDto: PostPrimaryKeyDto;
  postDto: PostDto;
  postCreateDto: PostCreateDto;
  postUpdateDto: PostUpdateDto;
  postGetListDto: PostGetListDto;
  postWithDetailsDto: PostWithDetailsDto;
  postImageDto: PostImageDto;
  postTagMapPrimaryKeyDto: PostTagMapPrimaryKeyDto;
  postTagMapDto: PostTagMapDto;
  postTagMapCreateDto: PostTagMapCreateDto;
  postTagMapUpdateDto: PostTagMapUpdateDto;
  postTagMapGetListDto: PostTagMapGetListDto;
  postTagMapWithDetailsDto: PostTagMapWithDetailsDto;
}

export interface PostCreateDto {
  blogId?: string;
  title?: string;
  subtitle?: string;
  url?: string;
  content?: string;
  disable: boolean;
  startTime?: string;
  endTime?: string;
  displayMode: DisplayMode;
  sequence: number;
  attachmentFileInfos: AttachmentFileInfoDto[];
  postImages: PostImageDto[];
}

export interface PostDto extends FullAuditedEntityDto<string> {
  blogId?: string;
  title?: string;
  subtitle?: string;
  url?: string;
  content?: string;
  disable: boolean;
  startTime?: string;
  endTime?: string;
  displayMode: DisplayMode;
  sequence: number;
  attachmentFileInfos: AttachmentFileInfoDto[];
  postImages: PostImageDto[];
}

export interface PostGetListDto extends SearchResultRequestDto {
}

export interface PostImageDto {
  imageId?: string;
  isCover: boolean;
  name?: string;
}

export interface PostPrimaryKeyDto extends EntityDto<string> {
}

export interface PostTagMapCreateDto {
  postId?: string;
  tagId?: string;
}

export interface PostTagMapDto extends FullAuditedEntityDto<string> {
  postId?: string;
  tagId?: string;
}

export interface PostTagMapGetListDto extends SearchResultRequestDto {
}

export interface PostTagMapPrimaryKeyDto extends EntityDto<string> {
}

export interface PostTagMapUpdateDto {
  postId?: string;
  tagId?: string;
}

export interface PostTagMapWithDetailsDto extends PostTagMapDto {
}

export interface PostUpdateDto {
  blogId?: string;
  title?: string;
  subtitle?: string;
  url?: string;
  content?: string;
  disable: boolean;
  startTime?: string;
  endTime?: string;
  displayMode: DisplayMode;
  sequence: number;
  attachmentFileInfos: AttachmentFileInfoDto[];
  postImages: PostImageDto[];
}

export interface PostWithDetailsDto extends PostDto {
  postTags: PostTagMapDto[];
}
