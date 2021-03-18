import type { SampleDto } from './models';
import { RestService } from '@abp/ng.core';
export declare class SampleService {
    private restService;
    apiName: string;
    get: () => import("rxjs").Observable<SampleDto>;
    getAuthorized: () => import("rxjs").Observable<SampleDto>;
    constructor(restService: RestService);
}
