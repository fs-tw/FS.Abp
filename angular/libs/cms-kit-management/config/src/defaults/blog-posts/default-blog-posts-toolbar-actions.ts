import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { eCmsKitComponents } from '../../enums/components';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '../../extensions/extensions.service';

export const DEFAULT_BLOG_POSTS_TOOLBAR_ACTIONS = ToolbarAction.createMany<Volo.CmsKit.Admin.Blogs.BlogPostDto[]>([
  {
    text: 'CmsKit::NewBlogPost',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.Action(eCmsKitComponents.BlogPosts, { method: 'Create', data });
    },
    permission: 'CmsKit.BlogPosts.Create',
    icon: 'fa fa-plus',
  }
]);
