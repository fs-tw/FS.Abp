import { NgModule } from '@angular/core';
import { TagsRoutingModule } from './tags-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [TagsComponent],
  imports: [TagsRoutingModule, CmsKitManagementSharedModule],
})
export class TagsModule {}
