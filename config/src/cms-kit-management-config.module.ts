import { ModuleWithProviders, NgModule } from '@angular/core';
import { CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import { MULTI_LINGUAL_ENTITY_TYPE_STORE } from '@fs-tw/components/multi-lingual';

@NgModule({
  imports: [
  ],
  providers: [
  ]
})
export class CmsKitManagementConfigModule {
  static forRoot(): ModuleWithProviders<CmsKitManagementConfigModule> {
    return {
      ngModule: CmsKitManagementConfigModule,
      providers: [
        CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS,
        {
          provide: MULTI_LINGUAL_ENTITY_TYPE_STORE,
          useExisting: EntityTypeStore
        }
      ],
    };
  }
}
