import { APP_INITIALIZER, Injectable, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import {  EnvironmentService } from '@abp/ng.core';
import { CMS_KIT_MANAGEMENT_ROUTE_PROVIDERS } from './providers/route.provider';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import {
  MULTI_LINGUAL_ENTITY_TYPE_TOKEN,
} from '@fs-tw/components/multi-lingual';

import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { ImagePickerModule } from '@fs-tw/components/image-picker';
import { Observable, of } from 'rxjs';

@NgModule({
  imports: [ImagePickerModule],
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
          provide: APP_INITIALIZER,
          useFactory: configure_IMAGE_PICKER_TOKEN,
          deps: [Injector]
        }
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
  let api = injector.get(ImagePickerApi);
  let environment = injector.get(EnvironmentService)
  let notify = injector.get(Notify);
  let result = {
    Api: api,
    Environment: environment,
    Notify: notify
  };
  ImagePickerModule.forRoot(result);
  return of(null).toPromise();
}

@Injectable({
  providedIn: 'root',
})
class ImagePickerApi {
  uploadImage(input: FormData): Observable<string[]> {
    return of([]);
  }
}

@Injectable({
  providedIn: 'root',
})
class Notify {
  success(title: string, content: string) {}
  error(title: string, content: string) {}
}