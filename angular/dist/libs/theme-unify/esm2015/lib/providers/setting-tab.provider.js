import { SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { SettingsComponent } from '../components/settings/settings.component';
export const UNIFY_THEME_SETTING_TAB_PROVIDERS = [
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
                name: "UnifyThemeManagement::Menu:UnifyThemeSettings" /* UnifyThemeManagement */,
                order: 2,
                component: SettingsComponent,
            },
        ]);
    };
}
//# sourceMappingURL=setting-tab.provider.js.map