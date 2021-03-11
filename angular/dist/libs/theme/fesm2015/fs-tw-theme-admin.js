import { CoreModule } from '@abp/ng.core';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';

class ThemeAdminModule {
}
ThemeAdminModule.ɵfac = function ThemeAdminModule_Factory(t) { return new (t || ThemeAdminModule)(); };
ThemeAdminModule.ɵmod = ɵɵdefineNgModule({ type: ThemeAdminModule });
ThemeAdminModule.ɵinj = ɵɵdefineInjector({ imports: [[CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeAdminModule, { imports: [CoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeAdminModule, [{
        type: NgModule,
        args: [{
                imports: [CoreModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeAdminModule };
//# sourceMappingURL=fs-tw-theme-admin.js.map
