import { LocalizationService } from '@abp/ng.core';
import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { of } from 'rxjs';
import { IdentityUserDto } from '../proxy/identity/models';

export const DEFAULT_USERS_ENTITY_PROPS = EntityProp.createMany<IdentityUserDto>([
  {
    type: ePropType.String,
    name: 'userName',
    displayName: 'AbpIdentity::UserName',
    sortable: true,
    columnWidth: 250,
    valueResolver: data => {
      const l10n = data.getInjected(LocalizationService);
      const t = l10n.instant.bind(l10n);

      return of(
        data.record.isLockedOut
          ? `<i title="${t(
              'AbpIdentity::ThisUserIsLockedOutMessage',
            )}" class="fa fa-lock text-danger mr-1"></i><span class="opc-65">${
              data.record.userName
            }</span>`
          : data.record.userName,
      );
    },
  },
  {
    type: ePropType.String,
    name: 'email',
    displayName: 'AbpIdentity::EmailAddress',
    sortable: true,
    columnWidth: 250,
    valueResolver: data => {
      const { email, emailConfirmed } = data.record;

      return of(
        (email || '') + (emailConfirmed ? `<i class="fa fa-check text-success ml-1"></i>` : ''),
      );
    },
  },
  {
    type: ePropType.String,
    name: 'phoneNumber',
    displayName: 'AbpIdentity::PhoneNumber',
    sortable: true,
    columnWidth: 250,
    valueResolver: data => {
      const { phoneNumber, phoneNumberConfirmed } = data.record;

      return of(
        (phoneNumber || '') +
          (phoneNumberConfirmed ? `<i class="fa fa-check text-success ml-1"></i>` : ''),
      );
    },
  },
]);
