import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eIdentityPolicyNames } from '../enums/policy-names';
import { eIdentityRouteNames } from '../enums/route-names';

export const IDENTITY_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/identity',
        name: eIdentityRouteNames.IdentityManagement,
        parentName: eThemeSharedRouteNames.Administration,
        order: 2,
        layout: eLayoutType.application,
        iconClass: 'fa fa-id-card-o',
        requiredPolicy: eIdentityPolicyNames.IdentityManagement,
      },
      {
        path: '/identity/organization-units',
        name: eIdentityRouteNames.OrganizationUnits,
        parentName: eIdentityRouteNames.IdentityManagement,
        order: 1,
        requiredPolicy: eIdentityPolicyNames.OrganizationUnits,
      },
      {
        path: '/identity/roles',
        name: eIdentityRouteNames.Roles,
        parentName: eIdentityRouteNames.IdentityManagement,
        order: 2,
        requiredPolicy: eIdentityPolicyNames.Roles,
      },
      {
        path: '/identity/users',
        name: eIdentityRouteNames.Users,
        parentName: eIdentityRouteNames.IdentityManagement,
        order: 3,
        requiredPolicy: eIdentityPolicyNames.Users,
      },
      {
        path: '/identity/claim-types',
        name: eIdentityRouteNames.ClaimTypes,
        parentName: eIdentityRouteNames.IdentityManagement,
        order: 4,
        requiredPolicy: eIdentityPolicyNames.ClaimTypes,
      },
      {
        path: '/identity/security-logs',
        name: eIdentityRouteNames.SecurityLogs,
        parentName: eIdentityRouteNames.IdentityManagement,
        order: 4,
        requiredPolicy: eIdentityPolicyNames.SecurityLogs,
      },
    ]);
  };
}
