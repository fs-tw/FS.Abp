import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { PrintingComponent } from './components/printing.component';
import { PrintingRoutingModule } from './printing-routing.module';

@NgModule({
  declarations: [PrintingComponent],
  imports: [CoreModule, ThemeSharedModule, PrintingRoutingModule],
  exports: [PrintingComponent],
})
export class PrintingModule {
  static forChild(): ModuleWithProviders<PrintingModule> {
    return {
      ngModule: PrintingModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<PrintingModule> {
    return new LazyModuleFactory(PrintingModule.forChild());
  }
}
