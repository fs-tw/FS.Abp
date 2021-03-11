import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { EmailingSettingsComponent } from './components/emailing-settings/emailing-settings.component';
import { EMAILING_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';
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
EmailingConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CoreModule,
                    ThemeSharedModule
                ],
                declarations: [
                    EmailingSettingsComponent
                ]
            },] }
];
//# sourceMappingURL=emailing-config.module.js.map