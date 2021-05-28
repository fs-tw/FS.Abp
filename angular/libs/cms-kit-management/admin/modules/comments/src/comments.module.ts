import { NgModule } from '@angular/core';

import { CommentsRoutingModule } from './comments-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/admin/shared';
import { CommentsComponent } from './components/comments/comments.component';
import { BlogsInitializer } from '../../blogs/src/blogs.initializer';

@NgModule({
  providers:[BlogsInitializer],
  declarations: [CommentsComponent],
  imports: [CommentsRoutingModule, CmsKitManagementAdminSharedModule],
})
export class CommentsModule {}
