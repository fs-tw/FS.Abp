import { SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { EmailingSettingsComponent } from '../components/emailing-settings/emailing-settings.component';
export const EMAILING_SETTING_TAB_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureSettingTabs,
        deps: [SettingTabsService],
        multi: true,
    },
];
export function configureSettingTabs(settingtabs) {
    return () => {
        settingtabs.add([
            {
                name: "AbpEmailing::Menu:Emailing" /* Emailing */,
                order: 3,
                requiredPolicy: 'AbpEmailing.SettingManagement',
                component: EmailingSettingsComponent,
            },
        ]);
    };
}
//# sourceMappingURL=setting-tab.provider.js.map