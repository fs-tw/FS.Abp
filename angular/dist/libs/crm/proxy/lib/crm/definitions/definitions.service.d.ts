import type { SelectOptionDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
export declare class DefinitionsService {
    private restService;
    apiName: string;
    getBasicDataDefinition: () => import("rxjs").Observable<SelectOptionDto[]>;
    constructor(restService: RestService);
}
