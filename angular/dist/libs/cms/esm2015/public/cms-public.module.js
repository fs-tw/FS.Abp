import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class CmsPublicModule {
}
CmsPublicModule.ɵfac = function CmsPublicModule_Factory(t) { return new (t || CmsPublicModule)(); };
CmsPublicModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsPublicModule });
CmsPublicModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsPublicModule, { imports: [CoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsPublicModule, [{
        type: NgModule,
        args: [{
                imports: [CoreModule],
            }]
    }], null, null); })();
//# sourceMappingURL=cms-public.module.js.map