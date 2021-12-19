import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface EntityBlogCreateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  blogId?: string;
}

export interface EntityBlogDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  blogId?: string;
}

export interface EntityBlogGetListDto extends PagedAndSortedResultRequestDto {
  entityType?: string;
  entityId?: string;
}

export interface EntityBlogUpdateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  blogId?: string;
}

export interface EntityBlogWithDetailsDto extends EntityBlogDto {
}
