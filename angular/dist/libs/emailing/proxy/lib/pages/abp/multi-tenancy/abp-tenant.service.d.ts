import { RestService } from '@abp/ng.core';
import type { FindTenantResultDto } from '../../../volo/abp/asp-net-core/mvc/multi-tenancy/models';
import * as i0 from "@angular/core";
export declare class AbpTenantService {
    private restService;
    apiName: string;
    findTenantByIdById: (id: string) => import("rxjs").Observable<FindTenantResultDto>;
    findTenantByNameByName: (name: string) => import("rxjs").Observable<FindTenantResultDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<AbpTenantService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AbpTenantService>;
}
//# sourceMappingURL=abp-tenant.service.d.ts.map