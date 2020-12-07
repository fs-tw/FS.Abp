import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eAuditLoggingPolicyNames } from '../enums/policy-names';
import { eAuditLoggingRouteNames } from '../enums/route-names';

export const AUDIT_LOGGING_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        name: eAuditLoggingRouteNames.AuditLogging,
        path: '/audit-logs',
        parentName: eThemeSharedRouteNames.Administration,
        layout: eLayoutType.application,
        iconClass: 'fa fa-file-text',
        order: 6,
        requiredPolicy: eAuditLoggingPolicyNames.AuditLogging,
      },
    ]);
  };
}
