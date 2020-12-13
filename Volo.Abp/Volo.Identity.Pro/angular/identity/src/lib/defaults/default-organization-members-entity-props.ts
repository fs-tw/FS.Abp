import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { of } from 'rxjs';
import { Identity } from '../models/identity';
import { IdentityUserDto } from '../proxy/identity/models';

export const DEFAULT_ORGANIZATION_MEMBERS_ENTITY_PROPS = EntityProp.createMany<IdentityUserDto>([
  {
    type: ePropType.String,
    name: 'userName',
    displayName: 'AbpIdentity::UserName',
    sortable: true,
    columnWidth: 180,
  },
  {
    type: ePropType.String,
    name: 'email',
    displayName: 'AbpIdentity::EmailAddress',
    sortable: true,
    columnWidth: 200,
    valueResolver: data => {
      const { email, emailConfirmed } = data.record;

      return of(
        (email || '') + (emailConfirmed ? `<i class="fa fa-check text-success ml-1"></i>` : ''),
      );
    },
  },
]);
