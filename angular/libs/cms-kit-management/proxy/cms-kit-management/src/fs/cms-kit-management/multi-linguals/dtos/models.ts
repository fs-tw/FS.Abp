import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { FilterRequestDto, SearchResultRequestDto } from '../../../abp/application/dtos/models';
import type { NameValue } from '../../../../volo/abp/models';

export interface MultiLingualDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualFindDto extends FilterRequestDto {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualGetListDto extends SearchResultRequestDto {
}

export interface MultiLingualPatchDto {
  entityType?: string;
  entityId?: string;
  translations: MultiLingualPatchDto+TranslationDto[];
}

export interface MultiLingualPatchDto+TranslationDto {
  culture?: string;
  properties: NameValue[];
}

export interface MultiLingualTranslationDto extends ExtensibleAuditedEntityDto<string> {
  culture?: string;
  properties: NameValue[];
  multiLingualId?: string;
}

export interface MultiLingualWithDetailsDto extends MultiLingualDto {
  multiLingualTranslations: MultiLingualTranslationDto[];
}
