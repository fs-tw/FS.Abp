import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { AbpComponent } from './components/abp.component';
import { AbpRoutingModule } from './abp-routing.module';

@NgModule({
  declarations: [AbpComponent],
  imports: [CoreModule, ThemeSharedModule, AbpRoutingModule],
  exports: [AbpComponent],
})
export class AbpModule {
  static forChild(): ModuleWithProviders<AbpModule> {
    return {
      ngModule: AbpModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<AbpModule> {
    return new LazyModuleFactory(AbpModule.forChild());
  }
}
