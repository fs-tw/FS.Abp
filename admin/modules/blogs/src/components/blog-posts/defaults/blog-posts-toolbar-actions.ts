import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/theme-alain/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const BLOG_POSTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto[]>([
  {
    text: 'CmsKit::NewBlogPost',
    action: notify('Create'),
    icon: 'fa fa-plus',
  },
]);
