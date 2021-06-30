import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/proxy/cms-kit';
import { notify } from '@fs-tw/theme-alain/shared/extensions';

export const BLOGS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
      permission: 'CmsKit.Blogs.Update',
      //icon: 'fa fa-plus',
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
      permission: 'CmsKit.Blogs.Delete',
      //visible: data => !data.record.isStatic,
    },
  ]
);
