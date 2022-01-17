import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SettingsComponent } from './components/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CoreModule, ThemeSharedModule, SettingsRoutingModule],
  exports: [SettingsComponent],
})
export class SettingsModule {
  static forChild(): ModuleWithProviders<SettingsModule> {
    return {
      ngModule: SettingsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<SettingsModule> {
    return new LazyModuleFactory(SettingsModule.forChild());
  }
}
