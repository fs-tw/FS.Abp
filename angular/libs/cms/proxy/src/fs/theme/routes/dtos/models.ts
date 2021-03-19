import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
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

export interface RouteCreateDto {
  no?: string;
  displayName?: string;
  description?: string;
  code?: string;
  level: number;
  parentId?: string;
  disable: boolean;
  iconFileId?: string;
  url?: string;
  sequence: number;
  openAnotherWindow: boolean;
  routeDefinitionId?: string;
}

export interface RouteDefinitionCreateDto {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
}

export interface RouteDefinitionDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
}

export interface RouteDefinitionGetListDto extends SearchResultRequestDto {
}

export interface RouteDefinitionPrimaryKeyDto extends EntityDto<string> {
}

export interface RouteDefinitionUpdateDto {
  no?: string;
  displayName?: string;
  description?: string;
  disable: boolean;
}

export interface RouteDefinitionWithDetailsDto extends RouteDefinitionDto {
  routes: RouteDto[];
}

export interface RouteDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  code?: string;
  level: number;
  parentId?: string;
  disable: boolean;
  iconFileId?: string;
  url?: string;
  sequence: number;
  openAnotherWindow: boolean;
  routeDefinitionId?: string;
}

export interface RouteGetListDto extends SearchResultRequestDto {
}

export interface RoutePrimaryKeyDto extends EntityDto<string> {
}

export interface RouteUpdateDto {
  no?: string;
  displayName?: string;
  description?: string;
  code?: string;
  level: number;
  parentId?: string;
  disable: boolean;
  iconFileId?: string;
  url?: string;
  sequence: number;
  openAnotherWindow: boolean;
  routeDefinitionId?: string;
}

export interface RouteWithDetailsDto extends RouteDto {
  routeDefinition: RouteDefinitionDto;
  children: RouteDto[];
  parent: RouteDto;
}
