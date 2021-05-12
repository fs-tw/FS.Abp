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

export function configureRoutes(routes: RoutesService) {


  return () => {
    routes.add([
      {
        path: '/form-management',
        name: eFormmanagementRouteNames.FormManagement,
        parentName: eThemeSharedRouteNames.Administration,
        layout: eLayoutType.application,
        iconClass: 'fa fa-folder-open',
        order: -1
        //requiredPolicy: eThemePolicyNames.DirectoryDescriptor,
      },
      {
        path: '/form-management/forms',
        name: eFormmanagementRouteNames.Forms,
        parentName: eFormmanagementRouteNames.FormManagement,
        iconClass: 'fa fa-folder-open',
        order: 1
        //requiredPolicy: eThemePolicyNames.DirectoryDescriptor,        
      }
    ]);
  };
}
