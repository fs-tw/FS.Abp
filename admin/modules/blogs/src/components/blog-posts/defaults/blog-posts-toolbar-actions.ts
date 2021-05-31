import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const BLOG_POSTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Admin.Blogs.BlogPostDto[]
>([
  {
    text: 'CmsKit::NewBlogPost',
    action: notify('Create'),
    permission: 'CmsKit.BlogPosts.Create',
    icon: 'fa fa-plus',
  },
]);
