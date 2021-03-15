import type { DirectoryDescriptorDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
export declare class DirectoryDescriptorService {
    private restService;
    apiName: string;
    createByInput: (input: any) => import("rxjs").Observable<DirectoryDescriptorDto>;
    deleteById: (id: string) => import("rxjs").Observable<void>;
    getById: (id: string) => import("rxjs").Observable<DirectoryDescriptorDto>;
    getContentByInput: (input: any) => import("rxjs").Observable<PagedResultDto<any>>;
    getListByParentId: (parentId: string) => import("rxjs").Observable<ListResultDto<any>>;
    moveByInput: (input: any) => import("rxjs").Observable<DirectoryDescriptorDto>;
    renameByIdAndInput: (id: string, input: any) => import("rxjs").Observable<DirectoryDescriptorDto>;
    constructor(restService: RestService);
}
