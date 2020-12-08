import { PagedResultDto } from '@abp/ng.core';
import { EditionDto, SaasTenantDto } from '../proxy/host/dtos/models';

export namespace Saas {
  export interface State {
    tenants: PagedResultDto<SaasTenantDto>;
    editions: PagedResultDto<EditionDto>;
    usageStatistics: Record<string, number>;
    latestTenants: SaasTenantDto[];
  }
}
