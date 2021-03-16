(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/form-management', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['form-management'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var ThemeModule = /** @class */ (function () {
        function ThemeModule() {
        }
        return ThemeModule;
    }());
    ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
    ThemeModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeModule });
    ThemeModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeModule, { imports: [common.CommonModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeModule = ThemeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-form-management.umd.js.map
