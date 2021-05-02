import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { eCmsKitComponents } from '../../enums/components';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';

export const DEFAULT_BLOGS_ENTITY_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto>([
  {
    text: 'CmsKit::Edit',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eCmsKitComponents.Blogs, { method: 'Edit', data });
    },
    permission: 'CmsKit.Blogs.Update',
    //icon: 'fa fa-plus',
  },
  {
    text: 'CmsKit::Delete',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eCmsKitComponents.Blogs, { method: 'Delete', data });
    },
    permission: 'CmsKit.Blogs.Delete',
    //visible: data => !data.record.isStatic,
  },
]);
