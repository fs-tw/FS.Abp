import type { CreateDirectoryInput, DirectoryContentDto, DirectoryContentRequestInput, DirectoryDescriptorDto, DirectoryDescriptorInfoDto, MoveDirectoryInput, RenameDirectoryInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class DirectoryDescriptorService {
    private restService;
    apiName: string;
    createByInput: (input: CreateDirectoryInput) => import("rxjs").Observable<DirectoryDescriptorDto>;
    deleteById: (id: string) => import("rxjs").Observable<void>;
    getById: (id: string) => import("rxjs").Observable<DirectoryDescriptorDto>;
    getContentByInput: (input: DirectoryContentRequestInput) => import("rxjs").Observable<PagedResultDto<DirectoryContentDto>>;
    getListByParentId: (parentId: string) => import("rxjs").Observable<ListResultDto<DirectoryDescriptorInfoDto>>;
    moveByInput: (input: MoveDirectoryInput) => import("rxjs").Observable<DirectoryDescriptorDto>;
    renameByIdAndInput: (id: string, input: RenameDirectoryInput) => import("rxjs").Observable<DirectoryDescriptorDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<DirectoryDescriptorService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DirectoryDescriptorService>;
}
//# sourceMappingURL=directory-descriptor.service.d.ts.map