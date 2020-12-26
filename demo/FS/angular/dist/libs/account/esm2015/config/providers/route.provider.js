import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const ACCOUNT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
export function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                layout: "account" /* account */,
                path: '/account',
                name: "AbpAccount::Menu:Account" /* Account */,
                invisible: true,
                order: 1,
            },
            {
                path: '/account/login',
                name: "AbpAccount::Login" /* Login */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 1,
            },
            {
                path: '/account/register',
                name: "AbpAccount::Register" /* Register */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 2,
            },
            {
                layout: "application" /* application */,
                path: '/account/manage-profile',
                name: "AbpAccount::ManageYourProfile" /* ManageProfile */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 3,
            },
        ]);
    };
}
//# sourceMappingURL=route.provider.js.map