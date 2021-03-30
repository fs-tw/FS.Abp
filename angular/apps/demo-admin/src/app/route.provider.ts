import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eFormmanagementRouteNames } from '@fs-tw/form-management/config';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.patch(eFormmanagementRouteNames.Form_management, { iconClass: 'fa fa-file' });
    routes.add([
      {
        parentName: eThemeSharedRouteNames.Administration,
        layout: eLayoutType.application,
        path: '/',
        name: 'Cms::FS.Cms.Home',
        iconClass: 'fas fa-home',
        order: -99,
      }
    
    ]);
  };
}
