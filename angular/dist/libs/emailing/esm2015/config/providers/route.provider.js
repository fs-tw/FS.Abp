import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const EMAILING_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
export function configureRoutes(routesService) {
    return () => {
        routesService.add([
            {
                path: '/emailing',
                name: "Emailing" /* Emailing */,
                iconClass: 'fas fa-book',
                layout: "application" /* application */,
                order: 3,
            },
        ]);
    };
}
//# sourceMappingURL=route.provider.js.map