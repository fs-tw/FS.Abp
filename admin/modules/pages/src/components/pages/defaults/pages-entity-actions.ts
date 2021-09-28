import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/theme-alain/extensions';

export const PAGES_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Pages.PageDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
      permission: 'CmsKit.Pages.Update',
      //icon: 'fa fa-plus',
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
      permission: 'CmsKit.Pages.Delete',
      //visible: data => !data.record.isStatic,
    },
  ]
);
