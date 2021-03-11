(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/emailing', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].emailing = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var EmailingModule = /** @class */ (function () {
        function EmailingModule() {
        }
        return EmailingModule;
    }());
    EmailingModule.ɵfac = function EmailingModule_Factory(t) { return new (t || EmailingModule)(); };
    EmailingModule.ɵmod = i0.ɵɵdefineNgModule({ type: EmailingModule });
    EmailingModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmailingModule, { imports: [common.CommonModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EmailingModule = EmailingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-emailing.umd.js.map
