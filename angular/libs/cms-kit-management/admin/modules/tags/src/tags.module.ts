import { NgModule } from '@angular/core';

import { TagsRoutingModule } from './tags-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/admin/shared';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [TagsComponent],
  imports: [TagsRoutingModule, CmsKitManagementAdminSharedModule],
})
export class TagsModule {}
