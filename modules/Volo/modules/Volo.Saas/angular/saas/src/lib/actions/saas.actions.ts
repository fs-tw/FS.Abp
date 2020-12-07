import {
  EditionCreateDto,
  EditionUpdateDto,
  GetEditionsInput,
  GetTenantsInput,
  SaasTenantCreateDto,
  SaasTenantUpdateDto,
} from '../proxy/host/dtos/models';

export class GetTenants {
  static readonly type = '[Saas] Get Tenant';
  constructor(public payload?: GetTenantsInput) {}
}

export class GetTenantById {
  static readonly type = '[Saas] Get Tenant By Id';
  constructor(public payload: string) {}
}

export class CreateTenant {
  static readonly type = '[Saas] Create Tenant';
  constructor(public payload: SaasTenantCreateDto) {}
}

export class UpdateTenant {
  static readonly type = '[Saas] Update Tenant';
  constructor(public payload: SaasTenantUpdateDto & { id: string }) {}
}

export class DeleteTenant {
  static readonly type = '[Saas] Delete Tenant';
  constructor(public payload: string) {}
}

export class GetEditions {
  static readonly type = '[Saas] Get Edition';
  constructor(public payload?: GetEditionsInput) {}
}

export class GetEditionById {
  static readonly type = '[Saas] Get Edition By Id';
  constructor(public payload: string) {}
}

export class CreateEdition {
  static readonly type = '[Saas] Create Edition';
  constructor(public payload: EditionCreateDto) {}
}

export class UpdateEdition {
  static readonly type = '[Saas] Update Edition';
  constructor(public payload: EditionUpdateDto & { id: string }) {}
}

export class DeleteEdition {
  static readonly type = '[Saas] Delete Edition';
  constructor(public payload: string) {}
}

export class GetUsageStatistics {
  static readonly type = '[Saas] Get Usage Statistics';
}

export class GetLatestTenants {
  static readonly type = '[Saas] Get Latest Tenatns';
}
