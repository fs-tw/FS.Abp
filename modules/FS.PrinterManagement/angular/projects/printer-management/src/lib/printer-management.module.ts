import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { PrinterManagementComponent } from './components/printer-management.component';
import { PrinterManagementRoutingModule } from './printer-management-routing.module';

@NgModule({
  declarations: [PrinterManagementComponent],
  imports: [CoreModule, ThemeSharedModule, PrinterManagementRoutingModule],
  exports: [PrinterManagementComponent],
})
export class PrinterManagementModule {
  static forChild(): ModuleWithProviders<PrinterManagementModule> {
    return {
      ngModule: PrinterManagementModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<PrinterManagementModule> {
    return new LazyModuleFactory(PrinterManagementModule.forChild());
  }
}
