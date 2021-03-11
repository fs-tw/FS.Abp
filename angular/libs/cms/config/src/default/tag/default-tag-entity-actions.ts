import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/cms/proxy';
import { ExtensionsService } from '../../services/extensions.service';
import { eCmsRouteNames } from '../../enums/route-names';

export const DEFAULT_TAG_ENTITY_ACTIONS = EntityAction.createMany<
  Fs.Cms.Tags.Dtos.TagDto
>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eCmsRouteNames.Tag, {
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
      service.action(eCmsRouteNames.Tag, {
        name: 'Delete',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Delete',
  },
]);
