import { NgModule } from '@angular/core';
import { CommentsRoutingModule } from './comments-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommentsRoutingModule, CmsKitManagementSharedModule],
})
export class CommentsModule {}
