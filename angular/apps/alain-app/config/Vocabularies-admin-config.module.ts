import { CoreModule, noop } from '@abp/ng.core';
import { ModuleWithProviders, NgModule, APP_INITIALIZER } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule({
  imports: [CoreModule]
})
export class VocabulariesAdminConfigModule {
  static forRoot(): ModuleWithProviders<VocabulariesAdminConfigModule> {
    return {
      ngModule: VocabulariesAdminConfigModule,
      providers: [
        ROUTE_PROVIDERS
      ],
    };
  }
}

