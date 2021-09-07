import { ModuleWithProviders, NgModule } from '@angular/core';
import { CODING_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class CodingManagementConfigModule {
  static forRoot(): ModuleWithProviders<CodingManagementConfigModule> {
    return {
      ngModule: CodingManagementConfigModule,
      providers: [CODING_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
