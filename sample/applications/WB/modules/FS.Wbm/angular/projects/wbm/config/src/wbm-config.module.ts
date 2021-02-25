import { ModuleWithProviders, NgModule } from '@angular/core';
import { WBM_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class WbmConfigModule {
  static forRoot(): ModuleWithProviders<WbmConfigModule> {
    return {
      ngModule: WbmConfigModule,
      providers: [WBM_ROUTE_PROVIDERS],
    };
  }
}
