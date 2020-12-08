import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTemplateContentInput {
  templateName: string;
  cultureName: string;
}

export interface GetTemplateDefinitionListInput extends PagedAndSortedResultRequestDto {
  filterText: string;
}

export interface RestoreTemplateContentInput {
  templateName: string;
  cultureName: string;
}

export interface TemplateDefinitionDto {
  name: string;
  displayName: string;
  isLayout: boolean;
  layout: string;
  isInlineLocalized: boolean;
  defaultCultureName: string;
}

export interface TextTemplateContentDto {
  name: string;
  cultureName: string;
  content: string;
}

export interface UpdateTemplateContentInput {
  templateName: string;
  cultureName: string;
  content: string;
}
