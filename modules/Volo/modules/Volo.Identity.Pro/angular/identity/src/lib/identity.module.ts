/* tslint:disable:max-line-length */
import { TreeModule } from '@abp/ng.components/tree';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { PermissionManagementModule } from '@abp/ng.permission-management';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ModuleWithProviders, NgModule, NgModuleFactory } from '@angular/core';
import { NgbDropdownModule, NgbNavModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxsModule } from '@ngxs/store';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ClaimModalComponent } from './components/claim-modal/claim-modal.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { AbstractOrganizationUnitComponent } from './components/organization-units/abstract-organization-unit/abstract-organization-unit.component';
import { OrganizationMembersModalBodyComponent } from './components/organization-units/organization-members/organization-members-modal-body.component';
import { OrganizationMembersComponent } from './components/organization-units/organization-members/organization-members.component';
import { OrganizationRolesModalBodyComponent } from './components/organization-units/organization-roles/organization-roles-modal-body.component';
import { OrganizationRolesComponent } from './components/organization-units/organization-roles/organization-roles.component';
import { OrganizationUnitsComponent } from './components/organization-units/organization-units.component';
import { RolesComponent } from './components/roles/roles.component';
import { SecurityLogsComponent } from './components/security-logs/security-logs.component';
import { UsersComponent } from './components/users/users.component';
import { IdentityExtensionsGuard } from './guards/extensions.guard';
import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityConfigOptions } from './models/config-options';
import { IdentityState } from './states/identity.state';
import {
  IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
  IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
  IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_ENTITY_PROP_CONTRIBUTORS,
  IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
} from './tokens/extensions.token';

@NgModule({
  declarations: [
    RolesComponent,
    UsersComponent,
    ClaimModalComponent,
    ClaimsComponent,
    OrganizationUnitsComponent,
    OrganizationMembersComponent,
    OrganizationMembersModalBodyComponent,
    OrganizationRolesComponent,
    OrganizationRolesModalBodyComponent,
    AbstractOrganizationUnitComponent,
    SecurityLogsComponent,
  ],
  exports: [
    RolesComponent,
    UsersComponent,
    ClaimModalComponent,
    ClaimsComponent,
    OrganizationUnitsComponent,
    OrganizationMembersComponent,
    OrganizationMembersModalBodyComponent,
    OrganizationRolesComponent,
    OrganizationRolesModalBodyComponent,
    AbstractOrganizationUnitComponent,
    SecurityLogsComponent,
  ],
  imports: [
    NgxsModule.forFeature([IdentityState]),
    CoreModule,
    CommercialUiModule,
    IdentityRoutingModule,
    NgbNavModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    PermissionManagementModule,
    NgxValidateCoreModule,
    TreeModule,
  ],
  entryComponents: [],
})
export class IdentityModule {
  static forChild(options: IdentityConfigOptions = {}): ModuleWithProviders<IdentityModule> {
    return {
      ngModule: IdentityModule,
      providers: [
        {
          provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
          useValue: options.entityActionContributors,
        },
        {
          provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
          useValue: options.toolbarActionContributors,
        },
        {
          provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
          useValue: options.entityPropContributors,
        },
        {
          provide: IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
          useValue: options.createFormPropContributors,
        },
        {
          provide: IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
          useValue: options.editFormPropContributors,
        },
        IdentityExtensionsGuard,
      ],
    };
  }

  static forLazy(options: IdentityConfigOptions = {}): NgModuleFactory<IdentityModule> {
    return new LazyModuleFactory(IdentityModule.forChild(options));
  }
}
