import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { MultiLingualsComponent } from './components/multi-linguals.component';
import { MultiLingualsRoutingModule } from './multi-linguals-routing.module';

@NgModule({
  declarations: [MultiLingualsComponent],
  imports: [CoreModule, ThemeSharedModule, MultiLingualsRoutingModule],
  exports: [MultiLingualsComponent],
})
export class MultiLingualsModule {
  static forChild(): ModuleWithProviders<MultiLingualsModule> {
    return {
      ngModule: MultiLingualsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<MultiLingualsModule> {
    return new LazyModuleFactory(MultiLingualsModule.forChild());
  }
}
