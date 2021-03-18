(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/form-management/admin', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['form-management'] = global['fs-tw']['form-management'] || {}, global['fs-tw']['form-management'].admin = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, core) { 'use strict';

    var FormmanagementAdminModule = /** @class */ (function () {
        function FormmanagementAdminModule() {
        }
        return FormmanagementAdminModule;
    }());
    FormmanagementAdminModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [ng_core.CoreModule],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormmanagementAdminModule = FormmanagementAdminModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-form-management-admin.umd.js.map
