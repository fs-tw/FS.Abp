import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EmailingSettingsComponent } from './components/emailing-settings/emailing-settings.component';
import { EMAILING_ROUTE_PROVIDERS } from './providers/route.provider';
import { EMAILING_SETTING_TAB_PROVIDERS } from './providers/setting-tab.provider';

@NgModule({
  imports: [
    CoreModule,
    ThemeSharedModule
  ],
  declarations: [
    EmailingSettingsComponent
  ]
}
)
export class EmailingConfigModule {
  static forRoot(): ModuleWithProviders<EmailingConfigModule> {
    return {
      ngModule: EmailingConfigModule,
      providers: [
        //EMAILING_ROUTE_PROVIDERS,
        EMAILING_SETTING_TAB_PROVIDERS
      ]
    };
  }
}
