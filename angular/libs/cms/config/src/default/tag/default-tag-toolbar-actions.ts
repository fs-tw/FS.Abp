import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { Fs } from 'libs/cms/proxy/src';
import { eCmsRouteNames } from '../../enums/route-names';
import { ExtensionsService } from '../../services/extensions.service';

export const DEFAULT_TAG_TOOLBAR_ACTIONS = ToolbarAction.createMany<
Fs.Cms.Tags.Dtos.TagDto[]>([
  {
    text: '新增',
    action: data => {
      const service = data.getInjected(ExtensionsService);
      service.action(eCmsRouteNames.Tag, {
        name: 'Add'
      });
      //const component = data.getInjected(UsersComponent);
      //component.add();
    },
    //permission: 'AbpIdentity.Users.Create',
    icon: 'fa fa-plus',
  },
]);
