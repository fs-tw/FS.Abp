import { SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { EmailingSettingsComponent } from '../components/emailing-settings/emailing-settings.component';
import { eEmailingSettingTabNames } from '../enums/setting-tab-names';

export const EMAILING_SETTING_TAB_PROVIDERS = [
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
        name: eEmailingSettingTabNames.Emailing,
        order: 3,
        requiredPolicy: 'AbpEmailing.SettingManagement',
        component: EmailingSettingsComponent,
      },
    ]);
  };
}
