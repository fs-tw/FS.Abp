import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/theme/proxy/src';
import { ExtensionsService } from '../../services/extensions.service';
import { eThemeRouteNames } from '../../enums/route-names';

export const DEFAULT_WEBSITEDEFINITION_ENTITY_ACTIONS = EntityAction.createMany<
  Fs.Theme.WebSites.Dtos.WebSiteDefinitionDto
>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const service = data.getInjected(ExtensionsService);
      service.action(eThemeRouteNames.WebSiteDefinition, {
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
      service.action(eThemeRouteNames.WebSiteDefinition, {
        name: 'Delete',
        record: data.record,
      });
    },
    //permission: 'AbpIdentity.Users.Delete',
  },
]);
