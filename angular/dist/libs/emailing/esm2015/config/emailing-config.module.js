import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { EmailingSettingsComponent } from './components/emailing-settings/emailing-settings.component';
import { EMAILING_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';
import * as i0 from "@angular/core";
export class EmailingConfigModule {
    static forRoot() {
        return {
            ngModule: EmailingConfigModule,
            providers: [
                //EMAILING_ROUTE_PROVIDERS,
                EMAILING_SETTING_TAB_PROVIDERS
            ]
        };
    }
}
EmailingConfigModule.ɵfac = function EmailingConfigModule_Factory(t) { return new (t || EmailingConfigModule)(); };
EmailingConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: EmailingConfigModule });
EmailingConfigModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CoreModule,
            ThemeSharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmailingConfigModule, { declarations: [EmailingSettingsComponent], imports: [CoreModule,
        ThemeSharedModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailingConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CoreModule,
                    ThemeSharedModule
                ],
                declarations: [
                    EmailingSettingsComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=emailing-config.module.js.map