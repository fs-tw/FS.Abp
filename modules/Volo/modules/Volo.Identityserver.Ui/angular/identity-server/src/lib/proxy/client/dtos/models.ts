import type { ExtensibleEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ClientClaimDto {
  type: string;
  value: string;
}

export interface ClientCorsOriginDto {
  clientId: string;
  origin: string;
}

export interface ClientGrantTypeDto {
  clientId: string;
  grantType: string;
}

export interface ClientIdentityProviderRestrictionDto {
  clientId: string;
  provider: string;
}

export interface ClientPostLogoutRedirectUriDto {
  clientId: string;
  postLogoutRedirectUri: string;
}

export interface ClientPropertyDto {
  clientId: string;
  key: string;
  value: string;
}

export interface ClientRedirectUriDto {
  clientId: string;
  redirectUri: string;
}

export interface ClientScopeDto {
  clientId: string;
  scope: string;
}

export interface ClientSecretDto {
  clientId: string;
  type: string;
  value: string;
  description: string;
  expiration?: string;
}

export interface ClientWithDetailsDto extends ExtensibleEntityDto<string> {
  clientId: string;
  clientName: string;
  description: string;
  clientUri: string;
  logoUri: string;
  enabled: boolean;
  protocolType: string;
  requireClientSecret: boolean;
  requireConsent: boolean;
  allowRememberConsent: boolean;
  alwaysIncludeUserClaimsInIdToken: boolean;
  requirePkce: boolean;
  allowPlainTextPkce: boolean;
  requireRequestObject: boolean;
  allowAccessTokensViaBrowser: boolean;
  frontChannelLogoutUri: string;
  frontChannelLogoutSessionRequired: boolean;
  backChannelLogoutUri: string;
  backChannelLogoutSessionRequired: boolean;
  allowOfflineAccess: boolean;
  identityTokenLifetime: number;
  allowedIdentityTokenSigningAlgorithms: string;
  accessTokenLifetime: number;
  authorizationCodeLifetime: number;
  consentLifetime?: number;
  absoluteRefreshTokenLifetime: number;
  slidingRefreshTokenLifetime: number;
  refreshTokenUsage: number;
  updateAccessTokenClaimsOnRefresh: boolean;
  refreshTokenExpiration: number;
  accessTokenType: number;
  enableLocalLogin: boolean;
  includeJwtId: boolean;
  alwaysSendClientClaims: boolean;
  clientClaimsPrefix: string;
  pairWiseSubjectSalt: string;
  userSsoLifetime?: number;
  userCodeType: string;
  deviceCodeLifetime: number;
  clientSecrets: ClientSecretDto[];
  allowedScopes: ClientScopeDto[];
  claims: ClientClaimDto[];
  allowedGrantTypes: ClientGrantTypeDto[];
  identityProviderRestrictions: ClientIdentityProviderRestrictionDto[];
  properties: ClientPropertyDto[];
  allowedCorsOrigins: ClientCorsOriginDto[];
  redirectUris: ClientRedirectUriDto[];
  postLogoutRedirectUris: ClientPostLogoutRedirectUriDto[];
}

export interface CreateClientDto extends ExtensibleObject {
  clientId: string;
  clientName: string;
  description: string;
  clientUri: string;
  logoUri: string;
  requireConsent: boolean;
  callbackUrl: string;
  logoutUrl: string;
  secrets: ClientSecretDto[];
  scopes: string[];
}

export interface GetClientListInput extends PagedAndSortedResultRequestDto {
  filter: string;
}

export interface UpdateClientDto extends ExtensibleObject {
  clientName: string;
  description: string;
  clientUri: string;
  logoUri: string;
  enabled: boolean;
  requireConsent: boolean;
  allowOfflineAccess: boolean;
  allowRememberConsent: boolean;
  requirePkce: boolean;
  requireClientSecret: boolean;
  requireRequestObject: boolean;
  accessTokenLifetime: number;
  consentLifetime?: number;
  accessTokenType: number;
  enableLocalLogin: boolean;
  frontChannelLogoutUri: string;
  frontChannelLogoutSessionRequired: boolean;
  backChannelLogoutUri: string;
  allowedIdentityTokenSigningAlgorithms: string;
  backChannelLogoutSessionRequired: boolean;
  includeJwtId: boolean;
  alwaysSendClientClaims: boolean;
  pairWiseSubjectSalt: string;
  userSsoLifetime?: number;
  userCodeType: string;
  deviceCodeLifetime: number;
  clientSecrets: ClientSecretDto[];
  claims: ClientClaimDto[];
  properties: ClientPropertyDto[];
  allowedGrantTypes: string[];
  identityProviderRestrictions: string[];
  scopes: string[];
  allowedCorsOrigins: string[];
  redirectUris: string[];
  postLogoutRedirectUris: string[];
}
