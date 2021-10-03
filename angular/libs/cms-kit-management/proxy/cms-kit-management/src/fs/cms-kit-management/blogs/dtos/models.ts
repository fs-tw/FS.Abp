import type { ExtensibleEntityDto } from '@abp/ng.core';
import type { CmsUserDto } from '../../../../volo/cms-kit/public/comments/models';
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
  attachmentMedias: MediaDescriptorDto[];
}

export interface BlogPostSettingDto {
  defaultCoverImage?: string;
}

export interface BlogPostSettingGetDto {
  providerName?: string;
  providerKey?: string;
}

export interface PatchBlogPostDto {
  blogPost: BlogPostDto;
  routeIds: string[];
}
