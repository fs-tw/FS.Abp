import { OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ConfirmationService } from '@abp/ng.theme.shared';
import * as i0 from "@angular/core";
export declare class UploadFileComponent implements OnInit {
    private confirmationService;
    existFileUrls: string[];
    fileList: NzUploadFile[];
    constructor(confirmationService: ConfirmationService);
    ngOnInit(): void;
    beforeUpload: (file: NzUploadFile) => boolean;
    delete(url: any): void;
    static ɵfac: i0.ɵɵFactoryDef<UploadFileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UploadFileComponent, "fs-upload-file", never, { "existFileUrls": "existFileUrls"; }, {}, never, never>;
}
//# sourceMappingURL=upload-file.component.d.ts.map