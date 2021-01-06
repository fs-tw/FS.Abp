import  { DisplayMode } from '../display-mode.enum';
import  { EntityDto, FullAuditedEntityDto } from '@abp/ng.core';
import  { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface PostCreateDto {
  blogCodeId: string;
  title: string;
  subtitle: string;
  url: string;
  content: string;
  published: boolean;
  published_By?: string;
  published_At: string;
  displayMode: DisplayMode;
  sequence: number;
  attachmentFileUrls: string[];
  postImages: PostImageDto[];
}

export interface PostDto extends FullAuditedEntityDto<string> {
  blogCodeId: string;
  title: string;
  subtitle: string;
  url: string;
  content: string;
  published: boolean;
  published_By?: string;
  published_At: string;
  displayMode: DisplayMode;
  sequence: number;
  attachmentFileUrls: string[];
  postImages: PostImageDto[];
}

export interface PostGetListDto extends SearchResultRequestDto {
  maxResultCount:number;
  skipCount:number;
  blogCodeId?: string;
}

export interface PostImageDto {
  url: string;
  isCover: boolean;
}

export interface PostPrimaryKeyDto extends EntityDto<string> {
}

export interface PostUpdateDto {
  blogCodeId: string;
  title: string;
  subtitle: string;
  url: string;
  content: string;
  published: boolean;
  published_By?: string;
  published_At: string;
  displayMode: DisplayMode;
  sequence: number;
  attachmentFileUrls: string[];
  postImages: PostImageDto[];
}

export interface PostWithDetailsDto extends PostDto {
  blogDisplayName: string;
  coverImage: PostImageDto;
}

