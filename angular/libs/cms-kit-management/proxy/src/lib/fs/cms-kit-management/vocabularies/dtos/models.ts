import type { EntityDto, ExtensibleAuditedEntityDto, ExtensibleObject } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface MetaData {
  vocabularyDefinitionPrimaryKeyDto: VocabularyDefinitionPrimaryKeyDto;
  vocabularyDefinitionDto: VocabularyDefinitionDto;
  vocabularyDefinitionCreateDto: VocabularyDefinitionCreateDto;
  vocabularyDefinitionUpdateDto: VocabularyDefinitionUpdateDto;
  vocabularyDefinitionGetListDto: VocabularyDefinitionGetListDto;
  vocabularyDefinitionWithDetailsDto: VocabularyDefinitionWithDetailsDto;
  vocabularyPrimaryKeyDto: VocabularyPrimaryKeyDto;
  vocabularyDto: VocabularyDto;
  vocabularyCreateDto: VocabularyCreateDto;
  vocabularyUpdateDto: VocabularyUpdateDto;
  vocabularyGetListDto: VocabularyGetListDto;
  vocabularyWithDetailsDto: VocabularyWithDetailsDto;
}

export interface VocabularyCreateDto extends ExtensibleObject {
  vocabularyDefinitionId?: string;
  code?: string;
  parentId?: string;
  level: number;
  displayName?: string;
  no?: string;
}

export interface VocabularyDefinitionCreateDto extends ExtensibleObject {
  displayName?: string;
  no?: string;
}

export interface VocabularyDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  displayName?: string;
  no?: string;
}

export interface VocabularyDefinitionGetListDto extends SearchResultRequestDto {
}

export interface VocabularyDefinitionPrimaryKeyDto extends EntityDto<string> {
}

export interface VocabularyDefinitionUpdateDto extends ExtensibleObject {
  displayName?: string;
  no?: string;
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

export interface VocabularyPrimaryKeyDto extends EntityDto<string> {
}

export interface VocabularyUpdateDto extends ExtensibleObject {
  vocabularyDefinitionId?: string;
  code?: string;
  parentId?: string;
  level: number;
  displayName?: string;
  no?: string;
}

export interface VocabularyWithDetailsDto extends VocabularyDto {
  vocabularyDefinition: VocabularyDefinitionDto;
  children: VocabularyDto[];
  parent: VocabularyDto;
}
