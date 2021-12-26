import type { ExtensibleAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { FilterRequestDto } from '../../../abp/application/dtos/models';
import type { NameValue } from '../../../../volo/abp/models';

export interface MultiLingualCreateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualFindDto extends FilterRequestDto {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualGetListDto extends PagedAndSortedResultRequestDto {
}

export interface MultiLingualPatchDto {
  entityType?: string;
  entityId?: string;
  translations: TranslationDto[];
}

export interface MultiLingualTranslationCreateDto extends ExtensibleObject {
  culture?: string;
  properties: NameValue[];
  multiLingualId?: string;
}

export interface MultiLingualTranslationDto extends ExtensibleAuditedEntityDto<string> {
  culture?: string;
  properties: NameValue[];
  multiLingualId?: string;
}

export interface MultiLingualTranslationGetListDto extends PagedAndSortedResultRequestDto {
}

export interface MultiLingualTranslationUpdateDto extends ExtensibleObject {
  culture?: string;
  properties: NameValue[];
  multiLingualId?: string;
}

export interface MultiLingualTranslationWithDetailsDto extends MultiLingualTranslationDto {
  multiLingual: MultiLingualDto;
}

export interface MultiLingualUpdateDto extends ExtensibleObject {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualWithDetailsDto extends MultiLingualDto {
  multiLingualTranslations: MultiLingualTranslationDto[];
}

export interface TranslationDto {
  culture?: string;
  properties: NameValue[];
}
