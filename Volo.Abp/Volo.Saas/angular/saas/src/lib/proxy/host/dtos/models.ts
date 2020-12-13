import type { ExtensibleEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface EditionCreateDto extends EditionCreateOrUpdateDtoBase {
}

export interface EditionCreateOrUpdateDtoBase extends ExtensibleObject {
  displayName: string;
}

export interface EditionDto extends ExtensibleEntityDto<string> {
  displayName: string;
}

export interface EditionUpdateDto extends EditionCreateOrUpdateDtoBase {
}

export interface GetEditionsInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface GetTenantsInput extends PagedAndSortedResultRequestDto {
  filter: string;
  getEditionNames: boolean;
}

export interface SaasTenantCreateDto extends SaasTenantCreateOrUpdateDtoBase {
  adminEmailAddress: string;
  adminPassword: string;
}

export interface SaasTenantCreateOrUpdateDtoBase extends ExtensibleObject {
  name: string;
  editionId?: string;
}

export interface SaasTenantDto extends ExtensibleEntityDto<string> {
  name: string;
  editionId?: string;
  editionName: string;
}

export interface SaasTenantUpdateDto extends SaasTenantCreateOrUpdateDtoBase {
}
