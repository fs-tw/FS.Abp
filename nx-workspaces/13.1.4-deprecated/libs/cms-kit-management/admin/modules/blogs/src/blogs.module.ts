import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CmsKitManagementSharedModule } from '@fs-tw/cms-kit-management/shared';

import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [MainComponent, BlogsComponent, BlogPostsComponent],
  imports: [
    BlogsRoutingModule,
    CmsKitManagementSharedModule
  ],
})
export class BlogsModule {}
