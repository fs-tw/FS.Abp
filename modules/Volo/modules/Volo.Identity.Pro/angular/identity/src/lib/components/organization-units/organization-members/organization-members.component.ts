import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component } from '@angular/core';
import { eIdentityComponents } from '../../../enums/components';
import { IdentityUserDto } from '../../../proxy/identity/models';
import {
  AbstractOrganizationUnitComponent,
  OrganizationUnitConfig,
  ORGANIZATION_UNIT_CONFIG,
} from '../abstract-organization-unit/abstract-organization-unit.component';

@Component({
  selector: 'abp-organization-members',
  templateUrl: './organization-members.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.OrganizationMembers,
    },
    {
      provide: ORGANIZATION_UNIT_CONFIG,
      useValue: {
        getCurrentUnitsMethodName: 'getMembers',
        addUnitsMethodName: 'addMembers',
        addUnitsBodyPropName: 'userIds',
        deleteMethodName: 'removeMember',
        deletionLocalizationKey: 'AbpIdentity::RemoveUserFromOuWarningMessage',
      } as OrganizationUnitConfig,
    },
  ],
})
export class OrganizationMembersComponent extends AbstractOrganizationUnitComponent<
  IdentityUserDto
> {}
