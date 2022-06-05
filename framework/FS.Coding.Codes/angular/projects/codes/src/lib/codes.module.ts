import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CodesComponent } from './components/codes.component';
import { CodesRoutingModule } from './codes-routing.module';

@NgModule({
  declarations: [CodesComponent],
  imports: [CoreModule, ThemeSharedModule, CodesRoutingModule],
  exports: [CodesComponent],
})
export class CodesModule {
  static forChild(): ModuleWithProviders<CodesModule> {
    return {
      ngModule: CodesModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<CodesModule> {
    return new LazyModuleFactory(CodesModule.forChild());
  }
}
