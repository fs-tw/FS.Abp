import { EnvironmentService, RestService, AuditedEntityDto } from '@abp/ng.core';
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
}
