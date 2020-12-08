/* tslint:disable:max-line-length */
import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { OrganizationMembersComponent } from '../components/organization-units/organization-members/organization-members.component';
import { IdentityUserDto } from '../proxy/identity/models';

export const DEFAULT_ORGANIZATION_MEMBERS_ENTITY_ACTIONS = EntityAction.createMany<IdentityUserDto>(
  [
    {
      text: 'AbpIdentity::Delete',
      action: data => {
        const component = data.getInjected(OrganizationMembersComponent);
        component.delete(data.record.id, data.record.name);
      },
      permission: 'AbpIdentity.OrganizationUnits.ManageMembers',
    },
  ],
);
