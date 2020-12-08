import type { ExtensibleCreationAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateLanguageDto extends ExtensibleObject {
  displayName: string;
  cultureName: string;
  uiCultureName: string;
  flagIcon: string;
  isEnabled: boolean;
}

export interface CultureInfoDto {
  displayName: string;
  name: string;
}

export interface GetLanguagesTextsInput extends PagedAndSortedResultRequestDto {
  filter: string;
  resourceName: string;
  baseCultureName: string;
  targetCultureName: string;
  getOnlyEmptyValues: boolean;
}

export interface LanguageDto extends ExtensibleCreationAuditedEntityDto<string> {
  cultureName: string;
  uiCultureName: string;
  displayName: string;
  flagIcon: string;
  isEnabled: boolean;
  isDefaultLanguage: boolean;
}

export interface LanguageResourceDto {
  name: string;
}

export interface LanguageTextDto {
  resourceName: string;
  cultureName: string;
  baseCultureName: string;
  baseValue: string;
  name: string;
  value: string;
}

export interface UpdateLanguageDto extends ExtensibleObject {
  displayName: string;
  flagIcon: string;
  isEnabled: boolean;
}
