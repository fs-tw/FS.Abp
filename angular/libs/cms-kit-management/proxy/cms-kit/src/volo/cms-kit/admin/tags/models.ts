import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface EntityTagCreateDto {
  tagName: string;
  entityType: string;
  entityId: string;
}

export interface EntityTagRemoveDto {
  tagId: string;
  entityType: string;
  entityId: string;
}

export interface EntityTagSetDto {
  entityId?: string;
  entityType?: string;
  tags: string[];
}

export interface TagCreateDto {
  entityType: string;
  name: string;
}

export interface TagDefinitionDto {
  entityType?: string;
  displayName?: string;
}

export interface TagGetListInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface TagUpdateDto {
  name: string;
}
