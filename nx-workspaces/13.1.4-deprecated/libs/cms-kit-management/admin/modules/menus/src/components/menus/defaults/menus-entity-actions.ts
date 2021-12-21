import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/components/extensions';

export const MENUS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Menus.MenuItemDto>(
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