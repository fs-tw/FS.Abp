import { Component, Input } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
// import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { NzModalRef } from 'ng-zorro-antd/modal';
// import { FileService } from '@fs-tw/theme-core';
export class UploadFileComponent {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.existFileUrls = [];
        this.fileList = [];
        this.beforeUpload = (file) => {
            let exist = this.existFileUrls.findIndex(x => x == file.name) > -1 ||
                this.fileList.findIndex(x => x.name == file.name) > -1;
            if (exist)
                return false;
            this.fileList = this.fileList.concat(file);
            return false;
        };
    }
    ngOnInit() {
    }
    delete(url) {
        this.confirmationService
            .warn('確認刪除嗎？', '系統訊息')
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.existFileUrls = this.existFileUrls.filter(x => x != url);
            }
        });
    }
}
UploadFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-upload-file',
                template: "\r\n\r\n<nz-upload nzType=\"drag\" [(nzFileList)]=\"fileList\" [nzBeforeUpload]=\"beforeUpload\" [nzMultiple]=\"true\">\r\n  <p class=\"ant-upload-drag-icon\">\r\n    <i nz-icon nzType=\"inbox\"></i>\r\n  </p>\r\n  <p class=\"ant-upload-text\">\u9EDE\u64CA\u6B64\u8655\u6216\u5C07\u6A94\u6848\u62D6\u62FD\u81F3\u6B64\u8655\u9032\u884C\u4E0A\u50B3</p>\r\n</nz-upload>\r\n\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"existFileUrls\"  nzSimple=\"false\" nzSize=\"small\" [nzShowPagination]=\"false\">\r\n  <thead>\r\n    <tr>\r\n      <th>\u6A94\u540D</th>\r\n      <th>-</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of existFileUrls\">\r\n      <td>\r\n        <!-- <a [href]=\"getUrl(data)\">{{getFileName(data)}}</a> -->\r\n        <a>{{ data }}</a>\r\n      </td>\r\n      <td>\r\n        <a (click)=\"delete(data)\" class=\"text-red\">\u522A\u9664</a>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</nz-table>",
                styles: [""]
            },] }
];
UploadFileComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
UploadFileComponent.propDecorators = {
    existFileUrls: [{ type: Input }]
};
//# sourceMappingURL=upload-file.component.js.map