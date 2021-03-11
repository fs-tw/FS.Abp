import { Component, Input, TemplateRef } from '@angular/core';
import { ToasterService } from '@abp/ng.theme.shared';
import { ConfigStateService, EnvironmentService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.theme.shared";
import * as i2 from "@abp/ng.core";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/modal";
import * as i5 from "ng-zorro-antd/upload";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
function ImagePickerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
function ImagePickerComponent_ng_template_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c0, ctx_r10.borderWidth, ctx_r10.borderHeight));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r10.uploadText);
} }
function ImagePickerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-upload", 8);
    i0.ɵɵtemplate(1, ImagePickerComponent_ng_template_0_div_1_Template, 1, 0, "div", 9);
    i0.ɵɵtemplate(2, ImagePickerComponent_ng_template_0_ng_template_2_Template, 4, 5, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzListType", ctx_r1.uploadTemplate ? "text" : "picture")("nzBeforeUpload", ctx_r1.beforeUpload)("nzMultiple", ctx_r1.isMultiple);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.uploadTemplate || _r9);
} }
const _c1 = function (a0) { return { "max-height": a0 }; };
function ImagePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13); const item_r11 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.controllModal(true, item_r11); });
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelementStart(2, "i", 16);
    i0.ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r13); const item_r11 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.deleteFile(item_r11.fileName); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c0, ctx_r3.borderWidth, ctx_r3.borderHeight));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", item_r11.fileUrl, i0.ɵɵsanitizeUrl)("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx_r3.imageHeight));
} }
function ImagePickerComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_5_div_1_Template, 1, 0, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function ImagePickerComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
function ImagePickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_6_div_1_Template, 1, 0, "div", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.imageTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, item_r16));
} }
function ImagePickerComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_7_div_1_Template, 1, 0, "div", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.imageTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, item_r18));
} }
function ImagePickerComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImagePickerComponent_ng_container_8_div_1_Template, 1, 0, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
const _c3 = function (a0) { return { "divGrid": a0 }; };
const _c4 = function (a0) { return { "grid-template-columns": a0 }; };
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
    constructor(toasterService, environmentService, configStateService) {
        this.toasterService = toasterService;
        this.environmentService = environmentService;
        this.configStateService = configStateService;
        /** 縮圖寬度，單位 px，預設 104px */
        this.imageWidth = '104px';
        /** 縮圖高度，單位 px ，預設 104px */
        this.imageHeight = '104px';
        /** 外框寬度，單位 px ，預設 104px */
        this.borderWidth = '104px';
        /** 外框高度，單位 px ，預設 104px */
        this.borderHeight = '104px';
        /** 上傳按鈕文字 */
        this.uploadText = 'Upload';
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
            .map(x => new ImageFile(x.fileName, this.getHttpUrl(x.fileUrl)));
        this.uploadFiles = [];
        this.showFiles = [];
    }
    clear() {
        this.existFiles = [];
        this.deleteFiles = [];
        this.uploadFiles = [];
        this.showFiles = [];
    }
    getHttpUrl(url) {
        let result = url;
        if (url.includes("http"))
            return result;
        return this.environmentService.getApiUrl() + url;
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
    getUploadFiles() {
        let existFiles = this.existFiles.filter(x => !this.deleteFiles.includes(x.fileName)).map(x => new SaveFile(x.fileName, x.fileUrl, null));
        let updateFiles = this.uploadFiles.map((x) => new SaveFile(x.name, '', x));
        return existFiles.concat(updateFiles);
    }
}
ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) { return new (t || ImagePickerComponent)(i0.ɵɵdirectiveInject(i1.ToasterService), i0.ɵɵdirectiveInject(i2.EnvironmentService), i0.ɵɵdirectiveInject(i2.ConfigStateService)); };
ImagePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["image-picker"]], inputs: { imageWidth: "imageWidth", imageHeight: "imageHeight", borderWidth: "borderWidth", borderHeight: "borderHeight", uploadText: "uploadText", maxImageCount: "maxImageCount", isMultiple: "isMultiple", imageTemplate: "imageTemplate", uploadTemplate: "uploadTemplate", inLine: "inLine", showFrontButton: "showFrontButton", existFiles: "existFiles" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 15, consts: [["Upload", ""], ["Image", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzCancelText", "\u95DC\u9589", 3, "nzOkText", "nzWidth", "nzTitle", "nzVisible", "nzVisibleChange", "nzOnCancel"], [1, "divGridCenter"], [2, "max-width", "100%", "max-height", "500px", 3, "src"], [1, "avatar-uploader", 3, "nzListType", "nzBeforeUpload", "nzMultiple"], [4, "ngTemplateOutlet"], ["UploadImage", ""], [1, "divBorder", "divGridCenter", 3, "ngStyle"], [2, "font-size", "16px", "text-align", "center"], [1, "ant-upload-text"], [1, "divBorder", "imgGrid", "divGridCenter", 3, "ngStyle", "click"], [1, "imgGridClose"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [2, "max-width", "100%", 3, "src", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ImagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ImagePickerComponent_ng_template_0_Template, 4, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, ImagePickerComponent_ng_template_2_Template, 4, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵtemplate(5, ImagePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        i0.ɵɵtemplate(6, ImagePickerComponent_ng_container_6_Template, 2, 4, "ng-container", 4);
        i0.ɵɵtemplate(7, ImagePickerComponent_ng_container_7_Template, 2, 4, "ng-container", 4);
        i0.ɵɵtemplate(8, ImagePickerComponent_ng_container_8_Template, 2, 1, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "nz-modal", 5);
        i0.ɵɵlistener("nzVisibleChange", function ImagePickerComponent_Template_nz_modal_nzVisibleChange_9_listener($event) { return ctx.viewImage.isVisabled = $event; })("nzOnCancel", function ImagePickerComponent_Template_nz_modal_nzOnCancel_9_listener() { return ctx.controllModal(false, ctx.viewImage.image); });
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelement(11, "img", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c3, ctx.inLine))("ngStyle", i0.ɵɵpureFunction1(13, _c4, ctx.inLine ? "repeat(auto-fit, " + ctx.borderWidth + ")" : "unset"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canUpload && ctx.showFrontButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.existFiles);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.showFiles);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canUpload && !ctx.showFrontButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzOkText", null)("nzWidth", 1000)("nzTitle", "\u9810\u89BD\u5716")("nzVisible", ctx.viewImage.isVisabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.viewImage.image.fileUrl, i0.ɵɵsanitizeUrl);
    } }, directives: [i3.NgClass, i3.NgStyle, i3.NgIf, i3.NgForOf, i4.NzModalComponent, i5.NzUploadComponent, i3.NgTemplateOutlet, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective], styles: [".divBorder[_ngcontent-%COMP%]{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter[_ngcontent-%COMP%]{display:grid!important;place-items:center}.divGrid[_ngcontent-%COMP%]{display:grid;grid-gap:1rem}.imgGrid[_ngcontent-%COMP%]{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose[_ngcontent-%COMP%]{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}  .ant-upload.ant-upload-select-picture-card{margin:unset!important}  .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImagePickerComponent, [{
        type: Component,
        args: [{
                selector: 'image-picker',
                templateUrl: './image-picker.component.html',
                styleUrls: ['./image-picker.component.css']
            }]
    }], function () { return [{ type: i1.ToasterService }, { type: i2.EnvironmentService }, { type: i2.ConfigStateService }]; }, { imageWidth: [{
            type: Input
        }], imageHeight: [{
            type: Input
        }], borderWidth: [{
            type: Input
        }], borderHeight: [{
            type: Input
        }], uploadText: [{
            type: Input
        }], maxImageCount: [{
            type: Input
        }], isMultiple: [{
            type: Input
        }], imageTemplate: [{
            type: Input
        }], uploadTemplate: [{
            type: Input
        }], inLine: [{
            type: Input
        }], showFrontButton: [{
            type: Input
        }], existFiles: [{
            type: Input
        }] }); })();
//# sourceMappingURL=image-picker.component.js.map