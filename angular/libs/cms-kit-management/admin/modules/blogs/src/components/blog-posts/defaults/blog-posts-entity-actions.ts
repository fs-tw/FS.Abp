import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const BLOG_POSTS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
      permission: 'CmsKit.BlogPosts.Update',
      //icon: 'fa fa-plus',
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
      permission: 'CmsKit.BlogPosts.Delete',
      //visible: data => !data.record.isStatic,
    },
  ]
);
