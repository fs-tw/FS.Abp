import { ModuleWithProviders, NgModule } from '@angular/core';
import { THEME_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class ThemeConfigModule {
  static forRoot(): ModuleWithProviders<ThemeConfigModule> {
    return {
      ngModule: ThemeConfigModule,
      providers: [THEME_ROUTE_PROVIDERS],
    };
  }
}
