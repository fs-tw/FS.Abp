import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { SHOW_ENTITY_HISTORY } from '@volo/abp.commercial.ng.ui';
import { RolesComponent } from '../components/roles/roles.component';
import { IdentityRoleDto } from '../proxy/identity/models';

export const DEFAULT_ROLES_ENTITY_ACTIONS = EntityAction.createMany<IdentityRoleDto>([
  {
    text: 'AbpIdentity::Edit',
    action: data => {
      const component = data.getInjected(RolesComponent);
      component.onEdit(data.record.id);
    },
    permission: 'AbpIdentity.Roles.Update',
  },
  {
    text: 'AbpIdentity::Claims',
    action: data => {
      const component = data.getInjected(RolesComponent);
      component.onManageClaims(data.record.id);
    },
    permission: 'AbpIdentity.Roles.Update',
  },
  {
    text: 'AbpIdentity::Permissions',
    action: data => {
      const component = data.getInjected(RolesComponent);
      component.openPermissionsModal(data.record.name);
    },
    permission: 'AbpIdentity.Roles.ManagePermissions',
  },
  {
    text: 'AbpIdentity::ChangeHistory',
    action: data => {
      const showHistory = data.getInjected(SHOW_ENTITY_HISTORY);
      showHistory(data.record.id, 'Volo.Abp.Identity.IdentityRole');
    },
    permission: 'AbpIdentity.Roles.ViewChangeHistory',
    visible: data => Boolean(data.getInjected(SHOW_ENTITY_HISTORY, null)),
  },
  {
    text: 'AbpIdentity::Delete',
    action: data => {
      const component = data.getInjected(RolesComponent);
      component.delete(data.record.id, data.record.name);
    },
    permission: 'AbpIdentity.Roles.Delete',
    visible: data => !data.record.isStatic,
  },
]);
