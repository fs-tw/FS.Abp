import { noop } from '@abp/ng.core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CmsConfigService } from './services/cms-config.service';
import { InitConfigService } from '@fs/theme.core';

@NgModule({
  providers: [{ provide: APP_INITIALIZER, deps: [CmsConfigService], useFactory: InitConfigService, multi: true }],
})
export class CmsConfigModule {}
