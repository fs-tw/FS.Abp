import type { ApplicationConfigurationDto } from './models';
import { RestService } from '@abp/ng.core';
export declare class AbpApplicationConfigurationService {
    private restService;
    apiName: string;
    get: () => import("rxjs").Observable<ApplicationConfigurationDto>;
    constructor(restService: RestService);
}
