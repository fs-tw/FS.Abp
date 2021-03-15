import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eFormmanagementRouteNames } from '../enums/route-names';
// import { eThemesPolicyNames } from '../enums/policy-names';

export const FORMMANAGEMENT_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export function configureRoutes(routes: RoutesService) {
  let shortcut = {
    path: '/form-management',
    name: eFormmanagementRouteNames.Theme,
    layout: eLayoutType.application,
    parentName: eThemeSharedRouteNames.Administration,
    iconClass: 'fa fa-folder-open',
    order: 6,
    //requiredPolicy: eThemePolicyNames.DirectoryDescriptor,
  };
  return () => {
    routes.add([
      shortcut
    ]);
  };
}
