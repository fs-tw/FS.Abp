import { ModuleWithProviders, NgModule } from '@angular/core';
import { PRINTER_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class PrinterManagementConfigModule {
  static forRoot(): ModuleWithProviders<PrinterManagementConfigModule> {
    return {
      ngModule: PrinterManagementConfigModule,
      providers: [PRINTER_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
