import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eIdentityServerPolicyNames } from '../enums/policy-names';
import { eIdentityServerRouteNames } from '../enums/route-names';

export const IDENTITY_SERVER_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        name: eIdentityServerRouteNames.IdentityServer,
        path: '/identity-server',
        parentName: eThemeSharedRouteNames.Administration,
        layout: eLayoutType.application,
        iconClass: 'fa fa-id-card-o',
        order: 3,
        requiredPolicy: eIdentityServerPolicyNames.IdentityServer,
      },
      {
        path: '/identity-server/clients',
        name: eIdentityServerRouteNames.Clients,
        parentName: eIdentityServerRouteNames.IdentityServer,
        order: 1,
        requiredPolicy: eIdentityServerPolicyNames.Clients,
      },
      {
        path: '/identity-server/identity-resources',
        name: eIdentityServerRouteNames.IdentityResources,
        parentName: eIdentityServerRouteNames.IdentityServer,
        order: 2,
        requiredPolicy: eIdentityServerPolicyNames.IdentityResources,
      },
      {
        path: '/identity-server/api-resources',
        name: eIdentityServerRouteNames.ApiResources,
        parentName: eIdentityServerRouteNames.IdentityServer,
        order: 3,
        requiredPolicy: eIdentityServerPolicyNames.ApiResources,
      },
      {
        path: '/identity-server/api-scopes',
        name: eIdentityServerRouteNames.ApiScopes,
        parentName: eIdentityServerRouteNames.IdentityServer,
        order: 4,
        requiredPolicy: eIdentityServerPolicyNames.ApiScopes,
      },
    ]);
  };
}
