import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eFileManagementRouteNames } from '../enums/route-names';
import { eFileManagementPolicyNames } from '../enums/policy-names';

export const FILE_MANAGEMENT_ROUTE_PROVIDERS = [
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
        path: '/file-management',
        name: eFileManagementRouteNames.FileManagement,
        layout: eLayoutType.application,
        parentName: eThemeSharedRouteNames.Administration,
        order: 6,
        requiredPolicy: eFileManagementPolicyNames.DirectoryDescriptor,
      },
    ]);
  };
}
