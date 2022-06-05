import { ModuleWithProviders, NgModule } from '@angular/core';
import { CODING_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class CodingConfigModule {
  static forRoot(): ModuleWithProviders<CodingConfigModule> {
    return {
      ngModule: CodingConfigModule,
      providers: [CODING_ROUTE_PROVIDERS],
    };
  }
}
