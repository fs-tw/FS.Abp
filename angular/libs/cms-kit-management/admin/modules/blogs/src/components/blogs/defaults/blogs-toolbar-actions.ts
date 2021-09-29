import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/theme-alain/extensions';

export const BLOGS_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Admin.Blogs.BlogDto[]
>([
  {
    text: 'CmsKit::NewBlog',
    action: notify('Create'),
    permission: 'CmsKit.Blogs.Create',
    icon: 'fa fa-plus',
  },
]);
