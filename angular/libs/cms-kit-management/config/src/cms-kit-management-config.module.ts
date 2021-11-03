import { Injectable, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import {  EnvironmentService } from '@abp/ng.core';
import { CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import {
  MULTI_LINGUAL_ENTITY_TYPE_TOKEN,
} from '@fs-tw/components/multi-lingual';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { IMAGE_PICKER_TOKEN } from '@fs-tw/components/image-picker';
import { QUILL_EDITOR_DOWN_TOKEN } from '@fs-tw/components/quill-editor';
import { MediaDescriptorAdminByListService } from './services/media-descriptor-admin.service';

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
        {
          provide: IMAGE_PICKER_TOKEN,
          useFactory: configure_IMAGE_PICKER_TOKEN,
          deps: [Injector],
        },
        {
          provide: QUILL_EDITOR_DOWN_TOKEN,
          useValue: "/api/cms-kit/media/"
        },
      ],
    };
  }
}

function configureMULTI_LINGUAL_ENTITY_TYPE_TOKEN(injector: Injector) {
  var store = injector.get(EntityTypeStore);
  var api = injector.get(
    Fs.CmsKitManagement.MultiLinguals.MultiLingualsApiService
  );
  return {
    Store: store,
    Api: api,
  };
}

function configure_IMAGE_PICKER_TOKEN(injector: Injector) {
  let api = injector.get(MediaDescriptorAdminByListService);
  let environment = injector.get(EnvironmentService)
  let notify = injector.get(Notify);
  let result = {
    Api: api,
    Environment: environment,
    Notify: notify
  };
  return result;
}

@Injectable({
  providedIn: 'root',
})
class Notify {
  success(title: string, content: string) {}
  error(title: string, content: string) {}
}