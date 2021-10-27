import { NgModule } from '@angular/core';

import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { MenusComponent } from './components/menus/menus.component';
import { MenusRoutingModule } from './menus-routing.module';
import { TreeModule } from '@abp/ng.components/tree';
@NgModule({
  declarations: [MenusComponent],
  imports: [
    MenusRoutingModule,
    CmsKitManagementSharedModule,
    TreeModule
  ],
})
export class MenusModule {}
