import {
  CreateFormPropContributorCallback,
  EditFormPropContributorCallback,
  EntityActionContributorCallback,
  EntityPropContributorCallback,
  ToolbarActionContributorCallback,
} from '@abp/ng.theme.shared/extensions';
import { eIdentityComponents } from '../enums/components';
import { ClaimTypeDto, IdentityRoleDto, IdentityUserDto } from '../proxy/identity/models';

export type IdentityEntityActionContributors = Partial<{
  [eIdentityComponents.Claims]: EntityActionContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: EntityActionContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: EntityActionContributorCallback<IdentityUserDto>[];
}>;

export type IdentityToolbarActionContributors = Partial<{
  [eIdentityComponents.Claims]: ToolbarActionContributorCallback<ClaimTypeDto[]>[];
  [eIdentityComponents.Roles]: ToolbarActionContributorCallback<IdentityRoleDto[]>[];
  [eIdentityComponents.Users]: ToolbarActionContributorCallback<IdentityUserDto[]>[];
}>;

export type IdentityEntityPropContributors = Partial<{
  [eIdentityComponents.Claims]: EntityPropContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: EntityPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: EntityPropContributorCallback<IdentityUserDto>[];
}>;

export type IdentityCreateFormPropContributors = Partial<{
  [eIdentityComponents.Claims]: CreateFormPropContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: CreateFormPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: CreateFormPropContributorCallback<IdentityUserDto>[];
}>;

export type IdentityEditFormPropContributors = Partial<{
  [eIdentityComponents.Claims]: EditFormPropContributorCallback<ClaimTypeDto>[];
  [eIdentityComponents.Roles]: EditFormPropContributorCallback<IdentityRoleDto>[];
  [eIdentityComponents.Users]: EditFormPropContributorCallback<IdentityUserDto>[];
}>;

export interface IdentityConfigOptions {
  entityActionContributors?: IdentityEntityActionContributors;
  toolbarActionContributors?: IdentityToolbarActionContributors;
  entityPropContributors?: IdentityEntityPropContributors;
  createFormPropContributors?: IdentityCreateFormPropContributors;
  editFormPropContributors?: IdentityEditFormPropContributors;
}
