import { NgModule } from '@angular/core';
import { THEME_ROUTE_PROVIDERS } from './providers/route.provider';
import * as i0 from "@angular/core";
export class ThemeConfigModule {
    static forRoot() {
        return {
            ngModule: ThemeConfigModule,
            providers: [THEME_ROUTE_PROVIDERS],
        };
    }
}
ThemeConfigModule.ɵfac = function ThemeConfigModule_Factory(t) { return new (t || ThemeConfigModule)(); };
ThemeConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeConfigModule });
ThemeConfigModule.ɵinj = i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeConfigModule, [{
        type: NgModule
    }], null, null); })();
//# sourceMappingURL=theme-config.module.js.map