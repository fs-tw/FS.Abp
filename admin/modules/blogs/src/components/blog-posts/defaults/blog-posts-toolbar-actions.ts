import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/theme-alain/extensions';

export const BLOG_POSTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto[]
>([
  {
    text: 'CmsKit::NewBlogPost',
    action: notify('Create'),
    icon: 'fa fa-plus',
  },
]);
