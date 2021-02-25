import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { WbmComponent } from './components/wbm.component';
import { WbmRoutingModule } from './wbm-routing.module';

@NgModule({
  declarations: [WbmComponent],
  imports: [CoreModule, ThemeSharedModule, WbmRoutingModule],
  exports: [WbmComponent],
})
export class WbmModule {
  static forChild(): ModuleWithProviders<WbmModule> {
    return {
      ngModule: WbmModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<WbmModule> {
    return new LazyModuleFactory(WbmModule.forChild());
  }
}
