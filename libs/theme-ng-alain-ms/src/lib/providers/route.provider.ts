import { APP_INITIALIZER } from '@angular/core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared'
import { RoutesService, eLayoutType } from '@abp/ng.core';
import { eThemeNgAlainMsComponents } from '../enums/components';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, multi: true, deps: [RoutesService] },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.patch(eThemeSharedRouteNames.Administration, {
      path: 'identity/roles',
      profile: {
        title: 'Administrator',
        doc: 'Title',
        //nav: { routeName: eThemeSharedRouteNames.Administration }
      }
    }as any);
    //routes.patch('AbpAccount::ManageYourProfile',{ layout: eLayoutType.application});
  };
}
