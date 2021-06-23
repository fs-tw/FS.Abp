import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/shared';
import { PagesComponent } from './components/pages/pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    CmsKitManagementAdminSharedModule
  ]
})
export class PagesModule { }
