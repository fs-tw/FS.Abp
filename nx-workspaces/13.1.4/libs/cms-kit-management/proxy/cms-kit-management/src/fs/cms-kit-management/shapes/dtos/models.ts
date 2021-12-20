import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ShapeCreateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  textTemplateContentId?: string;
}

export interface ShapeDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  textTemplateContentId?: string;
}

export interface ShapeGetListDto extends PagedAndSortedResultRequestDto {
}

export interface ShapeUpdateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  textTemplateContentId?: string;
}

export interface ShapeWithDetailsDto extends ShapeDto {
}
