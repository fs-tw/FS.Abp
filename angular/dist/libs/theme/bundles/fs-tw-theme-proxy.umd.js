(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].theme = global['fs-tw'].theme || {}, global['fs-tw'].theme.proxy = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, core) { 'use strict';

    var ThemeProxyModule = /** @class */ (function () {
        function ThemeProxyModule() {
        }
        return ThemeProxyModule;
    }());
    ThemeProxyModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [ng_core.CoreModule],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeProxyModule = ThemeProxyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-proxy.umd.js.map
