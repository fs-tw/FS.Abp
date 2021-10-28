import { NgModule } from '@angular/core';

import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { MenusComponent } from './components/menus/menus.component';
import { MenusRoutingModule } from './menus-routing.module';

@NgModule({
  declarations: [MenusComponent],
  imports: [
    MenusRoutingModule,
    CmsKitManagementSharedModule,
  ],
})
export class MenusModule {}
