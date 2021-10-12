import { EntityAction, EntityActionOptions } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { notify } from '@fs-tw/theme-alain/extensions';

export function AddToolbarAction(data: Array<string>): EntityAction<Volo.CmsKit.Admin.Pages.PageDto>[]
{
  return EntityAction.createMany<Volo.CmsKit.Admin.Pages.PageDto>(
    [
      ...PAGES_ENTITY_ACTIONS,
      ...data.map(x => {
        return new EntityAction({
          text: x,
          action: notify(x)
        })
      })
    ]
  );
}

export const PAGES_ENTITY_ACTIONS = EntityAction.createMany<Volo.CmsKit.Admin.Pages.PageDto>(
  [
    {
      text: 'CmsKit::Edit',
      action: notify('Edit'),
      permission: 'CmsKit.Pages.Update',
    },
    {
      text: 'CmsKit::Delete',
      action: notify('Delete'),
      permission: 'CmsKit.Pages.Delete',
    },
  ]
);
