import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class EmailingModule {
}
EmailingModule.ɵfac = function EmailingModule_Factory(t) { return new (t || EmailingModule)(); };
EmailingModule.ɵmod = ɵɵdefineNgModule({ type: EmailingModule });
EmailingModule.ɵinj = ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EmailingModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EmailingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { EmailingModule };
//# sourceMappingURL=fs-tw-emailing.js.map
