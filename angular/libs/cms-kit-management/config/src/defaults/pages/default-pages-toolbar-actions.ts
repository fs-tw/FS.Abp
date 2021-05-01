import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { eCmsKitComponents } from '../../enums/components';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';
import { PagesExtensionsService } from '../../services/extensions.service';

export const DEFAULT_PAGES_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  Volo.CmsKit.Admin.Pages.PageDto[]
>([
  {
    text: 'CmsKit::NewPage',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.Action$[eCmsKitComponents.Pages].next({ method: 'Create',record:data.record[0] });
    },
    permission: 'CmsKit.Pages.Create',
    icon: 'fa fa-plus',
  },
]);
