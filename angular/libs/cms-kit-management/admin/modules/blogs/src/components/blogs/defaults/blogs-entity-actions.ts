import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export const BLOGS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
      permission: 'CmsKit.Blogs.Update',
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
      permission: 'CmsKit.Blogs.Delete',
    },
  ]
);
