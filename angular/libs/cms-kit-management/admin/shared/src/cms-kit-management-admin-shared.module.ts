import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { CoreModule } from '@abp/ng.core';
import { PageModule } from '@abp/ng.components/page';
import { CmsKitManagementModule } from '@fs-tw/cms-kit-management';
import { PagesComponent } from './components/pages/pages.component';
import { CmsKitEntityBaseComponent } from './components/cms-kit-entity-base/cms-kit-entity-base.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { TagsComponent } from './components/tags/tags.component';
import { CommentsComponent } from './components/comments/comments.component';

let COMPONENT = [
  PagesComponent,
  BlogsComponent,
  BlogPostsComponent,
  TagsComponent,
  CommentsComponent,
];

@NgModule({
  declarations: [CmsKitEntityBaseComponent,...COMPONENT],
  imports: [
    CoreModule,
    PageModule,
    ThemeAlainSharedModule
  ],
  exports: [
    ...COMPONENT,
    ThemeAlainSharedModule
  ],
})
export class CmsKitManagementAdminSharedModule {}
