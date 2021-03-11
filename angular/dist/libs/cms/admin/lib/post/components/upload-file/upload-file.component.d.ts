import { OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ConfirmationService } from '@abp/ng.theme.shared';
export declare class UploadFileComponent implements OnInit {
    private confirmationService;
    existFileUrls: string[];
    fileList: NzUploadFile[];
    constructor(confirmationService: ConfirmationService);
    ngOnInit(): void;
    beforeUpload: (file: NzUploadFile) => boolean;
    delete(url: any): void;
}
