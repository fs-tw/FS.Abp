import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/shared';

import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';

@NgModule({
  declarations: [BlogsComponent, BlogPostsComponent, EditBlogPostComponent],
  imports: [
    BlogsRoutingModule,
    CmsKitManagementAdminSharedModule,
  ],
})
export class BlogsModule {}
