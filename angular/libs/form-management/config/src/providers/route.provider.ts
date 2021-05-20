import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eFormmanagementRouteNames } from '../enums/route-names';
// import { eThemesPolicyNames } from '../enums/policy-names';

export const FORM_MANAGEMENT_ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export const FormRoutes = [
  {
    path: '/form-management/forms',
    name: eFormmanagementRouteNames.Forms,
    parentName: eThemeSharedRouteNames.Administration,
    layout: eLayoutType.application,
    iconClass: 'fa fa-folder-open',
    order: 0,
    //requiredPolicy: eThemePolicyNames.DirectoryDescriptor,
  }
];

export function configureRoutes(routes: RoutesService) {


  return () => {
    routes.add([
      ...FormRoutes
    ]);
  };
}
