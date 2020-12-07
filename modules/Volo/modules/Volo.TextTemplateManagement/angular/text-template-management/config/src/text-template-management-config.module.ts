import { ModuleWithProviders, NgModule } from '@angular/core';
import { TEXT_TEMPLATE_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class TextTemplateManagementConfigModule {
  static forRoot(): ModuleWithProviders<TextTemplateManagementConfigModule> {
    return {
      ngModule: TextTemplateManagementConfigModule,
      providers: [TEXT_TEMPLATE_MANAGEMENT_ROUTE_PROVIDERS],
    };
  }
}
