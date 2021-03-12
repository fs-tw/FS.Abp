(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].theme = global['fs-tw'].theme || {}, global['fs-tw'].theme.proxy = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, i0) { 'use strict';

    var ThemeProxyModule = /** @class */ (function () {
        function ThemeProxyModule() {
        }
        return ThemeProxyModule;
    }());
    ThemeProxyModule.ɵfac = function ThemeProxyModule_Factory(t) { return new (t || ThemeProxyModule)(); };
    ThemeProxyModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeProxyModule });
    ThemeProxyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[ng_core.CoreModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeProxyModule, { imports: [ng_core.CoreModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeProxyModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_core.CoreModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeProxyModule = ThemeProxyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-proxy.umd.js.map
