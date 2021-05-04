import { ModuleWithProviders, NgModule } from '@angular/core';
import { FORM_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { FORM_MANAGEMENT_EXTENSIONS_PROVIDERS } from './extensions/extensions.provider';
@NgModule()
export class FormmanagementConfigModule {
  static forRoot(): ModuleWithProviders<FormmanagementConfigModule> {
    return {
      ngModule: FormmanagementConfigModule,
      providers: [
        FORM_MANAGEMENT_ROUTE_PROVIDERS,
        FORM_MANAGEMENT_EXTENSIONS_PROVIDERS],
    };
  }
}
