import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/cms/proxy/src';
import { ExtensionsService } from '../../services/extensions.service';
import { eCmsRouteNames } from '../../enums/route-names';

export const DEFAULT_BLOG_ENTITY_ACTIONS = EntityAction.createMany<
  Fs.Cms.Blogs.Dtos.BlogDto
>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eCmsRouteNames.Blog, {
        name: 'Edit',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Update',
  },
  {
    text: 'AbpIdentity::Delete',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eCmsRouteNames.Blog, {
        name: 'Delete',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Delete',
  },
]);
