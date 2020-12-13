import {
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eAuditLoggingComponents } from '../enums/components';
import { AuditLogDto, EntityChangeDto } from '../proxy/audit-logging/models';

export type AuditLoggingEntityActionContributors = Partial<{
  [eAuditLoggingComponents.AuditLogs]: EntityActionContributorCallback<AuditLogDto>[];
  [eAuditLoggingComponents.EntityChanges]: EntityActionContributorCallback<EntityChangeDto>[];
}>;

export type AuditLoggingToolbarActionContributors = Partial<{
  [eAuditLoggingComponents.AuditLogs]: ToolbarActionContributorCallback<AuditLogDto[]>[];
}>;

export type AuditLoggingEntityPropContributors = Partial<{
  [eAuditLoggingComponents.AuditLogs]: EntityPropContributorCallback<AuditLogDto>[];
}>;

export interface AuditLoggingConfigOptions {
  entityActionContributors?: AuditLoggingEntityActionContributors;
  toolbarActionContributors?: AuditLoggingToolbarActionContributors;
  entityPropContributors?: AuditLoggingEntityPropContributors;
}
