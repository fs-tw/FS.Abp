import type { EntityDto, ExtensibleAuditedEntityDto, ExtensibleObject } from '@abp/ng.core';
import type { UrlType } from '../url-type.enum';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface MetaData {
  routeDefinitionPrimaryKeyDto: RouteDefinitionPrimaryKeyDto;
  routeDefinitionDto: RouteDefinitionDto;
  routeDefinitionCreateDto: RouteDefinitionCreateDto;
  routeDefinitionUpdateDto: RouteDefinitionUpdateDto;
  routeDefinitionGetListDto: RouteDefinitionGetListDto;
  routeDefinitionWithDetailsDto: RouteDefinitionWithDetailsDto;
  routePrimaryKeyDto: RoutePrimaryKeyDto;
  routeDto: RouteDto;
  routeCreateDto: RouteCreateDto;
  routeUpdateDto: RouteUpdateDto;
  routeGetListDto: RouteGetListDto;
  routeWithDetailsDto: RouteWithDetailsDto;
}

export interface RouteCreateDto extends ExtensibleObject {
  no?: string;
  displayName?: string;
  routeDefinitionId?: string;
  code?: string;
  parentId?: string;
  urlType: UrlType;
  url?: string;
  level: number;
  isHidden: boolean;
}

export interface RouteDefinitionCreateDto extends ExtensibleObject {
  no?: string;
  displayName?: string;
}

export interface RouteDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  no?: string;
  displayName?: string;
}

export interface RouteDefinitionGetListDto extends SearchResultRequestDto {
}

export interface RouteDefinitionPrimaryKeyDto extends EntityDto<string> {
}

export interface RouteDefinitionUpdateDto extends ExtensibleObject {
  no?: string;
  displayName?: string;
}

export interface RouteDefinitionWithDetailsDto extends RouteDefinitionDto {
  routes: RouteDto[];
}

export interface RouteDto extends ExtensibleAuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  routeDefinitionId?: string;
  code?: string;
  parentId?: string;
  urlType: UrlType;
  url?: string;
  level: number;
  isHidden: boolean;
}

export interface RouteGetListDto extends SearchResultRequestDto {
}

export interface RoutePrimaryKeyDto extends EntityDto<string> {
}

export interface RouteUpdateDto extends ExtensibleObject {
  no?: string;
  displayName?: string;
  routeDefinitionId?: string;
  code?: string;
  parentId?: string;
  urlType: UrlType;
  url?: string;
  level: number;
  isHidden: boolean;
}

export interface RouteWithDetailsDto extends RouteDto {
  routeDefinition: RouteDefinitionDto;
  children: RouteDto[];
  parent: RouteDto;
}
