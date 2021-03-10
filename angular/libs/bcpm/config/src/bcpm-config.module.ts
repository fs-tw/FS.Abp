import { ModuleWithProviders, NgModule } from '@angular/core';
import { BCPM_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class BcpmConfigModule {
  static forRoot(): ModuleWithProviders<BcpmConfigModule> {
    return {
      ngModule: BcpmConfigModule,
      providers: [BCPM_ROUTE_PROVIDERS],
    };
  }
}
