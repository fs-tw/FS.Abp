import { RestService } from '@abp/ng.core';
import type { FindTenantResultDto } from '../../../volo/abp/asp-net-core/mvc/multi-tenancy/models';
export declare class AbpTenantService {
    private restService;
    apiName: string;
    findTenantByIdById: (id: string) => import("rxjs").Observable<FindTenantResultDto>;
    findTenantByNameByName: (name: string) => import("rxjs").Observable<FindTenantResultDto>;
    constructor(restService: RestService);
}
