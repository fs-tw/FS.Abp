import { ModuleWithProviders, NgModule } from '@angular/core';
import { MULTI_LINGUALS_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class MultiLingualsConfigModule {
  static forRoot(): ModuleWithProviders<MultiLingualsConfigModule> {
    return {
      ngModule: MultiLingualsConfigModule,
      providers: [MULTI_LINGUALS_ROUTE_PROVIDERS],
    };
  }
}
