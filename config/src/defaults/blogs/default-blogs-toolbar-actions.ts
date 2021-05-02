import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { eCmsKitComponents } from '../../enums/components';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../services/extensions.service';

export const DEFAULT_BLOGS_TOOLBAR_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogDto[]>([
  {
    text: 'CmsKit::NewBlog',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eCmsKitComponents.Blogs, { method: 'Create', data });
    },
    permission: 'CmsKit.Blogs.Create',
    icon: 'fa fa-plus',
  },
]);
