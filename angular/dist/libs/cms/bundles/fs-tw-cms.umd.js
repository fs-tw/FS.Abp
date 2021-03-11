(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var CmsModule = /** @class */ (function () {
        function CmsModule() {
        }
        return CmsModule;
    }());
    CmsModule.ɵfac = function CmsModule_Factory(t) { return new (t || CmsModule)(); };
    CmsModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsModule });
    CmsModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsModule, { imports: [common.CommonModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CmsModule = CmsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms.umd.js.map
