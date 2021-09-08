import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface BlogDto extends EntityDto<string> {
  name?: string;
  slug?: string;
}

export interface BlogFeatureInputDto {
  featureName: string;
  isEnabled: boolean;
}

export interface BlogGetListInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface BlogPostDto extends EntityDto<string> {
  blogId?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
  creationTime?: string;
  lastModificationTime?: string;
}

export interface BlogPostGetListInput extends PagedAndSortedResultRequestDto {
  filter?: string;
  blogId?: string;
}

export interface BlogPostListDto extends EntityDto<string> {
  blogId?: string;
  blogName?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
  creationTime?: string;
  lastModificationTime?: string;
}

export interface CreateBlogDto {
  name: string;
  slug: string;
}

export interface CreateBlogPostDto {
  blogId: string;
  title: string;
  slug: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
}

export interface UpdateBlogDto {
  name: string;
  slug: string;
}

export interface UpdateBlogPostDto {
  title: string;
  slug: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
}
