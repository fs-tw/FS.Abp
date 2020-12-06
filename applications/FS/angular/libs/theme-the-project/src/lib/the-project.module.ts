import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { TheProjectSharedModule } from '@fs/theme.the-project/shared';
import { THE_PROJECT_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { THE_PROJECT_THEME_INITIAL_PROVIDERS } from './providers/initial.provider';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { BannerComponent } from './components/banner/banner.component';

export const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
@NgModule({
  declarations: [
    ...LAYOUTS,
    HeaderComponent,
    FooterComponent,
    BannerComponent

  ],
  exports: [
    ...LAYOUTS,
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [
    ...LAYOUTS
  ],

  imports: [
    CoreModule,
    ThemeSharedModule
  ]
})
export class TheProjectModule {
  static forRoot(): ModuleWithProviders<TheProjectModule> {
    return {
      ngModule: RootTheProjectModule,
      providers: [
        THE_PROJECT_THEME_STYLES_PROVIDERS,
        THE_PROJECT_THEME_INITIAL_PROVIDERS
      ],
    };
  }
}

@NgModule({
  imports: [
    TheProjectSharedModule.forRoot()
  ],
})
export class RootTheProjectModule { }