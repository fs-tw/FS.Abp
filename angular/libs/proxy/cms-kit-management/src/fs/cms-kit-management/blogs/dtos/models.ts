import type { ExtensibleEntityDto } from '@abp/ng.core';
import type { CmsUserDto } from '../../../../volo/cms-kit/public/comments/models';
import type { RouteDto } from '../../routes/dtos/models';
import type { MediaDescriptorDto } from '../../../../volo/cms-kit/admin/media-descriptors/models';

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

export interface PetchBlogPostDto {
  blogPost: BlogPostDto;
  routeIds: string[];
}
