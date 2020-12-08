import { ModuleWithProviders, NgModule } from '@angular/core';
import { LANGUAGE_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class LanguageManagementConfigModule {
  static forRoot(): ModuleWithProviders<LanguageManagementConfigModule> {
    return {
      ngModule: LanguageManagementConfigModule,
      providers: [LANGUAGE_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
