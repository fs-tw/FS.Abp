import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { RootModule } from './root/root.module';
import { NGALAINMS_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { LayoutModule } from '@fs-tw/theme-alain-ms/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  imports: [
    CoreModule,
    LayoutModule,
    NzSpinModule
  ],
  declarations: [ApplicationLayoutComponent,AccountLayoutComponent],
})
export class ThemeAlainMsModule {
  static forRoot(): ModuleWithProviders<ThemeAlainMsModule> {
    return {
      ngModule: RootModule,
      providers: [
        NGALAINMS_THEME_STYLES_PROVIDERS,
        // NGALAIN_THEME_NAV_ITEM_PROVIDERS
      ]
    };
  }
}
