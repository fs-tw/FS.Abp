import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { eCmsKitComponents } from '../../enums/components';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../extensions/extensions.service';

export const DEFAULT_PAGES_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Pages.PageDto>([
  {
    text: 'CmsKit::Edit',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eCmsKitComponents.Pages, { method: 'Edit', data });
    },
    permission: 'CmsKit.Pages.Update',
    //icon: 'fa fa-plus',
  },
  {
    text: 'CmsKit::Delete',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eCmsKitComponents.Pages, { method: 'Delete', data });
    },
    permission: 'CmsKit.Pages.Delete',
    //visible: data => !data.record.isStatic,
  },
]);
