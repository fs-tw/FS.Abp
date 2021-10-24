import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';
import type { NameValue } from '../../../../volo/abp/models';

export interface ContentDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  displayName?: string;
}

export interface ContentDefinitionGetListDto extends SearchResultRequestDto {
  filter?: string;
}

export interface ContentDefinitionWithDetailsDto extends ContentDefinitionDto {
  contentProperties: ContentPropertyDto[];
}

export interface ContentPropertyDto extends ExtensibleAuditedEntityDto<string> {
  contentDefinitionId?: string;
  sequence: number;
  displayName?: string;
  type?: string;
}

export interface ContentPropertyGetListDto extends SearchResultRequestDto {
}

export interface ContentPropertyWithDetailsDto extends ContentPropertyDto {
  contentDefinition: ContentDefinitionDto;
}

export interface EntityContentDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  contentDefinitionId?: string;
}

export interface EntityContentDefinitionGetListDto extends SearchResultRequestDto {
  entityType?: string;
  entityId?: string;
}

export interface EntityContentDefinitionWithDetailsDto extends EntityContentDefinitionDto {
  contentDefinition: ContentDefinitionWithDetailsDto;
  entityContents: EntityContentDto[];
}

export interface EntityContentDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  entityContentDefinitionId?: string;
  sequence: number;
  properties: NameValue[];
}

export interface EntityContentGetListDto extends SearchResultRequestDto {
}

export interface EntityContentWithDetailsDto extends EntityContentDto {
  entityContentDefinition: EntityContentDefinitionDto;
}
