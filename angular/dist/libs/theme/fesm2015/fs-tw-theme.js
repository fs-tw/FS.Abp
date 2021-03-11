import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ThemeModule {
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = ɵɵdefineNgModule({ type: ThemeModule });
ThemeModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeModule };
//# sourceMappingURL=fs-tw-theme.js.map
