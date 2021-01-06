(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/crm/core', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].crm = global['fs-tw'].crm || {}, global['fs-tw'].crm.core = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var CrmCoreModule = /** @class */ (function () {
        function CrmCoreModule() {
        }
        return CrmCoreModule;
    }());
    CrmCoreModule.decorators = [
        { type: core.NgModule, args: [{},] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CrmCoreModule = CrmCoreModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-crm-core.umd.js.map
