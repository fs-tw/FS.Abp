import { CoreModule } from '@abp/ng.core';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';

class CmsPublicModule {
}
CmsPublicModule.ɵfac = function CmsPublicModule_Factory(t) { return new (t || CmsPublicModule)(); };
CmsPublicModule.ɵmod = ɵɵdefineNgModule({ type: CmsPublicModule });
CmsPublicModule.ɵinj = ɵɵdefineInjector({ imports: [[CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CmsPublicModule, { imports: [CoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmsPublicModule, [{
        type: NgModule,
        args: [{
                imports: [CoreModule],
            }]
    }], null, null); })();

// export * from './account-settings.module';
// export * from './components';
// export * from './models';
// export * from './services';
// export * from './abstracts';
// export * from './enums';

/**
 * Generated bundle index. Do not edit.
 */

export { CmsPublicModule };
//# sourceMappingURL=fs-tw-cms-public.js.map
