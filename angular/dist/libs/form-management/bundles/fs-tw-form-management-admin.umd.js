(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/form-management/admin', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['form-management'] = global['fs-tw']['form-management'] || {}, global['fs-tw']['form-management'].admin = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, i0) { 'use strict';

    var FormmanagementAdminModule = /** @class */ (function () {
        function FormmanagementAdminModule() {
        }
        return FormmanagementAdminModule;
    }());
    FormmanagementAdminModule.ɵfac = function FormmanagementAdminModule_Factory(t) { return new (t || FormmanagementAdminModule)(); };
    FormmanagementAdminModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormmanagementAdminModule });
    FormmanagementAdminModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[ng_core.CoreModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormmanagementAdminModule, { imports: [ng_core.CoreModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormmanagementAdminModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_core.CoreModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormmanagementAdminModule = FormmanagementAdminModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-form-management-admin.umd.js.map
