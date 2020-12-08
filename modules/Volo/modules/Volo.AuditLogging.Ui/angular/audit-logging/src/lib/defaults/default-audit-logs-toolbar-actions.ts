import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { AuditLogDto } from '../proxy/audit-logging/models';

export const DEFAULT_AUDIT_LOGS_TOOLBAR_ACTIONS = ToolbarAction.createMany<AuditLogDto[]>([]);
