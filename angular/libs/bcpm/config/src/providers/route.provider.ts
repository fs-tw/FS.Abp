import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eBcpmRouteNames } from '../enums/route-names';
// import { eThemesPolicyNames } from '../enums/policy-names';

export const BCPM_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export function configureRoutes(routes: RoutesService) {
  let shortcut = {
    path: '/bcpm',
    name: eBcpmRouteNames.Bcpm,
    layout: eLayoutType.application,
    parentName: eThemeSharedRouteNames.Administration,
    iconClass: 'fa fa-folder-open',
    order: 6,
    //requiredPolicy: eBcpmPolicyNames.DirectoryDescriptor,
  };
  return () => {
    routes.add([
      shortcut
    ]);
  };
}
