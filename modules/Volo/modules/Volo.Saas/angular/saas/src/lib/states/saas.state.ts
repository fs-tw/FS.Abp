import { Statistics } from '@abp/ng.theme.shared';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import {
  CreateEdition,
  CreateTenant,
  DeleteEdition,
  DeleteTenant,
  GetEditions,
  GetLatestTenants,
  GetTenants,
  GetUsageStatistics,
  UpdateEdition,
  UpdateTenant,
} from '../actions/saas.actions';
import { Saas } from '../models/saas';
import { EditionDto, GetTenantsInput, SaasTenantDto } from '../proxy/host/dtos/models';
import { EditionService } from '../proxy/host/edition.service';
import { TenantService } from '../proxy/host/tenant.service';

@State<Saas.State>({
  name: 'SaasState',
  defaults: { tenants: {}, editions: {}, latestTenants: [], usageStatistics: {} } as Saas.State,
})
@Injectable()
export class SaasState {
  @Selector()
  static getTenants({ tenants }: Saas.State): SaasTenantDto[] {
    return tenants.items || [];
  }

  @Selector()
  static getLatestTenants({ latestTenants }: Saas.State): SaasTenantDto[] {
    return latestTenants;
  }

  @Selector()
  static getTenantsTotalCount({ tenants }: Saas.State): number {
    return tenants.totalCount || 0;
  }

  @Selector()
  static getEditions({ editions }: Saas.State): EditionDto[] {
    return editions.items || [];
  }

  @Selector()
  static getEditionsTotalCount({ editions }: Saas.State): number {
    return editions.totalCount || 0;
  }

  @Selector()
  static getUsageStatistics({ usageStatistics }: Saas.State): Statistics.Data {
    return usageStatistics;
  }

  constructor(private tenantService: TenantService, private editionService: EditionService) {}

  @Action(GetTenants)
  getTenants({ patchState }: StateContext<Saas.State>, { payload }: GetTenants) {
    return this.tenantService.getList(payload).pipe(
      tap(tenants =>
        patchState({
          tenants,
        }),
      ),
    );
  }

  @Action(DeleteTenant)
  deleteTenant(_, { payload }: DeleteTenant) {
    return this.tenantService.delete(payload);
  }

  @Action(CreateTenant)
  createTenant(_, { payload }: CreateTenant) {
    return this.tenantService.create(payload);
  }

  @Action(UpdateTenant)
  updateTenant(_, { payload: { id, ...input } }: UpdateTenant) {
    return this.tenantService.update(id, input);
  }

  @Action(GetEditions)
  getEditions({ patchState }: StateContext<Saas.State>, { payload }: GetEditions) {
    return this.editionService.getList(payload).pipe(
      tap(editions =>
        patchState({
          editions,
        }),
      ),
    );
  }

  @Action(DeleteEdition)
  deleteEdition(_, { payload }: DeleteEdition) {
    return this.editionService.delete(payload);
  }

  @Action(CreateEdition)
  createEdition(_, { payload }: CreateEdition) {
    return this.editionService.create(payload);
  }

  @Action(UpdateEdition)
  updateEdition(_, { payload: { id, ...input } }: UpdateEdition) {
    return this.editionService.update(id, input);
  }

  @Action(GetUsageStatistics)
  getUsage({ patchState }: StateContext<Saas.State>) {
    return this.editionService.getUsageStatistics().pipe(
      tap(response => {
        patchState({
          usageStatistics: response.data,
        });
      }),
    );
  }

  @Action(GetLatestTenants)
  getLatestTenants({ patchState }: StateContext<Saas.State>) {
    return this.tenantService
      .getList({
        getEditionNames: true,
        maxResultCount: 6,
        skipCount: 0,
        sorting: 'CreationTime desc',
      } as GetTenantsInput)
      .pipe(
        tap(response => {
          patchState({
            latestTenants: response.items,
          });
        }),
      );
  }
}
