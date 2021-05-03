import { ModuleWithProviders, NgModule } from '@angular/core';
import { CMS_KIT_MANAGEMENT_EXTENSIONS_PROVIDERS } from './extensions/extensions.provider';
import { CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class CmsKitManagementConfigModule {
  static forRoot(): ModuleWithProviders<CmsKitManagementConfigModule> {
    return {
      ngModule: CmsKitManagementConfigModule,
      providers: [
        CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS,
        CMS_KIT_MANAGEMENT_EXTENSIONS_PROVIDERS
      ],
    };
  }
}
