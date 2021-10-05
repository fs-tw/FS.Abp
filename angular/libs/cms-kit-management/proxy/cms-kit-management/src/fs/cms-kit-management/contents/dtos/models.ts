import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface ContentDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  displayName?: string;
}

export interface ContentDefinitionGetListDto extends SearchResultRequestDto {
}

export interface ContentDefinitionWithDetailsDto extends ContentDefinitionDto {
  contentTypes: ContentTypeDto[];
}

export interface ContentDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  contentTypeId?: string;
  value?: string;
}

export interface ContentGetListDto extends SearchResultRequestDto {
}

export interface ContentTypeDto extends ExtensibleAuditedEntityDto<string> {
  contentDefinitionId?: string;
  displayName?: string;
  type?: string;
}

export interface ContentTypeGetListDto extends SearchResultRequestDto {
}

export interface ContentTypeWithDetailsDto extends ContentTypeDto {
  contentDefinition: ContentDefinitionDto;
}

export interface ContentWithDetailsDto extends ContentDto {
}

export interface EntityContentDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  contentDefinitionId?: string;
}

export interface EntityContentDefinitionGetListDto extends SearchResultRequestDto {
}

export interface EntityContentDefinitionWithDetailsDto extends EntityContentDefinitionDto {
}
