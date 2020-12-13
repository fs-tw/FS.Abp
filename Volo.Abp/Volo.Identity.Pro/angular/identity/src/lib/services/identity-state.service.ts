import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { IdentityState } from '../states/identity.state';
import {
  GetRoles,
  GetRoleById,
  DeleteRole,
  UpdateRole,
  GetClaimTypes,
  GetClaimTypeById,
  DeleteClaimType,
  CreateClaimType,
  GetUsers,
  GetUserById,
  DeleteUser,
  CreateRole,
  CreateUser,
  UpdateUser,
  GetUserRoles,
  UpdateClaimType,
} from '../actions/identity.actions';

@Injectable({
  providedIn: 'root',
})
export class IdentityStateService {
  constructor(private store: Store) {}

  getRoles() {
    return this.store.selectSnapshot(IdentityState.getRoles);
  }

  getRolesTotalCount() {
    return this.store.selectSnapshot(IdentityState.getRolesTotalCount);
  }

  getUsers() {
    return this.store.selectSnapshot(IdentityState.getUsers);
  }

  getUsersTotalCount() {
    return this.store.selectSnapshot(IdentityState.getUsersTotalCount);
  }

  getClaimTypes() {
    return this.store.selectSnapshot(IdentityState.getClaimTypes);
  }

  getClaimTypesTotalCount() {
    return this.store.selectSnapshot(IdentityState.getClaimTypesTotalCount);
  }

  dispatchGetRoles(...args: ConstructorParameters<typeof GetRoles>) {
    return this.store.dispatch(new GetRoles(...args));
  }

  dispatchGetRoleById(...args: ConstructorParameters<typeof GetRoleById>) {
    return this.store.dispatch(new GetRoleById(...args));
  }

  dispatchDeleteRole(...args: ConstructorParameters<typeof DeleteRole>) {
    return this.store.dispatch(new DeleteRole(...args));
  }

  dispatchCreateRole(...args: ConstructorParameters<typeof CreateRole>) {
    return this.store.dispatch(new CreateRole(...args));
  }

  dispatchUpdateRole(...args: ConstructorParameters<typeof UpdateRole>) {
    return this.store.dispatch(new UpdateRole(...args));
  }

  dispatchGetClaimTypes(...args: ConstructorParameters<typeof GetClaimTypes>) {
    return this.store.dispatch(new GetClaimTypes(...args));
  }

  dispatchGetClaimTypeById(...args: ConstructorParameters<typeof GetClaimTypeById>) {
    return this.store.dispatch(new GetClaimTypeById(...args));
  }

  dispatchDeleteClaimType(...args: ConstructorParameters<typeof DeleteClaimType>) {
    return this.store.dispatch(new DeleteClaimType(...args));
  }

  dispatchCreateClaimType(...args: ConstructorParameters<typeof CreateClaimType>) {
    return this.store.dispatch(new CreateClaimType(...args));
  }

  dispatchUpdateClaimType(...args: ConstructorParameters<typeof UpdateClaimType>) {
    return this.store.dispatch(new UpdateClaimType(...args));
  }

  dispatchGetUsers(...args: ConstructorParameters<typeof GetUsers>) {
    return this.store.dispatch(new GetUsers(...args));
  }

  dispatchGetUserById(...args: ConstructorParameters<typeof GetUserById>) {
    return this.store.dispatch(new GetUserById(...args));
  }

  dispatchDeleteUser(...args: ConstructorParameters<typeof DeleteUser>) {
    return this.store.dispatch(new DeleteUser(...args));
  }

  dispatchCreateUser(...args: ConstructorParameters<typeof CreateUser>) {
    return this.store.dispatch(new CreateUser(...args));
  }

  dispatchUpdateUser(...args: ConstructorParameters<typeof UpdateUser>) {
    return this.store.dispatch(new UpdateUser(...args));
  }

  dispatchGetUserRoles(...args: ConstructorParameters<typeof GetUserRoles>) {
    return this.store.dispatch(new GetUserRoles(...args));
  }
}
