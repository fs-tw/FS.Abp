import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CodingCreateDto extends ExtensibleObject {
  no?: string;
  displayName?: string;
  value?: string;
  description?: string;
  code?: string;
  parentId?: string;
  level: number;
}

export interface CodingDto extends ExtensibleAuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  value?: string;
  description?: string;
  code?: string;
  parentId?: string;
  level: number;
}

export interface CodingGetListDto extends PagedAndSortedResultRequestDto {
}

export interface CodingUpdateDto extends ExtensibleObject {
  no?: string;
  displayName?: string;
  value?: string;
  description?: string;
  code?: string;
  parentId?: string;
  level: number;
}

export interface CodingWithDetailsDto extends CodingDto {
  children: CodingDto[];
  parent: CodingDto;
}
