import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from '@fs-tw/theme/proxy';
import { eThemeRouteNames } from '../../enums/route-names';
import { ExtensionsService } from '../../services/extensions.service';

export const DEFAULT_WEBSITEDEFINITION_TOOLBAR_ACTIONS = ToolbarAction.createMany<
Fs.Theme.WebSites.Dtos.WebSiteDefinitionDto[]>([
  {
    text: '新增',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.action(eThemeRouteNames.WebSiteDefinition, {
        name: 'Add'
      });
      //const component = data.getInjected(UsersComponent);
      //component.add();
    },
    //permission: 'AbpIdentity.Users.Create',
    icon: 'fa fa-plus',
  },
]);
