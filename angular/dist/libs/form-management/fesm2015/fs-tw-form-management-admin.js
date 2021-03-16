import { CoreModule } from '@abp/ng.core';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';

class FormmanagementAdminModule {
}
FormmanagementAdminModule.ɵfac = function FormmanagementAdminModule_Factory(t) { return new (t || FormmanagementAdminModule)(); };
FormmanagementAdminModule.ɵmod = ɵɵdefineNgModule({ type: FormmanagementAdminModule });
FormmanagementAdminModule.ɵinj = ɵɵdefineInjector({ imports: [[CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FormmanagementAdminModule, { imports: [CoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FormmanagementAdminModule, [{
        type: NgModule,
        args: [{
                imports: [CoreModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FormmanagementAdminModule };
//# sourceMappingURL=fs-tw-form-management-admin.js.map
