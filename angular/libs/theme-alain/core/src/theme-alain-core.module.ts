import { NgModule } from '@angular/core';
import { GlobalConfigModule } from './global-config.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from './components/validation-error-component/validation-error.component';
import { CoreModule as  AbpCoreModule} from '@abp/ng.core';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import {
  VALIDATION_ERROR_TEMPLATE,
  VALIDATION_INVALID_CLASSES,
  VALIDATION_TARGET_SELECTOR
} from '@ngx-validate/core';

@NgModule({
  imports: [
    AbpCoreModule,
    NzMessageModule,
    GlobalConfigModule.forRoot(),
    NgxValidateCoreModule
  ],
  providers: [
    STYLES_PROVIDERS,
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
    }
  ],
  declarations:[
    ValidationErrorComponent
  ],
  exports:[
    ValidationErrorComponent,
   
  ]
})
export class ThemeAlainCoreModule { }

