import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface MenuItemCreateInput {
  parentId?: string;
  displayName: string;
  isActive: boolean;
  url?: string;
  icon?: string;
  order: number;
  target?: string;
  elementId?: string;
  cssClass?: string;
  pageId?: string;
}

export interface MenuItemMoveInput {
  newParentId?: string;
  position: number;
}

export interface MenuItemUpdateInput {
  displayName: string;
  isActive: boolean;
  url?: string;
  icon?: string;
  target?: string;
  elementId?: string;
  cssClass?: string;
  pageId?: string;
}

export interface PageLookupDto extends EntityDto<string> {
  title?: string;
  slug?: string;
}

export interface PageLookupInputDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}
