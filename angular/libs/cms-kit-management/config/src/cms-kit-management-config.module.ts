import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import {
  MULTI_LINGUAL_ENTITY_TYPE_TOKEN,
} from '@fs-tw/components/multi-lingual';

import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

@NgModule({
  imports: [],
  providers: [],
})
export class CmsKitManagementConfigModule {
  static forRoot(): ModuleWithProviders<CmsKitManagementConfigModule> {
    return {
      ngModule: CmsKitManagementConfigModule,
      providers: [
        CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS,
        {
          provide: MULTI_LINGUAL_ENTITY_TYPE_TOKEN,
          useFactory: configureMULTI_LINGUAL_ENTITY_TYPE_TOKEN,
          deps: [Injector],
        },
      ],
    };
  }
}
export function configureMULTI_LINGUAL_ENTITY_TYPE_TOKEN(injector: Injector) {
  var store = injector.get(EntityTypeStore);
  var api = injector.get(
    Fs.CmsKitManagement.MultiLinguals.MultiLingualsApiService
  );
  return {
    Store: store,
    Api: api,
  };
}
