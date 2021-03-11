import { NgModule } from '@angular/core';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { CmsAdminRoutingModule } from './cms-admin-routing.module';
import { SharedModule } from './shared/shared.module';
import * as i0 from "@angular/core";
export class CmsAdminModule {
    static forChild() {
        return {
            ngModule: CmsAdminModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(CmsAdminModule.forChild());
    }
}
CmsAdminModule.ɵfac = function CmsAdminModule_Factory(t) { return new (t || CmsAdminModule)(); };
CmsAdminModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsAdminModule });
CmsAdminModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            SharedModule,
            CoreModule,
            CmsAdminRoutingModule,
        ], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsAdminModule, { imports: [SharedModule,
        CoreModule,
        CmsAdminRoutingModule], exports: [SharedModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsAdminModule, [{
        type: NgModule,
        args: [{
                imports: [
                    SharedModule,
                    CoreModule,
                    CmsAdminRoutingModule,
                ],
                exports: [
                    SharedModule,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=cms-admin.module.js.map