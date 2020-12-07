import { SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { IdentitySettingsComponent } from '../components/identity-settings.component';
import { eIdentitySettingTabNames } from '../enums/setting-tab-names';

export const IDENTITY_SETTING_TAB_PROVIDERS = [
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
        name: eIdentitySettingTabNames.IdentityManagement,
        order: 1,
        requiredPolicy: 'AbpIdentity.SettingManagement',
        component: IdentitySettingsComponent,
      },
    ]);
  };
}
