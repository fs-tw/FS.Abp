import type { DirectoryDescriptorDto } from './dtos/models';
import type { DirectoryProviderDefinition } from './models';
import { RestService } from '@abp/ng.core';
export declare class DirectoriesApiService {
    private restService;
    apiName: string;
    findByProviderByKeyAndGroup: (key: string, group?: string) => import("rxjs").Observable<DirectoryDescriptorDto>;
    getDefinitions: () => import("rxjs").Observable<DirectoryProviderDefinition[]>;
    constructor(restService: RestService);
}
