import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { CoreModule } from '@abp/ng.core';
import { PageModule } from '@abp/ng.components/page';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill';

import { CmsKitEntityBaseComponent } from './components/cms-kit-entity-base/cms-kit-entity-base.component';
import { BlogFeatureTabComponent } from './components/tabs/blog-feature-tab/blog-feature-tab.component';
import { MediaTabComponent } from './components/tabs/media-tab/media-tab.component';
import { SelectRoutesComponent } from './components/select-routes/select-routes.component';

import { NzUploadDefaultDirective } from './directives/nz-upload-default.directive';
import { NzUploadDefaultComponent } from './directives/nz-upload-default.component';

let COMPONENT = [
  CmsKitEntityBaseComponent,
  BlogFeatureTabComponent,
  MediaTabComponent,
  SelectRoutesComponent,

  NzUploadDefaultDirective,
  NzUploadDefaultComponent,
];

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    CoreModule,
    PageModule,
    NgbNavModule,
    ThemeAlainSharedModule,
    QuillModule,
  ],
  exports: [ThemeAlainSharedModule, ...COMPONENT],
})
export class CmsKitManagementAdminSharedModule {}
