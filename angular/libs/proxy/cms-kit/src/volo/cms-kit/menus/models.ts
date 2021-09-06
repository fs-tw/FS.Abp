import type { AuditedEntityDto } from '@abp/ng.core';

export interface MenuItemDto extends AuditedEntityDto<string> {
  parentId?: string;
  displayName?: string;
  isActive: boolean;
  url?: string;
  icon?: string;
  order: number;
  target?: string;
  elementId?: string;
  cssClass?: string;
  pageId?: string;
}
