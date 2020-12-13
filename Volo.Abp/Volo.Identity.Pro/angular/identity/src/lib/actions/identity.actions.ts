import { Identity } from '../models/identity';
import { ABP } from '@abp/ng.core';
import {
  CreateClaimTypeDto,
  GetIdentityClaimTypesInput,
  GetIdentityRoleListInput,
  GetIdentityUsersInput,
  GetOrganizationUnitInput,
  IdentityRoleCreateDto,
  IdentityRoleUpdateDto,
  IdentityUserCreateDto,
  IdentityUserUpdateDto,
  UpdateClaimTypeDto,
} from '../proxy/identity/models';

export class GetRoles {
  static readonly type = '[Identity] Get Roles';
  constructor(public payload = {} as GetIdentityRoleListInput) {}
}

export class GetRoleById {
  static readonly type = '[Identity] Get Role By Id';
  constructor(public payload: string) {}
}

export class DeleteRole {
  static readonly type = '[Identity] Delete Role';
  constructor(public payload: string) {}
}

export class CreateRole {
  static readonly type = '[Identity] Create Role';
  constructor(public payload: IdentityRoleCreateDto) {}
}

export class UpdateRole {
  static readonly type = '[Identity] Update Role';
  constructor(public payload: IdentityRoleUpdateDto & { id: string }) {}
}

export class GetClaimTypes {
  static readonly type = '[Identity] Get ClaimTypes';
  constructor(public payload = {} as GetIdentityClaimTypesInput) {}
}

export class GetClaimTypeById {
  static readonly type = '[Identity] Get ClaimType By Id';
  constructor(public payload: string) {}
}

export class DeleteClaimType {
  static readonly type = '[Identity] Delete ClaimType';
  constructor(public payload: string) {}
}

export class CreateClaimType {
  static readonly type = '[Identity] Create ClaimType';
  constructor(public payload: CreateClaimTypeDto) {}
}

export class UpdateClaimType {
  static readonly type = '[Identity] Update ClaimType';
  constructor(public payload: UpdateClaimTypeDto & { id: string }) {}
}

export class GetUsers {
  static readonly type = '[Identity] Get Users';
  constructor(public payload = {} as GetIdentityUsersInput) {}
}

export class GetUserById {
  static readonly type = '[Identity] Get User By Id';
  constructor(public payload: string) {}
}

export class DeleteUser {
  static readonly type = '[Identity] Delete User';
  constructor(public payload: string) {}
}

export class CreateUser {
  static readonly type = '[Identity] Create User';
  constructor(public payload: IdentityUserCreateDto) {}
}

export class UpdateUser {
  static readonly type = '[Identity] Update User';
  constructor(public payload: IdentityUserUpdateDto & { id: string }) {}
}

export class GetUserRoles {
  static readonly type = '[Identity] Get User Roles';
  constructor(public payload: string) {}
}

export class UnlockUser {
  static readonly type = '[Identity] Unlock User';
  constructor(public id: string) {}
}

export class GetOrganizationUnits {
  static readonly type = '[Identity] Get Organization Units';
}
