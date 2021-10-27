import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { PagesComponent } from './components/pages/pages.component';
import {QuillModule} from 'ngx-quill';
@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    QuillModule,
    CmsKitManagementSharedModule,
  ],
  providers: []
})
export class PagesModule { }
