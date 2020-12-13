import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { IdentityRoleDto } from '../proxy/identity/models';

export const DEFAULT_ORGANIZATION_ROLES_ENTITY_PROPS = EntityProp.createMany<IdentityRoleDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentity::RoleName',
    sortable: true,
  },
]);
