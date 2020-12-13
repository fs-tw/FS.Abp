import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { pluck, tap } from 'rxjs/operators';
import {
  CreateClaimType,
  CreateRole,
  CreateUser,
  DeleteClaimType,
  DeleteRole,
  DeleteUser,
  GetClaimTypeById,
  GetClaimTypes,
  GetOrganizationUnits,
  GetRoleById,
  GetRoles,
  GetUserById,
  GetUserRoles,
  GetUsers,
  UnlockUser,
  UpdateClaimType,
  UpdateRole,
  UpdateUser,
} from '../actions/identity.actions';
import { Identity } from '../models/identity';
import { IdentityClaimTypeService } from '../proxy/identity/identity-claim-type.service';
import { IdentityRoleService } from '../proxy/identity/identity-role.service';
import { IdentityUserService } from '../proxy/identity/identity-user.service';
import { ClaimTypeDto, IdentityRoleDto, IdentityUserDto } from '../proxy/identity/models';
import { OrganizationUnitService } from '../proxy/identity/organization-unit.service';

@State<Identity.State>({
  name: 'IdentityState',
  defaults: {
    roles: {},
    users: {},
    claims: {},
    selectedClaim: {},
    selectedUserRoles: [],
    organizationUnits: {},
  } as Identity.State,
})
@Injectable()
export class IdentityState {
  @Selector()
  static getRoles({ roles }: Identity.State): IdentityRoleDto[] {
    return roles.items || [];
  }

  @Selector()
  static getRolesTotalCount({ roles }: Identity.State): number {
    return roles.totalCount || 0;
  }

  @Selector()
  static getUsers({ users }: Identity.State): IdentityUserDto[] {
    return users.items || [];
  }

  @Selector()
  static getUsersTotalCount({ users }: Identity.State): number {
    return users.totalCount || 0;
  }

  @Selector()
  static getClaimTypes({ claims }: Identity.State): ClaimTypeDto[] {
    return claims.items || [];
  }

  @Selector()
  static getClaimTypesTotalCount({ claims }: Identity.State): number {
    return claims.totalCount || 0;
  }

  constructor(
    private roleService: IdentityRoleService,
    private userService: IdentityUserService,
    private claimTypeService: IdentityClaimTypeService,
    private organizationUnitService: OrganizationUnitService,
  ) {}

  @Action(GetRoles)
  getRoles({ patchState }: StateContext<Identity.State>, { payload }: GetRoles) {
    return this.roleService.getList(payload).pipe(
      tap(roles =>
        patchState({
          roles,
        }),
      ),
    );
  }

  @Action(DeleteRole)
  deleteRole(_, { payload }: GetRoleById) {
    return this.roleService.delete(payload);
  }

  @Action(CreateRole)
  addRole(_, { payload }: CreateRole) {
    return this.roleService.create(payload);
  }

  @Action(UpdateRole)
  updateRole(_, { payload: { id, ...input } }: UpdateRole) {
    return this.roleService.update(id, input);
  }

  @Action(GetUsers)
  getUsers({ patchState }: StateContext<Identity.State>, { payload }: GetUsers) {
    return this.userService.getList(payload).pipe(
      tap(users =>
        patchState({
          users,
        }),
      ),
    );
  }

  @Action(DeleteUser)
  deleteUser(_, { payload }: GetUserById) {
    return this.userService.delete(payload);
  }

  @Action(CreateUser)
  createUser(_, { payload }: CreateUser) {
    return this.userService.create(payload);
  }

  @Action(UpdateUser)
  updateUser(_, { payload: { id, ...input } }: UpdateUser) {
    return this.userService.update(id, input);
  }

  @Action(UnlockUser)
  unlockUser(_, { id }: UnlockUser) {
    return this.userService.unlock(id);
  }

  @Action(GetUserRoles)
  getUserRoles({ patchState }: StateContext<Identity.State>, { payload }: GetUserRoles) {
    return this.userService.getRoles(payload).pipe(
      pluck('items'),
      tap(selectedUserRoles =>
        patchState({
          selectedUserRoles,
        }),
      ),
    );
  }

  @Action(GetClaimTypes)
  getClaimTypes({ patchState }: StateContext<Identity.State>, { payload }: GetClaimTypes) {
    return this.claimTypeService.getList(payload).pipe(
      tap(claims =>
        patchState({
          claims,
        }),
      ),
    );
  }

  @Action(GetClaimTypeById)
  getClaimType({ patchState }: StateContext<Identity.State>, { payload }: GetClaimTypeById) {
    return this.claimTypeService.get(payload).pipe(
      tap(selectedClaim =>
        patchState({
          selectedClaim,
        }),
      ),
    );
  }

  @Action(DeleteClaimType)
  deleteClaimType(_, { payload }: GetClaimTypeById) {
    return this.claimTypeService.delete(payload);
  }

  @Action(CreateClaimType)
  createClaimType(_, { payload }: CreateClaimType) {
    return this.claimTypeService.create(payload);
  }

  @Action(UpdateClaimType)
  updateClaimType(_, { payload: { id, ...input } }: UpdateClaimType) {
    return this.claimTypeService.update(id, input);
  }

  @Action(GetOrganizationUnits)
  getOrganizationUnits({ patchState }: StateContext<Identity.State>) {
    return this.organizationUnitService.getListAll().pipe(
      tap(organizationUnits =>
        patchState({
          organizationUnits,
        }),
      ),
    );
  }
}
