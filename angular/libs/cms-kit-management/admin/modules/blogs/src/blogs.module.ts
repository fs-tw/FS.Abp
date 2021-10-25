import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { PickCoverImageModule } from '@fs-tw/components/pick-cover-image';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent, BlogsComponent, BlogPostsComponent],
  imports: [
    BlogsRoutingModule,
    CmsKitManagementSharedModule,
    PickCoverImageModule,
  ],
})
export class BlogsModule {}
