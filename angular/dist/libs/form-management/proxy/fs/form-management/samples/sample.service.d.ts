import type { SampleDto } from './models';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class SampleService {
    private restService;
    apiName: string;
    get: () => import("rxjs").Observable<SampleDto>;
    getAuthorized: () => import("rxjs").Observable<SampleDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<SampleService, never>;
    static ɵprov: i0.ɵɵInjectableDef<SampleService>;
}
//# sourceMappingURL=sample.service.d.ts.map