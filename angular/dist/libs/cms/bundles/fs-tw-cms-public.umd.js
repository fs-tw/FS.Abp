(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/public', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.public = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, i0) { 'use strict';

    var CmsPublicModule = /** @class */ (function () {
        function CmsPublicModule() {
        }
        return CmsPublicModule;
    }());
    CmsPublicModule.ɵfac = function CmsPublicModule_Factory(t) { return new (t || CmsPublicModule)(); };
    CmsPublicModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmsPublicModule });
    CmsPublicModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[ng_core.CoreModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmsPublicModule, { imports: [ng_core.CoreModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmsPublicModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_core.CoreModule],
                    }]
            }], null, null);
    })();

    // export * from './account-settings.module';
    // export * from './components';
    // export * from './models';
    // export * from './services';
    // export * from './abstracts';
    // export * from './enums';

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CmsPublicModule = CmsPublicModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-public.umd.js.map
