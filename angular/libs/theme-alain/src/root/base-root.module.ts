import { NgModule } from '@angular/core';
import { GlobalConfigModule } from './global-config.module';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from './components/validation-error-component/validation-error.component';
import { CoreModule } from '@abp/ng.core';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: [
    CoreModule,
    NzMessageModule,
    GlobalConfigModule.forRoot(),
    NgxValidateCoreModule
  ],
  providers: [
    STYLES_PROVIDERS
  ],
  declarations:[
    ValidationErrorComponent
  ],
  exports:[
    ValidationErrorComponent
  ]
})
export class BaseRootModule { }

