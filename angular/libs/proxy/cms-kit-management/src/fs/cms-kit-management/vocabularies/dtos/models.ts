import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface VocabularyDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  displayName?: string;
  no?: string;
}

export interface VocabularyDefinitionGetListDto extends SearchResultRequestDto {
}

export interface VocabularyDefinitionWithDetailsDto extends VocabularyDefinitionDto {
  vocabularies: VocabularyDto[];
}

export interface VocabularyDto extends ExtensibleAuditedEntityDto<string> {
  vocabularyDefinitionId?: string;
  code?: string;
  parentId?: string;
  level: number;
  displayName?: string;
  no?: string;
}

export interface VocabularyGetListDto extends SearchResultRequestDto {
}

export interface VocabularyWithDetailsDto extends VocabularyDto {
  vocabularyDefinition: VocabularyDefinitionDto;
  children: VocabularyDto[];
  parent: VocabularyDto;
}
