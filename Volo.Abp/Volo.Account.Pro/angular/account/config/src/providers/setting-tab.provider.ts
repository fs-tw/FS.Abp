import { SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { AccountSettingsComponent } from '@volo/abp.ng.account/admin';
import { eAccountSettingTabNames } from '../enums/setting-tab-names';

export const ACCOUNT_SETTING_TAB_PROVIDERS = [
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
        name: eAccountSettingTabNames.Account,
        order: 3,
        requiredPolicy: 'AbpAccount.SettingManagement',
        component: AccountSettingsComponent,
      },
    ]);
  };
}
