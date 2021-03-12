import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/theme/proxy/src';
import { ExtensionsService } from '../../services/extensions.service';
import { eThemeRouteNames } from '../../enums/route-names';

export const DEFAULT_BANNERDEFINITION_ENTITY_ACTIONS = EntityAction.createMany<
  Fs.Theme.Banners.Dtos.BannerDefinitionDto
>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eThemeRouteNames.BannerDefinition, {
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
      service.action(eThemeRouteNames.BannerDefinition, {
        name: 'Delete',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Delete',
  },
]);
