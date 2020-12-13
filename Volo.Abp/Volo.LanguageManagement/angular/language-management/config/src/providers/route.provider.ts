import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eLanguageManagementPolicyNames } from '../enums/policy-names';
import { eLanguageManagementRouteNames } from '../enums/route-names';

export const LANGUAGE_MANAGEMENT_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        name: eLanguageManagementRouteNames.LanguageManagement,
        path: '/language-management',
        layout: eLayoutType.application,
        parentName: eThemeSharedRouteNames.Administration,
        iconClass: 'fa fa-globe',
        order: 4,
        requiredPolicy: eLanguageManagementPolicyNames.LanguageManagement,
      },
      {
        path: '/language-management/languages',
        name: eLanguageManagementRouteNames.Languages,
        parentName: eLanguageManagementRouteNames.LanguageManagement,
        order: 1,
        requiredPolicy: eLanguageManagementPolicyNames.Languages,
      },
      {
        path: '/language-management/texts',
        name: eLanguageManagementRouteNames.LanguageTexts,
        parentName: eLanguageManagementRouteNames.LanguageManagement,
        order: 2,
        requiredPolicy: eLanguageManagementPolicyNames.LanguageTexts,
      },
    ]);
  };
}
