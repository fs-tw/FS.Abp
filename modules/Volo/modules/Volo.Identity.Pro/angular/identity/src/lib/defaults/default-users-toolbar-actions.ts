import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { UsersComponent } from '../components/users/users.component';
import { IdentityUserDto } from '../proxy/identity/models';

export const DEFAULT_USERS_TOOLBAR_ACTIONS = ToolbarAction.createMany<IdentityUserDto[]>([
  {
    text: 'AbpIdentity::NewUser',
    action: data => {
      const component = data.getInjected(UsersComponent);
      component.onAdd();
    },
    permission: 'AbpIdentity.Users.Create',
    icon: 'fa fa-plus',
  },
]);