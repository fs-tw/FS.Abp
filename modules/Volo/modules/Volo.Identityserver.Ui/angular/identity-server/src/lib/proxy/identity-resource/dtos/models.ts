import type { ExtensibleEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateIdentityResourceDto extends ExtensibleObject {
  name: string;
  displayName: string;
  description: string;
  enabled: boolean;
  required: boolean;
  emphasize: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: IdentityResourceClaimDto[];
  properties: IdentityResourcePropertyDto[];
}

export interface GetIdentityResourceListInput extends PagedAndSortedResultRequestDto {
  filter: string;
}

export interface IdentityResourceClaimDto {
  identityResourceId: string;
  type: string;
}

export interface IdentityResourcePropertyDto {
  identityResourceId: string;
  key: string;
  value: string;
}

export interface IdentityResourceWithDetailsDto extends ExtensibleEntityDto<string> {
  name: string;
  displayName: string;
  description: string;
  enabled: boolean;
  required: boolean;
  emphasize: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: IdentityResourceClaimDto[];
  properties: IdentityResourcePropertyDto[];
}

export interface UpdateIdentityResourceDto extends ExtensibleObject {
  name: string;
  displayName: string;
  description: string;
  enabled: boolean;
  required: boolean;
  emphasize: boolean;
  showInDiscoveryDocument: boolean;
  userClaims: IdentityResourceClaimDto[];
  properties: IdentityResourcePropertyDto[];
}
