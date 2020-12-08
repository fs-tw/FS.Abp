import {
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { DEFAULT_AUDIT_LOGS_ENTITY_ACTIONS } from '../defaults/default-audit-logs-entity-actions';
import { DEFAULT_AUDIT_LOGS_ENTITY_PROPS } from '../defaults/default-audit-logs-entity-props';
import { DEFAULT_AUDIT_LOGS_TOOLBAR_ACTIONS } from '../defaults/default-audit-logs-toolbar-actions';
import { DEFAULT_ENTITY_CHANGES_ENTITY_ACTIONS } from '../defaults/default-entity-changes-entity-actions';
import { eAuditLoggingComponents } from '../enums/components';
import { AuditLogDto, EntityChangeDto } from '../proxy/audit-logging/models';

export const DEFAULT_AUDIT_LOGGING_ENTITY_ACTIONS = {
  [eAuditLoggingComponents.AuditLogs]: DEFAULT_AUDIT_LOGS_ENTITY_ACTIONS,
  [eAuditLoggingComponents.EntityChanges]: DEFAULT_ENTITY_CHANGES_ENTITY_ACTIONS,
};

export const DEFAULT_AUDIT_LOGGING_TOOLBAR_ACTIONS = {
  [eAuditLoggingComponents.AuditLogs]: DEFAULT_AUDIT_LOGS_TOOLBAR_ACTIONS,
};
export const DEFAULT_AUDIT_LOGGING_ENTITY_PROPS = {
  [eAuditLoggingComponents.AuditLogs]: DEFAULT_AUDIT_LOGS_ENTITY_PROPS,
};

export const AUDIT_LOGGING_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<
  EntityActionContributors
>('AUDIT_LOGGING_ENTITY_ACTION_CONTRIBUTORS');

export const AUDIT_LOGGING_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<
  ToolbarActionContributors
>('AUDIT_LOGGING_TOOLBAR_ACTION_CONTRIBUTORS');

export const AUDIT_LOGGING_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<EntityPropContributors>(
  'AUDIT_LOGGING_ENTITY_PROP_CONTRIBUTORS',
);

// https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eAuditLoggingComponents.AuditLogs]: EntityActionContributorCallback<AuditLogDto>[];
  [eAuditLoggingComponents.EntityChanges]: EntityActionContributorCallback<EntityChangeDto>[];
}>;
type ToolbarActionContributors = Partial<{
  [eAuditLoggingComponents.AuditLogs]: ToolbarActionContributorCallback<AuditLogDto[]>[];
}>;
type EntityPropContributors = Partial<{
  [eAuditLoggingComponents.AuditLogs]: EntityPropContributorCallback<AuditLogDto>[];
}>;
