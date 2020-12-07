import { ModuleWithProviders, NgModule } from '@angular/core';
import { SAAS_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class SaasConfigModule {
  static forRoot(): ModuleWithProviders<SaasConfigModule> {
    return {
      ngModule: SaasConfigModule,
      providers: [SAAS_ROUTE_PROVIDERS],
    };
  }
}
