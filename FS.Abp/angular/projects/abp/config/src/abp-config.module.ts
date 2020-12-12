import { ModuleWithProviders, NgModule } from '@angular/core';
import { ABP_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class AbpConfigModule {
  static forRoot(): ModuleWithProviders<AbpConfigModule> {
    return {
      ngModule: AbpConfigModule,
      providers: [ABP_ROUTE_PROVIDERS],
    };
  }
}
