import { ModuleWithProviders, NgModule } from '@angular/core';
import { EXTENSIONS_PROVIDERS } from './providers/extensions.provider';
import { CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class CmsKitManagementConfigModule {
  static forRoot(): ModuleWithProviders<CmsKitManagementConfigModule> {
    return {
      ngModule: CmsKitManagementConfigModule,
      providers: [
        CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS,
        EXTENSIONS_PROVIDERS
      ],
    };
  }
}
