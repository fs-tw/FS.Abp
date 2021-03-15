import { OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ConfirmationService } from '@abp/ng.theme.shared';
export declare class FileInfo {
    fileName: string;
    fileUrl: string;
    constructor(fileName?: string, fileUrl?: string);
}
export declare class FileData {
    isUpload: boolean;
    file: File;
    fileName: string;
    fileUrl: string;
    constructor(fileName: string, fileUrl: string, file: File);
}
export declare class UploadFileComponent implements OnInit {
    private confirmationService;
    existFiles: FileInfo[];
    fileList: NzUploadFile[];
    constructor(confirmationService: ConfirmationService);
    ngOnInit(): void;
    beforeUpload: (file: NzUploadFile) => boolean;
    delete(url: any): void;
    getNewUploadFiles(): FileData[];
}
