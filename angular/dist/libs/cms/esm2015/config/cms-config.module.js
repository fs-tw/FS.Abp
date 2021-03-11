import { NgModule } from '@angular/core';
import { CMS_ROUTE_PROVIDERS } from './providers/route.provider';
import * as i0 from "@angular/core";
export class CmsConfigModule {
    static forRoot() {
        return {
            ngModule: CmsConfigModule,
            providers: [CMS_ROUTE_PROVIDERS],
        };
    }
}
CmsConfigModule.ɵfac = function CmsConfigModule_Factory(t) { return new (t || CmsConfigModule)(); };
CmsConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsConfigModule });
CmsConfigModule.ɵinj = i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsConfigModule, [{
        type: NgModule
    }], null, null); })();
//# sourceMappingURL=cms-config.module.js.map