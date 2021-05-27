import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { eRouteNames } from '../enums/route-names';
export const ROUTE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureRoutes,
    deps: [RoutesService],
    multi: true,
  },
];

export const VocabulariesRoutes = [
  {
    path: '/Vocabularies',
    name: eRouteNames.Vocabularies,
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
      ...VocabulariesRoutes
    ]);
  };
}
