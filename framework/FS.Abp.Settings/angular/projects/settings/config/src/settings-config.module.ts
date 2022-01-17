import { ModuleWithProviders, NgModule } from '@angular/core';
import { SETTINGS_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class SettingsConfigModule {
  static forRoot(): ModuleWithProviders<SettingsConfigModule> {
    return {
      ngModule: SettingsConfigModule,
      providers: [SETTINGS_ROUTE_PROVIDERS],
    };
  }
}
