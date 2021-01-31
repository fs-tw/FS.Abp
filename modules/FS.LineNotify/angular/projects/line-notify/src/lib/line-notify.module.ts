import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { LineNotifyComponent } from './components/line-notify.component';
import { LineNotifyRoutingModule } from './line-notify-routing.module';

@NgModule({
  declarations: [LineNotifyComponent],
  imports: [CoreModule, ThemeSharedModule, LineNotifyRoutingModule],
  exports: [LineNotifyComponent],
})
export class LineNotifyModule {
  static forChild(): ModuleWithProviders<LineNotifyModule> {
    return {
      ngModule: LineNotifyModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<LineNotifyModule> {
    return new LazyModuleFactory(LineNotifyModule.forChild());
  }
}
