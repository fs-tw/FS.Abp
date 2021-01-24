import { SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { SettingsComponent } from '../components/settings/settings.component';
import { eTheProjectThemeSettingTabNames } from '../enums/setting-tab-names';

export const THE_PROJECT_THEME_SETTING_TAB_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureSettingTabs,
    deps: [SettingTabsService],
    multi: true,
  },
];

export function configureSettingTabs(settingtabs: SettingTabsService) {
  return () => {
    settingtabs.add([
      {
        name: eTheProjectThemeSettingTabNames.TheProjectThemeManagement,
        order: 2,
        component: SettingsComponent,
        //requiredPolicy: 'LeptonThemeManagement.Settings',
      },
    ]);
  };
}
