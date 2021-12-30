import type { EntityDto, ExtensibleEntityDto } from '@abp/ng.core';
import type { EntityChangeType } from '../../../../volo/abp/auditing/entity-change-type.enum';

export interface AuditLogActionDto extends ExtensibleEntityDto<string> {
  tenantId?: string;
  auditLogId?: string;
  serviceName?: string;
  methodName?: string;
  parameters?: string;
  executionTime?: string;
  executionDuration: number;
}

export interface AuditLogDto extends ExtensibleEntityDto<string> {
  userId?: string;
  userName?: string;
  tenantId?: string;
  impersonatorUserId?: string;
  impersonatorTenantId?: string;
  executionTime?: string;
  executionDuration: number;
  clientIpAddress?: string;
  clientName?: string;
  browserInfo?: string;
  httpMethod?: string;
  url?: string;
  exceptions?: string;
  comments?: string;
  httpStatusCode?: number;
  applicationName?: string;
  correlationId?: string;
  entityChanges: EntityChangeDto[];
  actions: AuditLogActionDto[];
}

export interface EntityChangeDto extends ExtensibleEntityDto<string> {
  auditLogId?: string;
  tenantId?: string;
  changeTime?: string;
  changeType: EntityChangeType;
  entityId?: string;
  entityTypeFullName?: string;
  propertyChanges: EntityPropertyChangeDto[];
}

export interface EntityPropertyChangeDto extends EntityDto<string> {
  tenantId?: string;
  entityChangeId?: string;
  newValue?: string;
  originalValue?: string;
  propertyName?: string;
  propertyTypeFullName?: string;
}
