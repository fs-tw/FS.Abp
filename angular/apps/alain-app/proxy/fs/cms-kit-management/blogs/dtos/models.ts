import type { EntityDto, ExtensibleEntityDto, ExtensibleObject } from '@abp/ng.core';
import type { CmsUserDto } from '../../../../volo/cms-kit/public/comments/models';
import type { RouteDto } from '../../routes/dtos/models';
import type { MediaDescriptorDto } from '../../../../volo/cms-kit/admin/media-descriptors/models';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface BlogDto extends ExtensibleEntityDto<string> {
  name?: string;
  slug?: string;
}

export interface BlogPostDto extends ExtensibleEntityDto<string> {
  blogId?: string;
  blogName?: string;
  blogSlug?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
  creationTime?: string;
  lastModificationTime?: string;
  author: CmsUserDto;
  authorId?: string;
  routes: RouteDto[];
  attachmentMedias: MediaDescriptorDto[];
}

export interface BlogPostSettingDto {
  defaultImage?: string;
}

export interface BlogPostSettingGetDto {
  providerName?: string;
  providerKey?: string;
}

export interface MetaData {
  blogPostSettingGetDto: BlogPostSettingGetDto;
  blogPostSettingDto: BlogPostSettingDto;
  postRoutePrimaryKeyDto: PostRoutePrimaryKeyDto;
  postRouteDto: PostRouteDto;
  postRouteCreateDto: PostRouteCreateDto;
  postRouteUpdateDto: PostRouteUpdateDto;
  postRouteGetListDto: PostRouteGetListDto;
  postRouteWithDetailsDto: PostRouteWithDetailsDto;
}

export interface PetchBlogPostDto {
  blogPost: BlogPostDto;
  routeIds: string[];
}

export interface PostRouteCreateDto extends ExtensibleObject {
  postId?: string;
  routeId?: string;
}

export interface PostRouteDto extends ExtensibleEntityDto<string> {
  postId?: string;
  routeId?: string;
}

export interface PostRouteGetListDto extends SearchResultRequestDto {
}

export interface PostRoutePrimaryKeyDto extends EntityDto<string> {
}

export interface PostRouteUpdateDto extends ExtensibleObject {
  postId?: string;
  routeId?: string;
}

export interface PostRouteWithDetailsDto extends PostRouteDto {
}
