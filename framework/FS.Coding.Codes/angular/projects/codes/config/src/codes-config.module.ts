import { ModuleWithProviders, NgModule } from '@angular/core';
import { CODES_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class CodesConfigModule {
  static forRoot(): ModuleWithProviders<CodesConfigModule> {
    return {
      ngModule: CodesConfigModule,
      providers: [CODES_ROUTE_PROVIDERS],
    };
  }
}
