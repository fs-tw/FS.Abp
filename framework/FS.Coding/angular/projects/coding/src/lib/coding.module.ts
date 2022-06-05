import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CodingComponent } from './components/coding.component';
import { CodingRoutingModule } from './coding-routing.module';

@NgModule({
  declarations: [CodingComponent],
  imports: [CoreModule, ThemeSharedModule, CodingRoutingModule],
  exports: [CodingComponent],
})
export class CodingModule {
  static forChild(): ModuleWithProviders<CodingModule> {
    return {
      ngModule: CodingModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CodingModule> {
    return new LazyModuleFactory(CodingModule.forChild());
  }
}
