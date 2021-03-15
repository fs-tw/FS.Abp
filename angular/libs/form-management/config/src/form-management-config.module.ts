import { ModuleWithProviders, NgModule } from '@angular/core';
import { FORMMANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { EXTENSIONS_PROVIDERS } from './providers/extensions.provider';
@NgModule()
export class FormmanagementConfigModule {
  static forRoot(): ModuleWithProviders<FormmanagementConfigModule> {
    return {
      ngModule: FormmanagementConfigModule,
      providers: [FORMMANAGEMENT_ROUTE_PROVIDERS,EXTENSIONS_PROVIDERS],
    };
  }
}
