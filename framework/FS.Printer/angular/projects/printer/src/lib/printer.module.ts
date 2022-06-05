import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { PrinterComponent } from './components/printer.component';
import { PrinterRoutingModule } from './printer-routing.module';

@NgModule({
  declarations: [PrinterComponent],
  imports: [CoreModule, ThemeSharedModule, PrinterRoutingModule],
  exports: [PrinterComponent],
})
export class PrinterModule {
  static forChild(): ModuleWithProviders<PrinterModule> {
    return {
      ngModule: PrinterModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<PrinterModule> {
    return new LazyModuleFactory(PrinterModule.forChild());
  }
}
