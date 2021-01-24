import type { AuditedEntityDto } from '@abp/ng.core';
import type { SearchResultRequestDto } from '../../../abp/application/dtos/models';

export interface RouteConfigDto {
  icon?: string;
  url?: string;
  sequence: number;
  openAnotherWindow: boolean;
}

export interface RouteDefinitionDto extends AuditedEntityDto<string> {
  no?: string;
  displayName?: string;
  description?: string;
  enable: boolean;
}

export interface RouteDefinitionGetListDto extends SearchResultRequestDto {
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
  enable: boolean;
  routeConfig: RouteConfigDto;
  routeDefinitionId?: string;
}

export interface RouteGetListDto extends SearchResultRequestDto {
}

export interface RouteWithDetailsDto extends RouteDto {
  routeDefinition: RouteDefinitionDto;
  children: RouteDto[];
  parent: RouteDto;
}
