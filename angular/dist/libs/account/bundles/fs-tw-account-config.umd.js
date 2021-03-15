(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/account/config', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].account = global['fs-tw'].account || {}, global['fs-tw'].account.config = {}), global.ng.core, global.ng_core));
}(this, (function (exports, core, ng_core) { 'use strict';

    var ACCOUNT_ROUTE_PROVIDERS = [
        { provide: core.APP_INITIALIZER, useFactory: configureRoutes, deps: [ng_core.RoutesService], multi: true },
    ];
    function configureRoutes(routes) {
        return function () {
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

    var AccountConfigModule = /** @class */ (function () {
        function AccountConfigModule() {
        }
        AccountConfigModule.forRoot = function () {
            return {
                ngModule: AccountConfigModule,
                providers: [ACCOUNT_ROUTE_PROVIDERS],
            };
        };
        return AccountConfigModule;
    }());
    AccountConfigModule.decorators = [
        { type: core.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ACCOUNT_ROUTE_PROVIDERS = ACCOUNT_ROUTE_PROVIDERS;
    exports.AccountConfigModule = AccountConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = ACCOUNT_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-account-config.umd.js.map
