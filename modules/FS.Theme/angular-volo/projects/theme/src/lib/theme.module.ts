import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ThemeComponent } from './components/theme.component';
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [ThemeComponent],
  imports: [CoreModule, ThemeSharedModule, ThemeRoutingModule],
  exports: [ThemeComponent],
})
export class ThemeModule {
  static forChild(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<ThemeModule> {
    return new LazyModuleFactory(ThemeModule.forChild());
  }
}
