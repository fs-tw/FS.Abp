import { ModuleWithProviders, NgModule } from '@angular/core';
import { THEMES_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class ThemesConfigModule {
  static forRoot(): ModuleWithProviders<ThemesConfigModule> {
    return {
      ngModule: ThemesConfigModule,
      providers: [THEMES_ROUTE_PROVIDERS],
    };
  }
}
