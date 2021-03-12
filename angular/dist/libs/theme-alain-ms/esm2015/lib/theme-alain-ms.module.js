import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { RootModule } from './root/root.module';
import { NG_ALAIN_MS_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { LayoutModule } from '@fs-tw/theme-alain-ms/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS } from './providers/nav-item.provider';
import * as i0 from "@angular/core";
export class ThemeAlainMsModule {
    static forRoot() {
        return {
            ngModule: RootModule,
            providers: [
                NG_ALAIN_MS_THEME_STYLES_PROVIDERS,
                NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS
            ]
        };
    }
}
ThemeAlainMsModule.ɵfac = function ThemeAlainMsModule_Factory(t) { return new (t || ThemeAlainMsModule)(); };
ThemeAlainMsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeAlainMsModule });
ThemeAlainMsModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CoreModule,
            LayoutModule,
            NzSpinModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeAlainMsModule, { declarations: [ApplicationLayoutComponent, AccountLayoutComponent], imports: [CoreModule,
        LayoutModule,
        NzSpinModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeAlainMsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CoreModule,
                    LayoutModule,
                    NzSpinModule
                ],
                declarations: [ApplicationLayoutComponent, AccountLayoutComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=theme-alain-ms.module.js.map