import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { InjectionToken } from '@angular/core';
import { IdentitySecurityLogDto } from '@volo/abp.commercial.ng.ui';
import { DEFAULT_CLAIMS_ENTITY_ACTIONS } from '../defaults/default-claims-entity-actions';
import { DEFAULT_CLAIMS_ENTITY_PROPS } from '../defaults/default-claims-entity-props';
import {
  DEFAULT_CLAIMS_CREATE_FORM_PROPS,
  DEFAULT_CLAIMS_EDIT_FORM_PROPS,
} from '../defaults/default-claims-form-props';
import { DEFAULT_CLAIMS_TOOLBAR_ACTIONS } from '../defaults/default-claims-toolbar-actions';
import { DEFAULT_ORGANIZATION_MEMBERS_ENTITY_ACTIONS } from '../defaults/default-organization-members-entity-actions';
import { DEFAULT_ORGANIZATION_MEMBERS_ENTITY_PROPS } from '../defaults/default-organization-members-entity-props';
import { DEFAULT_ORGANIZATION_ROLES_ENTITY_ACTIONS } from '../defaults/default-organization-roles-entity-actions';
import { DEFAULT_ORGANIZATION_ROLES_ENTITY_PROPS } from '../defaults/default-organization-roles-entity-props';
import {
  DEFAULT_ORGANIZATION_UNITS_CREATE_FORM_PROPS,
  DEFAULT_ORGANIZATION_UNITS_EDIT_FORM_PROPS,
} from '../defaults/default-organization-units-form-props';
import { DEFAULT_ORGANIZATION_UNITS_TOOLBAR_ACTIONS } from '../defaults/default-organization-units-toolbar-actions';
import { DEFAULT_ROLES_ENTITY_ACTIONS } from '../defaults/default-roles-entity-actions';
import { DEFAULT_ROLES_ENTITY_PROPS } from '../defaults/default-roles-entity-props';
import {
  DEFAULT_ROLES_CREATE_FORM_PROPS,
  DEFAULT_ROLES_EDIT_FORM_PROPS,
} from '../defaults/default-roles-form-props';
import { DEFAULT_ROLES_TOOLBAR_ACTIONS } from '../defaults/default-roles-toolbar-actions';
import { DEFAULT_SECURITY_LOGS_ENTITY_ACTIONS } from '../defaults/default-security-logs-entity-actions';
import { DEFAULT_SECURITY_LOGS_ENTITY_PROPS } from '../defaults/default-security-logs-entity-props';
import { DEFAULT_SECURITY_LOGS_TOOLBAR_ACTIONS } from '../defaults/default-security-logs-toolbar-actions';
import { DEFAULT_USERS_ENTITY_ACTIONS } from '../defaults/default-users-entity-actions';
import { DEFAULT_USERS_ENTITY_PROPS } from '../defaults/default-users-entity-props';
import {
  DEFAULT_USERS_CREATE_FORM_PROPS,
  DEFAULT_USERS_EDIT_FORM_PROPS,
} from '../defaults/default-users-form-props';
import { DEFAULT_USERS_TOOLBAR_ACTIONS } from '../defaults/default-users-toolbar-actions';
import { eIdentityComponents } from '../enums/components';
import {
  ClaimTypeDto,
  IdentityRoleDto,
  IdentityUserDto,
  OrganizationUnitWithDetailsDto,
} from '../proxy/identity/models';

export const DEFAULT_IDENTITY_ENTITY_ACTIONS = {
  [eIdentityComponents.Claims]: DEFAULT_CLAIMS_ENTITY_ACTIONS,
  [eIdentityComponents.Roles]: DEFAULT_ROLES_ENTITY_ACTIONS,
  [eIdentityComponents.Users]: DEFAULT_USERS_ENTITY_ACTIONS,
  [eIdentityComponents.OrganizationMembers]: DEFAULT_ORGANIZATION_MEMBERS_ENTITY_ACTIONS,
  [eIdentityComponents.OrganizationRoles]: DEFAULT_ORGANIZATION_ROLES_ENTITY_ACTIONS,
  [eIdentityComponents.SecurityLogs]: DEFAULT_SECURITY_LOGS_ENTITY_ACTIONS,
};

export const DEFAULT_IDENTITY_TOOLBAR_ACTIONS = {
  [eIdentityComponents.Claims]: DEFAULT_CLAIMS_TOOLBAR_ACTIONS,
  [eIdentityComponents.Roles]: DEFAULT_ROLES_TOOLBAR_ACTIONS,
  [eIdentityComponents.Users]: DEFAULT_USERS_TOOLBAR_ACTIONS,
  [eIdentityComponents.OrganizationUnits]: DEFAULT_ORGANIZATION_UNITS_TOOLBAR_ACTIONS,
  [eIdentityComponents.SecurityLogs]: DEFAULT_SECURITY_LOGS_TOOLBAR_ACTIONS,
};

export const DEFAULT_IDENTITY_ENTITY_PROPS = {
  [eIdentityComponents.Claims]: DEFAULT_CLAIMS_ENTITY_PROPS,
  [eIdentityComponents.Roles]: DEFAULT_ROLES_ENTITY_PROPS,
  [eIdentityComponents.Users]: DEFAULT_USERS_ENTITY_PROPS,
  [eIdentityComponents.OrganizationMembers]: DEFAULT_ORGANIZATION_MEMBERS_ENTITY_PROPS,
  [eIdentityComponents.OrganizationRoles]: DEFAULT_ORGANIZATION_ROLES_ENTITY_PROPS,
  [eIdentityComponents.SecurityLogs]: DEFAULT_SECURITY_LOGS_ENTITY_PROPS,
};

export const DEFAULT_IDENTITY_CREATE_FORM_PROPS = {
  [eIdentityComponents.Claims]: DEFAULT_CLAIMS_CREATE_FORM_PROPS,
  [eIdentityComponents.Roles]: DEFAULT_ROLES_CREATE_FORM_PROPS,
  [eIdentityComponents.Users]: DEFAULT_USERS_CREATE_FORM_PROPS,
  [eIdentityComponents.OrganizationUnits]: DEFAULT_ORGANIZATION_UNITS_CREATE_FORM_PROPS,
};

export const DEFAULT_IDENTITY_EDIT_FORM_PROPS = {
  [eIdentityComponents.Claims]: DEFAULT_CLAIMS_EDIT_FORM_PROPS,
  [eIdentityComponents.Roles]: DEFAULT_ROLES_EDIT_FORM_PROPS,
  [eIdentityComponents.Users]: DEFAULT_USERS_EDIT_FORM_PROPS,
  [eIdentityComponents.OrganizationUnits]: DEFAULT_ORGANIZATION_UNITS_EDIT_FORM_PROPS,
};

export const IDENTITY_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken<EntityActionContributors>(
  'IDENTITY_ENTITY_ACTION_CONTRIBUTORS',
);

export const IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken<ToolbarActionContributors>(
  'IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS',
);

export const IDENTITY_ENTITY_PROP_CONTRIBUTORS = new InjectionToken<EntityPropContributors>(
  'IDENTITY_ENTITY_PROP_CONTRIBUTORS',
);

export const IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken<
  CreateFormPropContributors
>('IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS');

export const IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken<EditFormPropContributors>(
  'IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS',
);

// Fix for TS4023 -> https://github.com/microsoft/TypeScript/issues/9944#issuecomment-254693497
type EntityActionContributors = Partial<{
  [eIdentityComponents.Claims]: EntityActionContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: EntityActionContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: EntityActionContributorCallback<IdentityUserDto>[];
  [eIdentityComponents.OrganizationMembers]: EntityActionContributorCallback<IdentityUserDto>[];
  [eIdentityComponents.OrganizationRoles]: EntityActionContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.SecurityLogs]: EntityActionContributorCallback<IdentitySecurityLogDto>[];
}>;
type ToolbarActionContributors = Partial<{
  [eIdentityComponents.Claims]: ToolbarActionContributorCallback<ClaimTypeDto[]>[];
  [eIdentityComponents.Roles]: ToolbarActionContributorCallback<IdentityRoleDto[]>[];
  [eIdentityComponents.Users]: ToolbarActionContributorCallback<IdentityUserDto[]>[];
  [eIdentityComponents.OrganizationUnits]: ToolbarActionContributorCallback<
    OrganizationUnitWithDetailsDto[]
  >[];
  [eIdentityComponents.SecurityLogs]: ToolbarActionContributorCallback<IdentitySecurityLogDto[]>[];
}>;
type EntityPropContributors = Partial<{
  [eIdentityComponents.Claims]: EntityPropContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: EntityPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: EntityPropContributorCallback<IdentityUserDto>[];
  [eIdentityComponents.OrganizationMembers]: EntityPropContributorCallback<IdentityUserDto>[];
  [eIdentityComponents.OrganizationRoles]: EntityPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.SecurityLogs]: EntityPropContributorCallback<IdentitySecurityLogDto>[];
}>;
type CreateFormPropContributors = Partial<{
  [eIdentityComponents.Claims]: CreateFormPropContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: CreateFormPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: CreateFormPropContributorCallback<IdentityUserDto>[];
  [eIdentityComponents.OrganizationUnits]: CreateFormPropContributorCallback<
    OrganizationUnitWithDetailsDto
  >[];
}>;
type EditFormPropContributors = Partial<{
  [eIdentityComponents.Claims]: EditFormPropContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: EditFormPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: EditFormPropContributorCallback<IdentityUserDto>[];
  [eIdentityComponents.OrganizationUnits]: EditFormPropContributorCallback<
    OrganizationUnitWithDetailsDto
  >[];
}>;
