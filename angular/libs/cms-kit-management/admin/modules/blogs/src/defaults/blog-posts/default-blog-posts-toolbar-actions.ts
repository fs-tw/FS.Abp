import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { BlogPostsComponent } from '../../components/blog-posts/blog-posts.component';

export const DEFAULT_BLOG_POSTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto[]>([
  {
    text: 'CmsKit::NewBlogPost',
    action: (data) => {
      const component = data.getInjected(BlogPostsComponent);
      component.onAdd();
    },
    permission: 'CmsKit.BlogPosts.Create',
    icon: 'fa fa-plus',
  }
]);
