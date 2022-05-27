import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { SyncTableComponent } from './components/sync-table.component';
import { SyncTableRoutingModule } from './sync-table-routing.module';

@NgModule({
  declarations: [SyncTableComponent],
  imports: [CoreModule, ThemeSharedModule, SyncTableRoutingModule],
  exports: [SyncTableComponent],
})
export class SyncTableModule {
  static forChild(): ModuleWithProviders<SyncTableModule> {
    return {
      ngModule: SyncTableModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<SyncTableModule> {
    return new LazyModuleFactory(SyncTableModule.forChild());
  }
}
