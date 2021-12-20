import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { NameValue } from '../../../../volo/abp/models';

export interface ContentDefinitionCreateDto extends ExtensibleObject {
  entityType?: string;
  displayName?: string;
}

export interface ContentDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  displayName?: string;
}

export interface ContentDefinitionGetListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface ContentDefinitionUpdateDto extends ExtensibleObject {
  entityType?: string;
  displayName?: string;
}

export interface ContentDefinitionWithDetailsDto extends ContentDefinitionDto {
  contentProperties: ContentPropertyDto[];
}

export interface ContentPropertyCreateDto extends ExtensibleObject {
  contentDefinitionId?: string;
  sequence: number;
  displayName?: string;
  type?: string;
}

export interface ContentPropertyDto extends ExtensibleAuditedEntityDto<string> {
  contentDefinitionId?: string;
  sequence: number;
  displayName?: string;
  type?: string;
}

export interface ContentPropertyGetListDto extends PagedAndSortedResultRequestDto {
}

export interface ContentPropertyUpdateDto extends ExtensibleObject {
  contentDefinitionId?: string;
  sequence: number;
  displayName?: string;
  type?: string;
}

export interface ContentPropertyWithDetailsDto extends ContentPropertyDto {
  contentDefinition: ContentDefinitionDto;
}

export interface EntityContentCreateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  entityContentDefinitionId?: string;
  sequence: number;
  properties: NameValue[];
}

export interface EntityContentDefinitionCreateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  contentDefinitionId?: string;
}

export interface EntityContentDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
  contentDefinitionId?: string;
}

export interface EntityContentDefinitionGetListDto extends PagedAndSortedResultRequestDto {
  entityType?: string;
  entityId?: string;
}

export interface EntityContentDefinitionUpdateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  contentDefinitionId?: string;
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

export interface EntityContentGetListDto extends PagedAndSortedResultRequestDto {
}

export interface EntityContentUpdateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
  entityContentDefinitionId?: string;
  sequence: number;
  properties: NameValue[];
}

export interface EntityContentWithDetailsDto extends EntityContentDto {
  entityContentDefinition: EntityContentDefinitionDto;
}
