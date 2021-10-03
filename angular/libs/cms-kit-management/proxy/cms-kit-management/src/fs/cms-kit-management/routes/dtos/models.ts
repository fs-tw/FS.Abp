import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';
import type { UrlType } from '../url-type.enum';

export interface RouteDefinitionDto extends ExtensibleAuditedEntityDto<string> {
  no?: string;
  displayName?: string;
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
