import { NgModule } from '@angular/core';
// import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions';
import { GetFileByIdPipe } from './pipe/get-file.pipe';
import * as i0 from "@angular/core";
const COMPONENT = [GetFileByIdPipe];
export class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            // NgAlainBasicModule,
            ThemeAlainMsSharedModule,
            UiExtensionsModule
        ], ThemeAlainMsSharedModule,
        UiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [GetFileByIdPipe], imports: [
        // NgAlainBasicModule,
        ThemeAlainMsSharedModule,
        UiExtensionsModule], exports: [GetFileByIdPipe, ThemeAlainMsSharedModule,
        UiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [...COMPONENT],
                imports: [
                    // NgAlainBasicModule,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ],
                exports: [
                    // NgAlainBasicModule,
                    ...COMPONENT,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=shared.module.js.map