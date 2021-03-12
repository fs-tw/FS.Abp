import { ModuleWithProviders, NgModule } from '@angular/core';
import { FORM_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class FormManagementConfigModule {
  static forRoot(): ModuleWithProviders<FormManagementConfigModule> {
    return {
      ngModule: FormManagementConfigModule,
      providers: [FORM_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
