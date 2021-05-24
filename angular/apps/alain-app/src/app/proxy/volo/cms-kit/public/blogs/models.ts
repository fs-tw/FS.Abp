import type { AuditedEntityDto } from '@abp/ng.core';
import type { CmsUserDto } from '../../users/models';

export interface BlogPostPublicDto extends AuditedEntityDto<string> {
  blogId?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
  author: CmsUserDto;
}
