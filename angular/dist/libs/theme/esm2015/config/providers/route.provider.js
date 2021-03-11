import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
// import { eThemesPolicyNames } from '../enums/policy-names';
export const THEME_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
export function configureRoutes(routes) {
    let shortcut = {
        path: '/theme',
        name: "Theme::Menu:Theme" /* Theme */,
        layout: "application" /* application */,
        parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
        iconClass: 'fa fa-folder-open',
        order: 6,
    };
    return () => {
        routes.add([
            shortcut
        ]);
    };
}
//# sourceMappingURL=route.provider.js.map