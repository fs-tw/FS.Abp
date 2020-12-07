import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component } from '@angular/core';
import { eIdentityComponents } from '../../../enums/components';
import { IdentityRoleDto } from '../../../proxy/identity/models';
import {
  AbstractOrganizationUnitComponent,
  OrganizationUnitConfig,
  ORGANIZATION_UNIT_CONFIG,
} from '../abstract-organization-unit/abstract-organization-unit.component';

@Component({
  selector: 'abp-organization-roles',
  templateUrl: './organization-roles.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eIdentityComponents.OrganizationRoles,
    },
    {
      provide: ORGANIZATION_UNIT_CONFIG,
      useValue: {
        getCurrentUnitsMethodName: 'getRoles',
        addUnitsMethodName: 'addRoles',
        addUnitsBodyPropName: 'roleIds',
        deleteMethodName: 'removeRole',
        deletionLocalizationKey: 'AbpIdentity::RemoveRoleFromOuWarningMessage',
      } as OrganizationUnitConfig,
    },
  ],
})
export class OrganizationRolesComponent extends AbstractOrganizationUnitComponent<
  IdentityRoleDto
> {}
