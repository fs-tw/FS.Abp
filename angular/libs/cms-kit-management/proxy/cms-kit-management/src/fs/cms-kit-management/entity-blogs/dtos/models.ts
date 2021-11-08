import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface EntityBlogDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  blogId?: string;
}

export interface EntityBlogGetListDto extends SearchResultRequestDto {
  entityType?: string;
  entityId?: string;
}

export interface EntityBlogWithDetailsDto extends EntityBlogDto {
}
