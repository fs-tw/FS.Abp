import { CoreModule } from '@abp/ng.core';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';

class ThemeProxyModule {
}
ThemeProxyModule.ɵfac = function ThemeProxyModule_Factory(t) { return new (t || ThemeProxyModule)(); };
ThemeProxyModule.ɵmod = ɵɵdefineNgModule({ type: ThemeProxyModule });
ThemeProxyModule.ɵinj = ɵɵdefineInjector({ imports: [[CoreModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ThemeProxyModule, { imports: [CoreModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ThemeProxyModule, [{
        type: NgModule,
        args: [{
                imports: [CoreModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ThemeProxyModule };
//# sourceMappingURL=fs-tw-theme-proxy.js.map
