import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { AuditLogsComponent } from '../components/audit-logs/audit-logs.component';
import { AuditLogDto } from '../proxy/audit-logging/models';

export const DEFAULT_AUDIT_LOGS_ENTITY_ACTIONS = EntityAction.createMany<AuditLogDto>([
  {
    text: 'AbpAuditLogging::Detail',
    action: data => {
      const component = data.getInjected(AuditLogsComponent);
      component.openModal(data.record.id);
    },
    icon: 'fa fa-search',
  },
]);
