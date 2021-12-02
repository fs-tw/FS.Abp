import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eAuditLogManagementPolicyNames, eAuditLogManagementRouteNames } from '../enums';

export const AUDIT_LOG_MANAGEMENT_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

const auditLogsModules = [
  {
    path: '/audit-log-management/audit-logs',
    name: eAuditLogManagementRouteNames.AuditLogs,
    parentName: eAuditLogManagementRouteNames.AuditLogManagement,
    iconClass: 'fa fa-blog',
    order: 1,
  }
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/cms-kit-management',
        name: eAuditLogManagementRouteNames.AuditLogManagement,
        parentName: eThemeSharedRouteNames.Administration,
        requiredPolicy: eAuditLogManagementPolicyNames.AuditLogManagement,
        layout: eLayoutType.application,
        iconClass: 'far fa-newspaper',
        order: -1,
        navConfig: {
          name: eAuditLogManagementRouteNames.AuditLogManagement,
        }
      } as any,
      ...auditLogsModules,
    ]);
  };
}
