(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme/admin', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].theme = global['fs-tw'].theme || {}, global['fs-tw'].theme.admin = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, core) { 'use strict';

    var ThemeAdminModule = /** @class */ (function () {
        function ThemeAdminModule() {
        }
        return ThemeAdminModule;
    }());
    ThemeAdminModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [ng_core.CoreModule],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeAdminModule = ThemeAdminModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-admin.umd.js.map
