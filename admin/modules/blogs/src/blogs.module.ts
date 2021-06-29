import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { CmsKitManagementAdminSharedModule } from '@fs-tw/cms-kit-management/shared';

import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { PickFilesModule } from '@fs-tw/components/pick-files';
import { PickCoverImageModule } from '@fs-tw/components/pick-cover-image';
import { QuillEditorModule } from '@fs-tw/components/quill-editor';

@NgModule({
  declarations: [BlogsComponent, BlogPostsComponent, EditBlogPostComponent],
  imports: [
    BlogsRoutingModule,
    CmsKitManagementAdminSharedModule,
    PickFilesModule,
    PickCoverImageModule,
    QuillEditorModule
  ],
})
export class BlogsModule {}
