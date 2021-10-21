import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { PagesComponent } from './components/pages/pages.component';
// import { DelonFormModule } from '@delon/form';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    //DelonFormModule.forRoot(),
    PagesRoutingModule,
    CmsKitManagementSharedModule,

  ],
  providers: []
})
export class PagesModule { }
