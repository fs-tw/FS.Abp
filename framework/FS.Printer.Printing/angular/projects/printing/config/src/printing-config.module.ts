import { ModuleWithProviders, NgModule } from '@angular/core';
import { PRINTING_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class PrintingConfigModule {
  static forRoot(): ModuleWithProviders<PrintingConfigModule> {
    return {
      ngModule: PrintingConfigModule,
      providers: [PRINTING_ROUTE_PROVIDERS],
    };
  }
}
