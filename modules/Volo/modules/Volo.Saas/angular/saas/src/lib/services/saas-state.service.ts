import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SaasState } from '../states';
import {
  GetTenants,
  GetTenantById,
  CreateTenant,
  UpdateTenant,
  DeleteTenant,
  GetEditions,
  GetEditionById,
  CreateEdition,
  UpdateEdition,
  DeleteEdition,
  GetUsageStatistics,
  GetLatestTenants,
} from '../actions/saas.actions';

@Injectable({
  providedIn: 'root',
})
export class SaasStateService {
  constructor(private store: Store) {}

  getTenants() {
    return this.store.selectSnapshot(SaasState.getTenants);
  }

  getLatestTenants() {
    return this.store.selectSnapshot(SaasState.getLatestTenants);
  }

  getTenantsTotalCount() {
    return this.store.selectSnapshot(SaasState.getTenantsTotalCount);
  }

  getEditions() {
    return this.store.selectSnapshot(SaasState.getEditions);
  }

  getEditionsTotalCount() {
    return this.store.selectSnapshot(SaasState.getEditionsTotalCount);
  }

  getUsageStatistics() {
    return this.store.selectSnapshot(SaasState.getUsageStatistics);
  }

  dispatchGetTenants(...args: ConstructorParameters<typeof GetTenants>) {
    return this.store.dispatch(new GetTenants(...args));
  }

  dispatchGetTenantById(...args: ConstructorParameters<typeof GetTenantById>) {
    return this.store.dispatch(new GetTenantById(...args));
  }

  dispatchCreateTenant(...args: ConstructorParameters<typeof CreateTenant>) {
    return this.store.dispatch(new CreateTenant(...args));
  }

  dispatchUpdateTenant(...args: ConstructorParameters<typeof UpdateTenant>) {
    return this.store.dispatch(new UpdateTenant(...args));
  }

  dispatchDeleteTenant(...args: ConstructorParameters<typeof DeleteTenant>) {
    return this.store.dispatch(new DeleteTenant(...args));
  }

  dispatchGetEditions(...args: ConstructorParameters<typeof GetEditions>) {
    return this.store.dispatch(new GetEditions(...args));
  }

  dispatchGetEditionById(...args: ConstructorParameters<typeof GetEditionById>) {
    return this.store.dispatch(new GetEditionById(...args));
  }

  dispatchCreateEdition(...args: ConstructorParameters<typeof CreateEdition>) {
    return this.store.dispatch(new CreateEdition(...args));
  }

  dispatchUpdateEdition(...args: ConstructorParameters<typeof UpdateEdition>) {
    return this.store.dispatch(new UpdateEdition(...args));
  }

  dispatchDeleteEdition(...args: ConstructorParameters<typeof DeleteEdition>) {
    return this.store.dispatch(new DeleteEdition(...args));
  }

  dispatchGetUsageStatistics() {
    return this.store.dispatch(new GetUsageStatistics());
  }

  dispatchGetLatestTenants() {
    return this.store.dispatch(new GetLatestTenants());
  }
}
