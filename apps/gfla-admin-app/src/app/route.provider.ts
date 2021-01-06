import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eIdentityRouteNames } from '@abp/ng.identity/config';
import {Layout } from '@fs-tw/theme-alain-ms/layout'

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        parentName:eThemeSharedRouteNames.Administration,
        layout: eLayoutType.application,
        path: '/',
        name: '首頁',
        iconClass: 'fas fa-home',
        order: -99,
      } as any ,
      {
        parentName:eThemeSharedRouteNames.Administration,
        layout: eLayoutType.application,
        path: '/dashboard',
        name: '::Menu:Dashboard',
        iconClass: 'fas fa-chart-line',
        order: 999,
        requiredPolicy: 'IIC.Dashboard.Host  || IIC.Dashboard.Tenant',
        sidebarConfig:{
          hasAllNav:true
        }
      },
    ]);
  };
}
