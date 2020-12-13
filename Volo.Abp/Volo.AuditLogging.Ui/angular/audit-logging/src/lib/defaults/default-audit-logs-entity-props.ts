import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { of } from 'rxjs';
import { AuditLogsComponent } from '../components/audit-logs/audit-logs.component';
import { AuditLogDto } from '../proxy/audit-logging/models';

export const DEFAULT_AUDIT_LOGS_ENTITY_PROPS = EntityProp.createMany<AuditLogDto>([
  {
    type: ePropType.String,
    name: 'url',
    displayName: 'AbpAuditLogging::HttpRequest',
    sortable: true,
    columnWidth: 600,
    valueResolver: data => {
      const component = data.getInjected(AuditLogsComponent);
      const { httpMethod, httpStatusCode, url } = data.record;
      const methodClass = component.httpMethodClass(httpMethod);
      const statusClass = component.httpCodeClass(httpStatusCode);

      return of(
        `<span class="badge ${statusClass} mr-1">${httpStatusCode}</span>` +
          `<span class="badge ${methodClass} mr-1">${httpMethod}</span>` +
          (url || ''),
      );
    },
  },
  {
    type: ePropType.String,
    name: 'userName',
    displayName: 'AbpAuditLogging::User',
    sortable: true,
    columnWidth: 150,
  },
  {
    type: ePropType.String,
    name: 'clientIpAddress',
    displayName: 'AbpAuditLogging::IpAddress',
    sortable: true,
    columnWidth: 150,
  },
  {
    type: ePropType.DateTime,
    name: 'executionTime',
    displayName: 'AbpAuditLogging::Time',
    sortable: true,
    columnWidth: 150,
  },
  {
    type: ePropType.Number,
    name: 'executionDuration',
    displayName: 'AbpAuditLogging::Duration',
    sortable: true,
    columnWidth: 150,
  },
  {
    type: ePropType.String,
    name: 'applicationName',
    displayName: 'AbpAuditLogging::ApplicationName',
    sortable: true,
    columnWidth: 200,
  },
]);
