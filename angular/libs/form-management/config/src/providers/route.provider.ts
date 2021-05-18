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
    path: '/form-management',
    name: eFormmanagementRouteNames.Basic,
    parentName: eThemeSharedRouteNames.Administration,
    layout: eLayoutType.application,
    iconClass: 'fa fa-folder-open',
    order: 0,
    navConfig: {
      name: eFormmanagementRouteNames.Basic,
      title: eFormmanagementRouteNames.Basic,
      doc: eFormmanagementRouteNames.Basic
    }
    //requiredPolicy: eThemePolicyNames.DirectoryDescriptor,
  },
  {
    parentName: eFormmanagementRouteNames.Basic,
    path: '/form-management',
    name: eFormmanagementRouteNames.FormManagement,
    order: 1,
  },
  {
    path: '/form-management/forms',
    name: eFormmanagementRouteNames.Forms,
    parentName: eFormmanagementRouteNames.FormManagement,
    layout: eLayoutType.application,
    order: 2,
    //requiredPolicy: eThemePolicyNames.DirectoryDescriptor,        
  },
  {
    path: '/form-management/forms/:id',
    name: eFormmanagementRouteNames.View,
    parentName: eFormmanagementRouteNames.Forms,
    order: 2.1,
    navConfig: {
      name: eFormmanagementRouteNames.Forms,
      title: eFormmanagementRouteNames.Forms,
      doc: eFormmanagementRouteNames.Forms
    }
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
