import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface MultiLingualDto extends ExtensibleAuditedEntityDto<string> {
  entityType?: string;
  entityId?: string;
}

export interface MultiLingualGetListDto extends SearchResultRequestDto {
}

export interface MultiLingualPropertyDto {
  name?: string;
  value?: string;
}

export interface MultiLingualTranslationDto extends ExtensibleAuditedEntityDto<string> {
  culture?: string;
  properties: MultiLingualPropertyDto[];
  multiLingualId?: string;
}

export interface MultiLingualTranslationGetListDto extends SearchResultRequestDto {
}

export interface MultiLingualTranslationWithDetailsDto extends MultiLingualTranslationDto {
  multiLingual: MultiLingualDto;
}

export interface MultiLingualWithDetailsDto extends MultiLingualDto {
  multiLingualTranslations: MultiLingualTranslationDto[];
}
