import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreModule } from '@fs-tw/theme-the-project/core';
import { TheProjectSharedModule } from '@fs-tw/theme-the-project/shared';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { HeaderComponent } from './components/header/header.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxsModule } from '@ngxs/store';
import { INITIAL_PROVIDERS } from './providers/initial.provider';
@NgModule({
  declarations: [ApplicationLayoutComponent, HeaderComponent, EmptyLayoutComponent, FooterComponent],
  imports: [
    CoreModule,
    TheProjectSharedModule,
    ThemeBasicModule,
    
  ],
  providers: [    
  ],
  exports: [ThemeBasicModule, ApplicationLayoutComponent]
})
export class TheProjectBasicModule {
  static forRoot(): ModuleWithProviders<TheProjectBasicModule> {
    return {
      ngModule: TheProjectBasicModule,
      providers: [BASIC_THEME_STYLES_PROVIDERS,INITIAL_PROVIDERS],
    };
  }

}
