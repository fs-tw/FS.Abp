import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/admin/shared';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogsInitializer } from './blogs.initializer';

@NgModule({
  providers:[
    BlogsInitializer
  ],
  declarations: [BlogsComponent, BlogPostsComponent],
  imports: [
    BlogsRoutingModule,
    CmsKitManagementAdminSharedModule,
  ],
})
export class BlogsModule {}
