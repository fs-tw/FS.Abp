import { EntityAction } from '@abp/ng.theme.shared/extensions';
import {Fs} from '@fs-tw/form-management/proxy';
import { ExtensionsService } from '../../services/extensions.service';
import { eFormmanagementRouteNames } from '../../enums/route-names';

export const DEFAULT_GROUP_ENTITY_ACTIONS = EntityAction.createMany<
Fs.FormManagement.Forms.Dtos.GroupDto
>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eFormmanagementRouteNames.Group, {
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
      service.action(eFormmanagementRouteNames.Group, {
        name: 'Delete',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Delete',
  },
]);
