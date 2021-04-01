import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface MetaData {
  versionDefinitionPrimaryKeyDto: VersionDefinitionPrimaryKeyDto;
  versionDefinitionDto: VersionDefinitionDto;
  versionDefinitionCreateDto: VersionDefinitionCreateDto;
  versionDefinitionUpdateDto: VersionDefinitionUpdateDto;
  versionDefinitionGetListDto: VersionDefinitionGetListDto;
  versionDefinitionWithDetailsDto: VersionDefinitionWithDetailsDto;
  versionPrimaryKeyDto: VersionPrimaryKeyDto;
  versionDto: VersionDto;
  versionCreateDto: VersionCreateDto;
  versionUpdateDto: VersionUpdateDto;
  versionGetListDto: VersionGetListDto;
  versionWithDetailsDto: VersionWithDetailsDto;
}

export interface VersionCreateDto {
  no: number;
  prevVersionId?: string;
  nextVersionId?: string;
  versionDefinitionId?: string;
}

export interface VersionDefinitionCreateDto {
  entityType?: string;
  entityKey?: string;
  displayName?: string;
  currentVersionId?: string;
}

export interface VersionDefinitionDto extends AuditedEntityDto<string> {
  entityType?: string;
  entityKey?: string;
  displayName?: string;
  currentVersionId?: string;
}

export interface VersionDefinitionGetListDto extends SearchResultRequestDto {
}

export interface VersionDefinitionPrimaryKeyDto extends EntityDto<string> {
}

export interface VersionDefinitionUpdateDto {
  entityType?: string;
  entityKey?: string;
  displayName?: string;
  currentVersionId?: string;
}

export interface VersionDefinitionWithDetailsDto extends VersionDefinitionDto {
  currentVersion: VersionDto;
  versions: VersionDto[];
}

export interface VersionDto extends AuditedEntityDto<string> {
  no: number;
  prevVersionId?: string;
  nextVersionId?: string;
  versionDefinitionId?: string;
}

export interface VersionGetListDto extends SearchResultRequestDto {
}

export interface VersionPrimaryKeyDto extends EntityDto<string> {
}

export interface VersionUpdateDto {
  no: number;
  prevVersionId?: string;
  nextVersionId?: string;
  versionDefinitionId?: string;
}

export interface VersionWithDetailsDto extends VersionDto {
  versionDefinition: VersionDefinitionDto;
}
