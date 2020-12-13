import type { ExtensibleEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ApiResourceClaimDto {
  apiResourceId: string;
  type: string;
}

export interface ApiResourcePropertyDto {
  apiResourceId: string;
  key: string;
  value: string;
}

export interface ApiResourceScopeDto {
  apiResourceId: string;
  scope: string;
}

export interface ApiResourceSecretDto {
  apiResourceId: string;
  type: string;
  value: string;
  description: string;
  expiration?: string;
}

export interface ApiResourceWithDetailsDto extends ExtensibleEntityDto<string> {
  name: string;
  displayName: string;
  description: string;
  enabled: boolean;
  allowedAccessTokenSigningAlgorithms: string;
  showInDiscoveryDocument: boolean;
  secrets: ApiResourceSecretDto[];
  scopes: ApiResourceScopeDto[];
  userClaims: ApiResourceClaimDto[];
  properties: ApiResourcePropertyDto[];
}

export interface CreateApiResourceDto extends ExtensibleObject {
  name: string;
  displayName: string;
  description: string;
  allowedAccessTokenSigningAlgorithms: string;
  showInDiscoveryDocument: boolean;
  userClaims: ApiResourceClaimDto[];
}

export interface GetApiResourceListInput extends PagedAndSortedResultRequestDto {
  filter: string;
}

export interface UpdateApiResourceDto extends ExtensibleObject {
  displayName: string;
  description: string;
  allowedAccessTokenSigningAlgorithms: string;
  enabled: boolean;
  secrets: ApiResourceSecretDto[];
  scopes: ApiResourceScopeDto[];
  userClaims: ApiResourceClaimDto[];
  properties: ApiResourcePropertyDto[];
}
