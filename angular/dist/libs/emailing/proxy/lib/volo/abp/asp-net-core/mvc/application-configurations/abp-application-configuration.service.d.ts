import type { ApplicationConfigurationDto } from './models';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class AbpApplicationConfigurationService {
    private restService;
    apiName: string;
    get: () => import("rxjs").Observable<ApplicationConfigurationDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<AbpApplicationConfigurationService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AbpApplicationConfigurationService>;
}
//# sourceMappingURL=abp-application-configuration.service.d.ts.map