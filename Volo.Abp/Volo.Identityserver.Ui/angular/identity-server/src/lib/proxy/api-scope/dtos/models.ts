import type { ExtensibleEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ApiScopeClaimDto {
  apiScopeId: string;
  type: string;
}

export interface ApiScopePropertyDto {
  apiScopeId: string;
  key: string;
  value: string;
}

export interface ApiScopeWithDetailsDto extends ExtensibleEntityDto<string> {
  enabled: boolean;
  name: string;
  displayName: string;
  description: string;
  required: boolean;
  emphasize: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: ApiScopeClaimDto[];
  properties: ApiScopePropertyDto[];
}

export interface CreateApiScopeDto extends ExtensibleObject {
  name: string;
  displayName: string;
  description: string;
  required: boolean;
  enabled: boolean;
  emphasize: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: ApiScopeClaimDto[];
  properties: ApiScopePropertyDto[];
}

export interface GetApiScopeListInput extends PagedAndSortedResultRequestDto {
  filter: string;
}

export interface UpdateApiScopeDto extends ExtensibleObject {
  displayName: string;
  description: string;
  required: boolean;
  enabled: boolean;
  emphasize: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: ApiScopeClaimDto[];
  properties: ApiScopePropertyDto[];
}
