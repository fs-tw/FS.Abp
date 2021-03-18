import { Component, Input, TemplateRef } from '@angular/core';
import { FileService } from '../../../shared';
import { ToasterService } from '@abp/ng.theme.shared';
import { EnvironmentService } from '@abp/ng.core';
export class ImageFile {
    constructor(fileName = '', fileUrl = '') {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
}
export class SaveFile {
    constructor(fileName, fileUrl, file) {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.file = file;
        this.isUpload = this.file != null;
    }
}
class ViewImage {
    constructor() {
        this.image = new ImageFile();
        this.isVisabled = false;
    }
}
export class ImagePickerComponent {
    constructor(toasterService, environmentService, fileService) {
        this.toasterService = toasterService;
        this.environmentService = environmentService;
        this.fileService = fileService;
        /** 縮圖寬度，單位 px，預設 104px */
        this.imageWidth = '104px';
        /** 縮圖高度，單位 px ，預設 104px */
        this.imageHeight = '104px';
        /** 外框寬度，單位 px ，預設 104px */
        this.borderWidth = '104px';
        /** 外框高度，單位 px ，預設 104px */
        this.borderHeight = '104px';
        /** 上傳最大數量 */
        this.maxImageCount = null;
        /** 是否可同時選多張圖片 */
        this.isMultiple = true;
        /** 是否排列在同一行，同一行時行寬同 imageWidth */
        this.inLine = true;
        /** 上傳按鈕顯示於前面 */
        this.showFrontButton = true;
        /** 原已上傳圖片 */
        this.existFiles = [];
        /** 原已上傳圖片被刪除的檔名 */
        this.deleteFiles = [];
        /** 本次上傳所顯示圖片 */
        this.showFiles = [];
        /** 本次上傳圖片 */
        this.uploadFiles = [];
        /** 顯示預覽圖 modal */
        this.viewImage = new ViewImage();
        // private getHttpUrl(url: string): string {
        //   let result = url;
        //   if (url.includes("http")) return result;
        //   return this.environmentService.getApiUrl() + url;
        // }
        this.beforeUpload = (file) => {
            let isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                this.toasterService.error("圖片格式須為 jpg 或 png");
                return false;
            }
            let fileName = file.name;
            let hasExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
            let hasShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;
            if (hasExistImage || hasShowImage)
                return false;
            let imgFile = file;
            this.getBase64(imgFile, (img) => {
                if (!this.canUpload) {
                    this.toasterService.error("圖片數已達上限");
                    return;
                }
                this.uploadFiles.push(imgFile);
                this.showFiles.push(new ImageFile(fileName, img));
            });
            return false;
        };
    }
    get canUpload() {
        let imageNumber = this.existFiles.length + this.uploadFiles.length;
        return this.maxImageCount == null || imageNumber < this.maxImageCount;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.existFiles = this.existFiles
            .filter(x => x.fileUrl)
            .map(x => new ImageFile(x.fileName, this.fileService.getFileUrl(x.fileUrl)));
        this.uploadFiles = [];
        this.showFiles = [];
        this.deleteFiles = [];
    }
    clear() {
        this.existFiles = [];
        this.deleteFiles = [];
        this.uploadFiles = [];
        this.showFiles = [];
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    deleteFile(fileName) {
        let inExistImage = this.existFiles.findIndex(x => x.fileName == fileName) > -1;
        let inShowImage = this.showFiles.findIndex(x => x.fileName == fileName) > -1;
        // 現有圖片刪除
        if (inExistImage) {
            this.existFiles = this.existFiles.filter(x => x.fileName != fileName);
            this.deleteFiles.push(fileName);
            return;
        }
        // 上傳圖片刪除
        if (inShowImage) {
            this.showFiles = this.showFiles.filter(x => x.fileName != fileName);
            this.uploadFiles = this.uploadFiles.filter(x => x.name != fileName);
        }
    }
    controllModal(state, image = new ImageFile()) {
        this.viewImage.image = image;
        this.viewImage.isVisabled = state;
    }
    getDeleteFileNames() {
        return this.deleteFiles;
    }
    getNewUploadFiles() {
        let updateFiles = this.uploadFiles.map((x) => new SaveFile(x.name, '', x));
        return updateFiles;
    }
    getUploadFiles() {
        let existFiles = this.existFiles.filter(x => !this.deleteFiles.includes(x.fileName)).map(x => new SaveFile(x.fileName, x.fileUrl, null));
        let updateFiles = this.uploadFiles.map((x) => new SaveFile(x.name, '', x));
        return existFiles.concat(updateFiles);
    }
}
ImagePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-picker',
                template: "<ng-template #Upload>\r\n    <nz-upload\r\n        class=\"avatar-uploader\" style=\"display: grid;\"\r\n        [nzListType]=\"uploadTemplate ? 'text' : 'picture'\"\r\n        [nzBeforeUpload]=\"beforeUpload\" \r\n        [nzMultiple]=\"isMultiple\"\r\n        >\r\n\r\n        <div *ngTemplateOutlet=\"uploadTemplate || UploadImage\"></div>\r\n        <ng-template #UploadImage>\r\n            <div class=\"divBorder divGridCenter\" [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\">\r\n                <div *ngTemplateOutlet=\"uploadTextTemplate || UploadText\"></div>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template #UploadText>\r\n            <div style=\"font-size: 16px; text-align: center;\">\r\n                <div class=\"ant-upload-text\">{{'Cms::FS.Message:Upload'|abpLocalization}}</div>\r\n            </div>\r\n        </ng-template>\r\n    </nz-upload>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n    <div class=\"divBorder imgGrid divGridCenter\" \r\n        [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\"\r\n        (click)=\"controllModal(true, item.file)\">\r\n\r\n        <div class=\"imgGridClose\">\r\n            <i (click)=\"deleteFile(item.file.fileName)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n        </div>\r\n\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-width: 100%;\" [ngStyle]=\"{ 'max-height': imageHeight }\" />\r\n    </div>\r\n</ng-template>\r\n\r\n<div [ngClass]=\"{ 'divGrid': inLine }\" [ngStyle]=\"{ 'grid-template-columns': inLine ? 'repeat(auto-fit, ' + borderWidth + ')' : 'unset' }\">\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u524D) -->\r\n    <ng-container *ngIf=\"canUpload && showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u50B3\u5165\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of existFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of showFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u5F8C) -->\r\n    <ng-container *ngIf=\"canUpload && !showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n    \r\n</div>\r\n\r\n<nz-modal [nzOkText]=\"null\" nzCancelText=\"{{'AbpUi::Cancel'|abpLocalization}}\" [nzWidth]=\"1000\"\r\n        nzTitle=\"{{'Cms::FS.Message:Preview'|abpLocalization}}\" \r\n        [(nzVisible)]=\"viewImage.isVisabled\" \r\n        (nzOnCancel)=\"controllModal(false, viewImage.image)\">\r\n    <div class=\"divGridCenter\">\r\n        <img [src]=\"viewImage.image.fileUrl\" style=\"max-width: 100%; max-height: 500px;\" />\r\n    </div>\r\n</nz-modal>",
                styles: [".divBorder{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter{display:grid!important;place-items:center}.divGrid{display:grid;grid-gap:1rem}.imgGrid{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose i{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}::ng-deep .ant-upload.ant-upload-select-picture-card{margin:unset!important}::ng-deep .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"]
            },] }
];
ImagePickerComponent.ctorParameters = () => [
    { type: ToasterService },
    { type: EnvironmentService },
    { type: FileService }
];
ImagePickerComponent.propDecorators = {
    imageWidth: [{ type: Input }],
    imageHeight: [{ type: Input }],
    borderWidth: [{ type: Input }],
    borderHeight: [{ type: Input }],
    maxImageCount: [{ type: Input }],
    isMultiple: [{ type: Input }],
    imageTemplate: [{ type: Input }],
    uploadTemplate: [{ type: Input }],
    uploadTextTemplate: [{ type: Input }],
    inLine: [{ type: Input }],
    showFrontButton: [{ type: Input }],
    existFiles: [{ type: Input }]
};
//# sourceMappingURL=image-picker.component.js.map