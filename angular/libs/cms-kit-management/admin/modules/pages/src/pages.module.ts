import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { PagesComponent } from './components/pages/pages.component';
import { MultiLingualModule } from '@fs-tw/components/multi-lingual';
@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    CmsKitManagementSharedModule,
    MultiLingualModule
  ],
  providers: []
})
export class PagesModule { }
