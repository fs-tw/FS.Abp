import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { ExtensionsService } from '../../services/extensions.service';
import { eCmsRouteNames } from '../../enums/route-names';

export const DEFAULT_POST_ENTITY_ACTIONS = EntityAction.createMany<
  Fs.Cms.Posts.Dtos.PostDto
>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eCmsRouteNames.Post, {
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
      service.action(eCmsRouteNames.Post, {
        name: 'Delete',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Delete',
  },
]);
