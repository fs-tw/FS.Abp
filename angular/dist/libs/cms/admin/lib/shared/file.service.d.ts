import { EnvironmentService, RestService, AuditedEntityDto } from '@abp/ng.core';
import * as i0 from "@angular/core";
export interface FileDescriptorDto extends AuditedEntityDto<string> {
    directoryId?: string;
    name: string;
    mimeType: string;
    size: number;
}
export declare class FileService {
    private restService;
    private environmentService;
    constructor(restService: RestService, environmentService: EnvironmentService);
    getFileUrl(id: any): string;
    uploadFile(file: File, directoryId: string): import("rxjs").Observable<FileDescriptorDto>;
    static ɵfac: i0.ɵɵFactoryDef<FileService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FileService>;
}
//# sourceMappingURL=file.service.d.ts.map