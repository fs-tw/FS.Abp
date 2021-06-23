import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreatePageInputDto {
  title: string;
  slug: string;
  content?: string;
  script?: string;
  style?: string;
}

export interface GetPagesInputDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface PageDto extends AuditedEntityDto<string> {
  title?: string;
  slug?: string;
  content?: string;
  script?: string;
  style?: string;
}

export interface UpdatePageInputDto {
  title: string;
  slug: string;
  content?: string;
  script?: string;
  style?: string;
}
