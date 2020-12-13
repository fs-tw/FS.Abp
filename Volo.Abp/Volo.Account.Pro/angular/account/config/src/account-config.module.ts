import { CoreModule, noop } from '@abp/ng.core';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { AccountSettingsModule } from '@volo/abp.ng.account/admin';
import { ProfilePictureHandler } from './handlers/profile-picture.handler';
import { ACCOUNT_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';

@NgModule({
  imports: [CoreModule, AccountSettingsModule],
  exports: [AccountSettingsModule],
  declarations: [],
})
export class AccountConfigModule {
  static forRoot(): ModuleWithProviders<AccountConfigModule> {
    return {
      ngModule: AccountConfigModule,
      providers: [
        ACCOUNT_SETTING_TAB_PROVIDERS,
        {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [ProfilePictureHandler],
          useFactory: noop,
        },
      ],
    };
  }
}
