import type { DirectoryProviderDefinition } from './models';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class DirectoriesApiService {
    private restService;
    apiName: string;
    findByProviderByKeyAndGroup: (key: string, group?: string) => import("rxjs").Observable<any>;
    getDefinitions: () => import("rxjs").Observable<DirectoryProviderDefinition[]>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<DirectoriesApiService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DirectoriesApiService>;
}
//# sourceMappingURL=directories-api.service.d.ts.map