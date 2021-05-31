import { ModuleWithProviders, NgModule } from '@angular/core';
import { FORM_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
@NgModule()
export class FormmanagementConfigModule {
  static forRoot(): ModuleWithProviders<FormmanagementConfigModule> {
    return {
      ngModule: FormmanagementConfigModule,
      providers: [FORM_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
