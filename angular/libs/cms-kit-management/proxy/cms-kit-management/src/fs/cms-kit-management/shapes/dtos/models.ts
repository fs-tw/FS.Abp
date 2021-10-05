import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface ShapeDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  textTemplateContentId?: string;
  contentDefinitionId?: string;
}

export interface ShapeGetListDto extends SearchResultRequestDto {
}

export interface ShapeWithDetailsDto extends ShapeDto {
}
