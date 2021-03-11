import { NgModule } from '@angular/core';
import * as i0 from "@angular/core";
// import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';
const COMPONENT = [];
export class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
        // NgAlainBasicModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [...COMPONENT],
                imports: [
                // NgAlainBasicModule,
                ],
                exports: [
                    // NgAlainBasicModule,
                    ...COMPONENT
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=shared.module.js.map