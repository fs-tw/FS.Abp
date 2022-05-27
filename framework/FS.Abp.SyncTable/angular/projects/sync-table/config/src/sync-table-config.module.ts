import { ModuleWithProviders, NgModule } from '@angular/core';
import { SYNC_TABLE_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class SyncTableConfigModule {
  static forRoot(): ModuleWithProviders<SyncTableConfigModule> {
    return {
      ngModule: SyncTableConfigModule,
      providers: [SYNC_TABLE_ROUTE_PROVIDERS],
    };
  }
}
