import { ModuleWithProviders, NgModule } from '@angular/core';
import { PRINTER_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class PrinterConfigModule {
  static forRoot(): ModuleWithProviders<PrinterConfigModule> {
    return {
      ngModule: PrinterConfigModule,
      providers: [PRINTER_ROUTE_PROVIDERS],
    };
  }
}
