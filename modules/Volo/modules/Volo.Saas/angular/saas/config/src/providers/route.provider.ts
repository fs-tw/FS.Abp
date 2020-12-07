import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eSaasPolicyNames } from '../enums/policy-names';
import { eSaasRouteNames } from '../enums/route-names';

export const SAAS_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/saas',
        name: eSaasRouteNames.Saas,
        parentName: eThemeSharedRouteNames.Administration,
        order: 1,
        layout: eLayoutType.application,
        iconClass: 'fa fa-users',
        requiredPolicy: eSaasPolicyNames.Saas,
      },
      {
        path: '/saas/tenants',
        name: eSaasRouteNames.Tenants,
        parentName: eSaasRouteNames.Saas,
        order: 1,
        requiredPolicy: eSaasPolicyNames.Tenants,
      },
      {
        path: '/saas/editions',
        name: eSaasRouteNames.Editions,
        parentName: eSaasRouteNames.Saas,
        order: 2,
        requiredPolicy: eSaasPolicyNames.Editions,
      },
    ]);
  };
}
