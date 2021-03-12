import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import {Fs } from 'libs/theme/proxy/src';
import { eThemeRouteNames } from '../../enums/route-names';
import { ExtensionsService } from '../../services/extensions.service';

export const DEFAULT_BANNER_TOOLBAR_ACTIONS = ToolbarAction.createMany<
Fs.Theme.Banners.Dtos.BannerDto[]>([
  {
    text: '新增',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.action(eThemeRouteNames.Banner, {
        name: 'Add'
      });
      //const component = data.getInjected(UsersComponent);
      //component.add();
    },
    //permission: 'AbpIdentity.Users.Create',
    icon: 'fa fa-plus',
  },
]);
