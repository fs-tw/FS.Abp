import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eChatPolicyNames } from '../enums/policy-names';
import { eChatRouteNames } from '../enums/route-names';

export const CHAT_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/chat',
        name: eChatRouteNames.Chat,
        requiredPolicy: eChatPolicyNames.Messaging,
        layout: eLayoutType.application,
        iconClass: 'fas fa-envelope',
        invisible: true,
      },
    ]);
  };
}
