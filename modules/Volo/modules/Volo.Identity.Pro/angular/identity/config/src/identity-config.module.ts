import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IdentitySettingsComponent } from './components/identity-settings.component';
import { IDENTITY_ROUTE_PROVIDERS } from './providers/route.provider';
import { IDENTITY_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';

@NgModule({
  exports: [IdentitySettingsComponent],
  entryComponents: [IdentitySettingsComponent],
  declarations: [IdentitySettingsComponent],
  imports: [CoreModule, ThemeSharedModule],
})
export class IdentityConfigModule {
  static forRoot(): ModuleWithProviders<IdentityConfigModule> {
    return {
      ngModule: IdentityConfigModule,
      providers: [IDENTITY_ROUTE_PROVIDERS, IDENTITY_SETTING_TAB_PROVIDERS],
    };
  }
}
