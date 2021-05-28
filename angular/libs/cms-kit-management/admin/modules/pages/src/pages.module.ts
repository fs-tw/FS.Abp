import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/admin/shared';
import { PagesComponent } from './components/pages/pages.component';
import { PagesInitializer } from './pages.initializer';


@NgModule({
  providers:[PagesInitializer],
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    CmsKitManagementAdminSharedModule
  ]
})
export class PagesModule { }
