import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const BLOG_POSTS_ENTITY_ACTIONS = ToolbarAction.createMany<Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
    },
  ]
);
