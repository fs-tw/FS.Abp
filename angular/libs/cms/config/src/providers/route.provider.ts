import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eCmsRouteNames } from '../enums/route-names';
import { eCmsPolicyNames } from '../enums/policy-names';

export const CMS_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export function configureRoutes(routes: RoutesService) {
  let shortcut = {
    path: '/cms',
    name: eCmsRouteNames.Cms,
    layout: eLayoutType.application,
    parentName: eThemeSharedRouteNames.Administration,
    iconClass: 'fa fa-folder-open',
    order: 6,
    //requiredPolicy: eCmsPolicyNames.DirectoryDescriptor,
  };
  return () => {
    routes.add([
      shortcut
    ]);
  };
}
