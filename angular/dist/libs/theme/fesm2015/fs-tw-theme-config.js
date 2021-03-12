import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵsetClassMetadata, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

// import { eThemesPolicyNames } from '../enums/policy-names';
const THEME_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routes) {
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

class ThemeConfigModule {
    static forRoot() {
        return {
            ngModule: ThemeConfigModule,
            providers: [THEME_ROUTE_PROVIDERS],
        };
    }
}
ThemeConfigModule.ɵfac = function ThemeConfigModule_Factory(t) { return new (t || ThemeConfigModule)(); };
ThemeConfigModule.ɵmod = ɵɵdefineNgModule({ type: ThemeConfigModule });
ThemeConfigModule.ɵinj = ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeConfigModule, [{
        type: NgModule
    }], null, null); })();

// export * from './services';

/**
 * Generated bundle index. Do not edit.
 */

export { THEME_ROUTE_PROVIDERS, ThemeConfigModule, configureRoutes };
//# sourceMappingURL=fs-tw-theme-config.js.map
