import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class CmsModule {
}
CmsModule.ɵfac = function CmsModule_Factory(t) { return new (t || CmsModule)(); };
CmsModule.ɵmod = ɵɵdefineNgModule({ type: CmsModule });
CmsModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CmsModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CmsModule };
//# sourceMappingURL=fs-tw-cms.js.map
