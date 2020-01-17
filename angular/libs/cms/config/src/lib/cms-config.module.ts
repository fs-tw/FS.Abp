import { noop } from '@abp/ng.core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CmsConfigService } from './services/cms-config.service';

@NgModule({
  providers: [{ provide: APP_INITIALIZER, deps: [CmsConfigService], useFactory: noop, multi: true }],
})
export class CmsConfigModule {}
