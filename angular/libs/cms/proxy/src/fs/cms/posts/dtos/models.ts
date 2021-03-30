import type { EntityDto, FullAuditedEntityDto, PagedResultRequestDto } from '@abp/ng.core';
import type { DisplayMode } from '../display-mode.enum';
import type { ResourceDto } from '../../core/dtos/models';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface GetPostByBlogIdInput extends PagedResultRequestDto {
  blogId?: string;
  keyword?: string;
}

export interface MetaData {
  postPrimaryKeyDto: PostPrimaryKeyDto;
  postDto: PostDto;
  postCreateDto: PostCreateDto;
  postUpdateDto: PostUpdateDto;
  postGetListDto: PostGetListDto;
  postWithDetailsDto: PostWithDetailsDto;
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
  sequence: number;
  linkUrl?: string;
  disable: boolean;
  startTime?: string;
  endTime?: string;
  displayMode: DisplayMode;
  contents: ResourceDto[];
  attachments: ResourceDto[];
  images: ResourceDto[];
}

export interface PostDto extends FullAuditedEntityDto<string> {
  blogId?: string;
  title?: string;
  subtitle?: string;
  sequence: number;
  linkUrl?: string;
  disable: boolean;
  startTime?: string;
  endTime?: string;
  displayMode: DisplayMode;
  contents: ResourceDto[];
  attachments: ResourceDto[];
  images: ResourceDto[];
}

export interface PostGetListDto extends SearchResultRequestDto {
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
  sequence: number;
  linkUrl?: string;
  disable: boolean;
  startTime?: string;
  endTime?: string;
  displayMode: DisplayMode;
  contents: ResourceDto[];
  attachments: ResourceDto[];
  images: ResourceDto[];
}

export interface PostWithDetailsDto extends PostDto {
  postTags: PostTagMapDto[];
}
