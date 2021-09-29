import { NgModule } from '@angular/core';
import { CoreModule } from '@abp/ng.core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { BlogFeatureTabComponent } from './components/tabs/blog-feature-tab/blog-feature-tab.component';
import { MediaTabComponent } from './components/tabs/media-tab/media-tab.component';
import { SelectRoutesComponent } from './components/select-routes/select-routes.component';

import { NzUploadDefaultDirective } from './directives/nz-upload-default.directive';
import { NzUploadDefaultComponent } from './directives/nz-upload-default.component';

import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
import { SHARED_ABP_MODULES } from './shared-abp.module';
import { SHARED_FS_MODULES } from './shared-fs.module';

let COMPONENT = [
  BlogFeatureTabComponent,
  MediaTabComponent,
  SelectRoutesComponent,

  NzUploadDefaultDirective,
  NzUploadDefaultComponent,
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    SHARED_ABP_MODULES,
    SHARED_ZORRO_MODULES,
    SHARED_FS_MODULES,
    QuillModule,
  ],
  exports: [
    SHARED_ZORRO_MODULES,
    SHARED_ABP_MODULES,
    SHARED_FS_MODULES,
    ...COMPONENT,
  ],
})
export class CmsKitManagementSharedModule {}
