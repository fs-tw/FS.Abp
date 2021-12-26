import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { notify } from '@fs-tw/components/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

export const BLOG_POST_TOOLBAR_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto[]>([
  {
    text: 'CmsKit::NewBlogPost',
    action: notify('Create'),
    icon: 'fa fa-plus',
  },
]);
