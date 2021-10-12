import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { PagesComponent } from './components/pages/pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    CmsKitManagementSharedModule
  ],
  providers: []
})
export class PagesModule { }
