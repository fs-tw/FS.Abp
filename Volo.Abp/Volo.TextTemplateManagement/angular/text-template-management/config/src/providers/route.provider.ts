import { eLayoutType, RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { eTextTemplateManagementPolicyNames } from '../enums/policy-names';
import { eTextTemplateManagementRouteNames } from '../enums/route-names';

export const TEXT_TEMPLATE_MANAGEMENT_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        name: eTextTemplateManagementRouteNames.TextTemplates,
        path: '/text-template-management/text-templates',
        parentName: eThemeSharedRouteNames.Administration,
        order: 5,
        layout: eLayoutType.application,
        requiredPolicy: eTextTemplateManagementPolicyNames.TextTemplates,
        iconClass: 'fas fa-envelope-open-text',
      },
    ]);
  };
}
