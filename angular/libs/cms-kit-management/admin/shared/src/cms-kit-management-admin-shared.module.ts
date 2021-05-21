import { NgModule } from '@angular/core';
import { ThemeAlainSharedModule } from '@fs-tw/theme-alain/shared';
import { CoreModule } from '@abp/ng.core';
import { PageModule } from '@abp/ng.components/page';
import { PagesComponent } from './components/pages/pages.component';
import { CmsKitEntityBaseComponent } from './components/cms-kit-entity-base/cms-kit-entity-base.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { TagsComponent } from './components/tags/tags.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CmsKitModalBlogFeatureTabComponent } from './modals/cms-kit-modal/tabs/cms-kit-modal-blog-feature-tab/cms-kit-modal-blog-feature-tab.component';
import { CmsKitModalMediaTabComponent } from './modals/cms-kit-modal/tabs/cms-kit-modal-media-tab/cms-kit-modal-media-tab.component';
import { NzUploadDefaultDirective } from './directives/nz-upload-default.directive';
import { NzUploadDefaultComponent } from './directives/nz-upload-default.component';

let COMPONENT = [
  PagesComponent,
  BlogsComponent,
  BlogPostsComponent,
  TagsComponent,
  CommentsComponent,
  NzUploadDefaultDirective
];

let MODAL_COMPONENT = [
  CmsKitModalBlogFeatureTabComponent,
  CmsKitModalMediaTabComponent
];

@NgModule({
  declarations: [CmsKitEntityBaseComponent, ...COMPONENT, ...MODAL_COMPONENT, NzUploadDefaultComponent ],
  imports: [CoreModule, PageModule,NgbNavModule, ThemeAlainSharedModule ],
  exports: [ThemeAlainSharedModule, ...COMPONENT, ...MODAL_COMPONENT]
})
export class CmsKitManagementAdminSharedModule {}
