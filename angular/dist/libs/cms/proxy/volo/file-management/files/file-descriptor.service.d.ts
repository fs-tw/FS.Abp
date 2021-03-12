import type { CreateFileInput, FileDescriptorDto, FileUploadPreInfoDto, FileUploadPreInfoRequest, MoveFileInput, RenameFileInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import type { RemoteStreamContent } from '../../abp/content/models';
import * as i0 from "@angular/core";
export declare class FileDescriptorService {
    private restService;
    apiName: string;
    createByInput: (input: CreateFileInput) => import("rxjs").Observable<FileDescriptorDto>;
    deleteById: (id: string) => import("rxjs").Observable<void>;
    downloadById: (id: string) => import("rxjs").Observable<RemoteStreamContent>;
    getById: (id: string) => import("rxjs").Observable<FileDescriptorDto>;
    getContentById: (id: string) => import("rxjs").Observable<number[]>;
    getListByDirectoryId: (directoryId: string) => import("rxjs").Observable<ListResultDto<FileDescriptorDto>>;
    getPreInfoByInput: (input: FileUploadPreInfoRequest[]) => import("rxjs").Observable<FileUploadPreInfoDto[]>;
    moveByInput: (input: MoveFileInput) => import("rxjs").Observable<FileDescriptorDto>;
    renameByIdAndInput: (id: string, input: RenameFileInput) => import("rxjs").Observable<FileDescriptorDto>;
    constructor(restService: RestService);
    static ɵfac: i0.ɵɵFactoryDef<FileDescriptorService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FileDescriptorService>;
}
//# sourceMappingURL=file-descriptor.service.d.ts.map