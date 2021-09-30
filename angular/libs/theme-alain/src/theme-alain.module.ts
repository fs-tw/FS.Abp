import { CoreModule } from '@abp/ng.core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutModule } from '@fs-tw/theme-alain/layout';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { RootModule } from './root/root.module';
import { NG_ALAIN_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import {
  VALIDATION_ERROR_TEMPLATE,
  VALIDATION_INVALID_CLASSES,
  VALIDATION_TARGET_SELECTOR
} from '@ngx-validate/core';
import { ValidationErrorComponent } from './root/components/validation-error-component/validation-error.component';

@NgModule({
  imports: [
    CoreModule, 
    ThemeSharedModule,
    LayoutModule
    
  ],
  exports:[
  ],
  declarations: [ApplicationLayoutComponent,AccountLayoutComponent,EmptyLayoutComponent]
})
export class ThemeAlainModule {
  static forRoot(): ModuleWithProviders<ThemeAlainModule> {
    return {
      ngModule: RootModule,
      providers: [
         NG_ALAIN_THEME_STYLES_PROVIDERS,
        // NG_ALAIN_MS_THEME_NAV_ITEM_PROVIDERS,
        {
          provide: VALIDATION_ERROR_TEMPLATE,
          useValue: ValidationErrorComponent,
        },
        {
          provide: VALIDATION_TARGET_SELECTOR,
          useValue: '.form-group',
        },
        {
          provide: VALIDATION_INVALID_CLASSES,
          useValue: 'is-invalid',
        },
      ]
    };
  }
}