import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵsetClassMetadata, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

const ACCOUNT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
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

class AccountConfigModule {
    static forRoot() {
        return {
            ngModule: AccountConfigModule,
            providers: [ACCOUNT_ROUTE_PROVIDERS],
        };
    }
}
AccountConfigModule.ɵfac = function AccountConfigModule_Factory(t) { return new (t || AccountConfigModule)(); };
AccountConfigModule.ɵmod = ɵɵdefineNgModule({ type: AccountConfigModule });
AccountConfigModule.ɵinj = ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AccountConfigModule, [{
        type: NgModule
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ACCOUNT_ROUTE_PROVIDERS, AccountConfigModule, configureRoutes };
//# sourceMappingURL=fs-tw-account-config.js.map
