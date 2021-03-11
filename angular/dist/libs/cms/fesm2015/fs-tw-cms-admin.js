import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelement, Component, ɵɵinject, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction2, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵsanitizeUrl, ɵɵpureFunction1, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵdirectiveInject, ɵɵNgOnChangesFeature, Input, EventEmitter, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, Output, ɵɵpipe, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InternalStore, EnvironmentService, ConfigStateService, LocalizationPipe, LazyModuleFactory, CoreModule, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgClass, NgStyle, NgIf, NgForOf, NgTemplateOutlet, DatePipe, CommonModule } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NgControlStatus, NgModel, NumberValueAccessor, DefaultValueAccessor, RequiredValidator, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillViewComponent, QuillModule } from 'ngx-quill';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputDirective, NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NzCellAlignDirective, NzTdAddOnComponent, NzTrExpandDirective, NzTableFixedRowComponent, NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalComponent, NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioGroupComponent, NzRadioComponent, NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadComponent, NzUploadModule } from 'ng-zorro-antd/upload';
import { SEContainerComponent, SEComponent, SEModule } from '@delon/abc/se';
import { Fs } from '@fs-tw/cms/proxy';
import { cloneDeep } from 'lodash';
import { ToasterService } from '@abp/ng.theme.shared';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';

class PostStateService {
    constructor() {
        this.store = new InternalStore({});
    }
    getBlog() {
        return this.store.sliceState(state => state.Blog);
    }
    setBlog(blog) {
        this.store.patch({ Blog: blog });
    }
}
PostStateService.ɵfac = function PostStateService_Factory(t) { return new (t || PostStateService)(); };
PostStateService.ɵprov = ɵɵdefineInjectable({ token: PostStateService, factory: PostStateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PostStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = ɵɵdefineComponent({ type: LayoutComponent, selectors: [["fs-layout"]], decls: 1, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "router-outlet");
    } }, directives: [RouterOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LayoutComponent, [{
        type: Component,
        args: [{
                selector: 'fs-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.less']
            }]
    }], function () { return []; }, null); })();

class PageService {
    constructor(blogService, postService
    // private postService: PostsApiService,
    // private definitionsService: DefinitionsService,
    // private tagsApiService: TagsApiService,
    ) {
        this.blogService = blogService;
        this.postService = postService;
    }
    //#region  Blog
    getBlogs(input) {
        return this.blogService.getListByBlogGetList(input);
    }
    getBlogById(id) {
        return this.blogService.getByBlogPrimaryKey({ id: id });
    }
    createBlog(input) {
        return this.blogService.createByBlogCreate(input);
    }
    updateBlog(id, input) {
        return this.blogService.updateByBlogPrimaryKeyAndBlogUpdate({ id: id }, input);
    }
    //#endregion
    //#region Post
    getPostsByBlogId(input) {
        return this.postService.getPostsByBlogIdByInput(input);
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(ɵɵinject(Fs.Cms.Blogs.BlogsApiService), ɵɵinject(Fs.Cms.Posts.PostsApiService)); };
PageService.ɵprov = ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PageService, [{
        type: Injectable
    }], function () { return [{ type: Fs.Cms.Blogs.BlogsApiService }, { type: Fs.Cms.Posts.PostsApiService }]; }, null); })();

function ImagePickerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
function ImagePickerComponent_ng_template_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelementStart(1, "div", 12);
    ɵɵelementStart(2, "div", 13);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction2(2, _c0, ctx_r10.borderWidth, ctx_r10.borderHeight));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r10.uploadText);
} }
function ImagePickerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-upload", 8);
    ɵɵtemplate(1, ImagePickerComponent_ng_template_0_div_1_Template, 1, 0, "div", 9);
    ɵɵtemplate(2, ImagePickerComponent_ng_template_0_ng_template_2_Template, 4, 5, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzListType", ctx_r1.uploadTemplate ? "text" : "picture")("nzBeforeUpload", ctx_r1.beforeUpload)("nzMultiple", ctx_r1.isMultiple);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.uploadTemplate || _r9);
} }
const _c1 = function (a0) { return { "max-height": a0 }; };
function ImagePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14);
    ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_div_click_0_listener() { ɵɵrestoreView(_r13); const item_r11 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(); return ctx_r12.controllModal(true, item_r11); });
    ɵɵelementStart(1, "div", 15);
    ɵɵelementStart(2, "i", 16);
    ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_i_click_2_listener() { ɵɵrestoreView(_r13); const item_r11 = ctx.$implicit; const ctx_r14 = ɵɵnextContext(); return ctx_r14.deleteFile(item_r11.fileName); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(3, "img", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c0, ctx_r3.borderWidth, ctx_r3.borderHeight));
    ɵɵadvance(3);
    ɵɵproperty("src", item_r11.fileUrl, ɵɵsanitizeUrl)("ngStyle", ɵɵpureFunction1(6, _c1, ctx_r3.imageHeight));
} }
function ImagePickerComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerComponent_ng_container_5_div_1_Template, 1, 0, "div", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function ImagePickerComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
const _c2 = function (a0) { return { $implicit: a0 }; };
function ImagePickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerComponent_ng_container_6_div_1_Template, 1, 0, "div", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.imageTemplate || _r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, item_r16));
} }
function ImagePickerComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerComponent_ng_container_7_div_1_Template, 1, 0, "div", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.imageTemplate || _r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, item_r18));
} }
function ImagePickerComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerComponent_ng_container_8_div_1_Template, 1, 0, "div", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
const _c3 = function (a0) { return { "divGrid": a0 }; };
const _c4 = function (a0) { return { "grid-template-columns": a0 }; };
class ImageFile {
    constructor(fileName = '', fileUrl = '') {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
}
class SaveFile {
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
class ImagePickerComponent {
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
ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) { return new (t || ImagePickerComponent)(ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(EnvironmentService), ɵɵdirectiveInject(ConfigStateService)); };
ImagePickerComponent.ɵcmp = ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["image-picker"]], inputs: { imageWidth: "imageWidth", imageHeight: "imageHeight", borderWidth: "borderWidth", borderHeight: "borderHeight", uploadText: "uploadText", maxImageCount: "maxImageCount", isMultiple: "isMultiple", imageTemplate: "imageTemplate", uploadTemplate: "uploadTemplate", inLine: "inLine", showFrontButton: "showFrontButton", existFiles: "existFiles" }, features: [ɵɵNgOnChangesFeature], decls: 12, vars: 15, consts: [["Upload", ""], ["Image", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzCancelText", "\u95DC\u9589", 3, "nzOkText", "nzWidth", "nzTitle", "nzVisible", "nzVisibleChange", "nzOnCancel"], [1, "divGridCenter"], [2, "max-width", "100%", "max-height", "500px", 3, "src"], [1, "avatar-uploader", 3, "nzListType", "nzBeforeUpload", "nzMultiple"], [4, "ngTemplateOutlet"], ["UploadImage", ""], [1, "divBorder", "divGridCenter", 3, "ngStyle"], [2, "font-size", "16px", "text-align", "center"], [1, "ant-upload-text"], [1, "divBorder", "imgGrid", "divGridCenter", 3, "ngStyle", "click"], [1, "imgGridClose"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [2, "max-width", "100%", 3, "src", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ImagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ImagePickerComponent_ng_template_0_Template, 4, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, ImagePickerComponent_ng_template_2_Template, 4, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementStart(4, "div", 2);
        ɵɵtemplate(5, ImagePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        ɵɵtemplate(6, ImagePickerComponent_ng_container_6_Template, 2, 4, "ng-container", 4);
        ɵɵtemplate(7, ImagePickerComponent_ng_container_7_Template, 2, 4, "ng-container", 4);
        ɵɵtemplate(8, ImagePickerComponent_ng_container_8_Template, 2, 1, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵelementStart(9, "nz-modal", 5);
        ɵɵlistener("nzVisibleChange", function ImagePickerComponent_Template_nz_modal_nzVisibleChange_9_listener($event) { return ctx.viewImage.isVisabled = $event; })("nzOnCancel", function ImagePickerComponent_Template_nz_modal_nzOnCancel_9_listener() { return ctx.controllModal(false, ctx.viewImage.image); });
        ɵɵelementStart(10, "div", 6);
        ɵɵelement(11, "img", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c3, ctx.inLine))("ngStyle", ɵɵpureFunction1(13, _c4, ctx.inLine ? "repeat(auto-fit, " + ctx.borderWidth + ")" : "unset"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.canUpload && ctx.showFrontButton);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.existFiles);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.showFiles);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.canUpload && !ctx.showFrontButton);
        ɵɵadvance(1);
        ɵɵproperty("nzOkText", null)("nzWidth", 1000)("nzTitle", "\u9810\u89BD\u5716")("nzVisible", ctx.viewImage.isVisabled);
        ɵɵadvance(2);
        ɵɵproperty("src", ctx.viewImage.image.fileUrl, ɵɵsanitizeUrl);
    } }, directives: [NgClass, NgStyle, NgIf, NgForOf, NzModalComponent, NzUploadComponent, NgTemplateOutlet, ɵNzTransitionPatchDirective, NzIconDirective], styles: [".divBorder[_ngcontent-%COMP%]{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter[_ngcontent-%COMP%]{display:grid!important;place-items:center}.divGrid[_ngcontent-%COMP%]{display:grid;grid-gap:1rem}.imgGrid[_ngcontent-%COMP%]{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose[_ngcontent-%COMP%]{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}  .ant-upload.ant-upload-select-picture-card{margin:unset!important}  .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ImagePickerComponent, [{
        type: Component,
        args: [{
                selector: 'image-picker',
                templateUrl: './image-picker.component.html',
                styleUrls: ['./image-picker.component.css']
            }]
    }], function () { return [{ type: ToasterService }, { type: EnvironmentService }, { type: ConfigStateService }]; }, { imageWidth: [{
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

const _c0$1 = ["DefaultImagePicker"];
function CreateComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function CreateComponent_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.showModal(); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "+\u5EFA\u7ACB");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("nzType", "primary");
} }
function CreateComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 6);
    ɵɵlistener("click", function CreateComponent_a_1_Template_a_click_0_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.showModal(); });
    ɵɵtext(1, "\u7DE8\u8F2F");
    ɵɵelementEnd();
} }
function CreateComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 7, 8);
    ɵɵelementStart(2, "se", 9);
    ɵɵelementStart(3, "nz-radio-group", 10);
    ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_nz_radio_group_ngModelChange_3_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(); return ctx_r11.data.disable = $event; });
    ɵɵelementStart(4, "label", 11);
    ɵɵtext(5, "\u662F");
    ɵɵelementEnd();
    ɵɵelementStart(6, "label", 11);
    ɵɵtext(7, "\u5426");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerStart(8);
    ɵɵelementStart(9, "se", 12);
    ɵɵelementStart(10, "input", 13);
    ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_10_listener($event) { ɵɵrestoreView(_r12); const ctx_r13 = ɵɵnextContext(); return ctx_r13.data.sequence = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "se", 14);
    ɵɵelementStart(12, "input", 15);
    ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_12_listener($event) { ɵɵrestoreView(_r12); const ctx_r14 = ɵɵnextContext(); return ctx_r14.data.displayName = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "se", 16);
    ɵɵelementStart(14, "textarea", 17);
    ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_textarea_ngModelChange_14_listener($event) { ɵɵrestoreView(_r12); const ctx_r15 = ɵɵnextContext(); return ctx_r15.data.description = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "se", 18);
    ɵɵelementStart(16, "input", 19);
    ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_16_listener($event) { ɵɵrestoreView(_r12); const ctx_r16 = ɵɵnextContext(); return ctx_r16.data.url = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "se", 20);
    ɵɵelementStart(18, "input", 21);
    ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_18_listener($event) { ɵɵrestoreView(_r12); const ctx_r17 = ɵɵnextContext(); return ctx_r17.data.listStyle = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "se", 22);
    ɵɵelement(20, "image-picker", 23, 24);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r2.data.disable);
    ɵɵadvance(1);
    ɵɵproperty("nzValue", false);
    ɵɵadvance(2);
    ɵɵproperty("nzValue", true);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r2.data.sequence);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r2.data.displayName);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r2.data.description);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r2.data.url);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r2.data.listStyle);
    ɵɵadvance(2);
    ɵɵproperty("existFiles", ctx_r2.defaultImages)("maxImageCount", 1);
} }
function CreateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 25);
    ɵɵlistener("click", function CreateComponent_ng_template_4_Template_button_click_0_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.handleCancel(); });
    ɵɵtext(1, "\u53D6\u6D88");
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 26);
    ɵɵlistener("click", function CreateComponent_ng_template_4_Template_button_click_2_listener() { ɵɵrestoreView(_r19); const ctx_r20 = ɵɵnextContext(); return ctx_r20.save(); });
    ɵɵtext(3, "\u5132\u5B58");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r4.data.sequence == null || !ctx_r4.data.displayName);
} }
// import { ConfigStateService } from '@abp/ng.core';
// import { NzUploadFile } from 'ng-zorro-antd/upload';
// import { Observable } from 'rxjs';
// import * as _ from 'lodash';
// import { ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { BlogDto } from '@fs-tw/cms/proxy';
// import { FileService } from '@fs-tw/theme-core';
// import { PageService } from '../../../providers/page.service';
// import { Store } from '@ngxs/store';
class CreateComponent {
    constructor(pageService) {
        this.pageService = pageService;
        this.onSave = new EventEmitter();
        this.isVisible = false;
        this.defaultImages = [];
    }
    ngOnInit() {
    }
    showModal() {
        this.data = {
            no: "",
            displayName: "",
            description: "",
            parentId: null,
            disable: false,
            listStyle: "",
            sequence: 0,
            url: "",
            iconUrl: ""
        };
        this.defaultImages = [];
        if (this.blogId) {
            this.pageService.getBlogById(this.blogId).subscribe((x) => {
                this.data = x;
                // 已上傳圖片
                this.defaultImages = [new ImageFile('test', 'https://dummyimage.com/140x98/000/fff')];
                // if (x.iconUrl) this.defaultImages.push(new ImageFile(x.iconUrl, 'http://' + x.iconUrl));
            });
        }
        this.isVisible = true;
    }
    handleCancel() {
        this.isVisible = false;
    }
    save() {
        // 補上傳、刪除檔案 api
        let uploadImageInfos = this.defaultImagePicker.getUploadFiles();
        let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
        const formData = new FormData();
        for (let item of uploadImageInfos) {
            if (item.isUpload)
                formData.append('files[]', item.file, '');
        }
        console.log(uploadImageInfos, deleteImageNames);
        let input = cloneDeep(this.data);
        let action;
        if (!this.blogId) {
            input.no = input.displayName;
            action = this.pageService.createBlog(input);
        }
        else {
            action = this.pageService.updateBlog(this.blogId, input);
        }
        action.subscribe(() => {
            this.onSave.emit();
            this.handleCancel();
        }, (error) => {
            console.error(error);
        });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(ɵɵdirectiveInject(PageService)); };
CreateComponent.ɵcmp = ɵɵdefineComponent({ type: CreateComponent, selectors: [["fs-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
    } }, inputs: { blogId: "blogId" }, outputs: { onSave: "onSave" }, decls: 6, vars: 5, consts: [["nz-button", "", 3, "nzType", "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["nzTitle", "\u5EFA\u7ACB\u6D88\u606F\u7A2E\u985E", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["nz-form", "", "se-container", "1", "labelWidth", "100", 4, "ngIf"], ["footer", ""], ["nz-button", "", 3, "nzType", "click"], [3, "click"], ["nz-form", "", "se-container", "1", "labelWidth", "100"], ["f", "ngForm"], ["label", "\u662F\u5426\u555F\u7528", "required", ""], ["name", "disable", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["label", "\u9806\u5E8F", "required", ""], ["type", "number", "nz-input", "", "name", "no", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u540D\u7A31", "required", ""], ["type", "text", "nz-input", "", "name", "displayName", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u8AAA\u660E"], ["nz-input", "", "type", "text", "nz-input", "", "name", "description", 3, "ngModel", "ngModelChange"], ["label", "\u7DB2\u5740"], ["type", "text", "nz-input", "", "name", "url", 3, "ngModel", "ngModelChange"], ["label", "\u5217\u8868\u6A23\u5F0F", "optionalHelp", "\u76EE\u524D\u53EF\u8A2D\u5B9A\u6709\u6548\u8A2D\u5B9A\u503C\u70BA 2\u30013\u30014 \u9810\u8A2D\u70BA 3"], ["type", "text", "nz-input", "", "name", "listStyle", 3, "ngModel", "ngModelChange"], ["label", "\u5716\u793A", "optionalHelp", "\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png"], ["imageWidth", "40px", "imageHeight", "30px", "borderWidth", "80px", "borderHeight", "60px", 3, "existFiles", "maxImageCount"], ["DefaultImagePicker", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CreateComponent_button_0_Template, 3, 1, "button", 0);
        ɵɵtemplate(1, CreateComponent_a_1_Template, 2, 0, "a", 1);
        ɵɵelementStart(2, "nz-modal", 2);
        ɵɵlistener("nzVisibleChange", function CreateComponent_Template_nz_modal_nzVisibleChange_2_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function CreateComponent_Template_nz_modal_nzOnCancel_2_listener() { return ctx.handleCancel(); });
        ɵɵtemplate(3, CreateComponent_form_3_Template, 22, 10, "form", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, CreateComponent_ng_template_4_Template, 4, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = ɵɵreference(5);
        ɵɵproperty("ngIf", !ctx.blogId);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.blogId);
        ɵɵadvance(1);
        ɵɵproperty("nzVisible", ctx.isVisible)("nzFooter", _r3);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.data);
    } }, directives: [NgIf, NzModalComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, SEContainerComponent, SEComponent, NzRadioGroupComponent, NgControlStatus, NgModel, NzRadioComponent, NumberValueAccessor, NzInputDirective, DefaultValueAccessor, RequiredValidator, ImagePickerComponent], styles: [".uploadImgGrid[_ngcontent-%COMP%]{display:grid;place-items:center;border:1px dashed #ddd;padding:10px;justify-content:center;background-color:#fafafa}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CreateComponent, [{
        type: Component,
        args: [{
                selector: 'fs-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.less']
            }]
    }], function () { return [{ type: PageService }]; }, { defaultImagePicker: [{
            type: ViewChild,
            args: ["DefaultImagePicker"]
        }], blogId: [{
            type: Input
        }], onSave: [{
            type: Output
        }] }); })();

function ListComponent_tr_15_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 13);
    ɵɵelementStart(1, "a", 17);
    ɵɵlistener("click", function ListComponent_tr_15_li_11_Template_a_click_1_listener() { ɵɵrestoreView(_r7); const data_r2 = ɵɵnextContext().$implicit; const ctx_r5 = ɵɵnextContext(); return ctx_r5.deleteBlog(data_r2); });
    ɵɵtext(2, "\u522A\u9664");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c0$2 = function (a0) { return { listSelected: a0 }; };
function ListComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 7);
    ɵɵelementStart(1, "td", 8);
    ɵɵelementStart(2, "a", 9);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelement(5, "i", 10);
    ɵɵelementEnd();
    ɵɵelementStart(6, "nz-dropdown-menu", null, 11);
    ɵɵelementStart(8, "ul", 12);
    ɵɵelementStart(9, "li", 13);
    ɵɵelementStart(10, "fs-create", 14);
    ɵɵlistener("onSave", function ListComponent_tr_15_Template_fs_create_onSave_10_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.reload(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(11, ListComponent_tr_15_li_11_Template, 3, 0, "li", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "td", 16);
    ɵɵlistener("click", function ListComponent_tr_15_Template_td_click_12_listener() { ɵɵrestoreView(_r9); const data_r2 = ctx.$implicit; const ctx_r10 = ɵɵnextContext(); return ctx_r10.showDetail(data_r2); });
    ɵɵtext(13);
    ɵɵelementEnd();
    ɵɵelementStart(14, "td", 16);
    ɵɵlistener("click", function ListComponent_tr_15_Template_td_click_14_listener() { ɵɵrestoreView(_r9); const data_r2 = ctx.$implicit; const ctx_r11 = ɵɵnextContext(); return ctx_r11.showDetail(data_r2); });
    ɵɵtext(15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r3 = ɵɵreference(7);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c0$2, data_r2.id == ctx_r1.selectBlogCodeId));
    ɵɵadvance(2);
    ɵɵproperty("nzDropdownMenu", _r3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "AbpIdentity::Actions"), " ");
    ɵɵadvance(7);
    ɵɵproperty("blogId", data_r2.id);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", data_r2.no != "CmsBlogNotClassified");
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r2.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", data_r2.disable ? "\u95DC\u9589" : "\u555F\u7528", " ");
} }
// import { BlogDto } from '@fs-tw/cms/proxy';
// import { CodesDto, CodingWithSettingTreeModel } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { PageService } from '../../../providers/page.service';
// import { PostState } from '../../../providers/post/post.state';
// import { PostsStateService } from '../../../providers/post/poststate.service';
class ListComponent {
    constructor(pageService, postStateService) {
        this.pageService = pageService;
        this.postStateService = postStateService;
        // @Select(PostState.getPostsTotalCount)
        // totalCount$: Observable<number>;
        // blogDatas: BlogDto[] = [];
        // news: CodingWithSettingTreeModel;
        // subscription: Subscription;
        // parentCode: CodesDto;
        this.blogDatas = [];
        this.selectBlogCodeId = "";
        this.loading = false;
    }
    ngOnInit() {
        this.reload();
    }
    reload() {
        let input = {
            skipCount: 0,
            maxResultCount: 999,
            sorting: 'sequence'
        };
        this.loading = true;
        this.pageService.getBlogs(input).subscribe((x) => {
            this.blogDatas = x.items;
            this.loading = false;
        }, (error) => {
            this.loading = false;
        });
    }
    showDetail(blog) {
        if (blog == null) {
            this.selectBlogCodeId = null;
            return;
        }
        this.selectBlogCodeId = blog.id;
        this.postStateService.setBlog(blog);
    }
    deleteBlog(blog) {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(ɵɵdirectiveInject(PageService), ɵɵdirectiveInject(PostStateService)); };
ListComponent.ɵcmp = ɵɵdefineComponent({ type: ListComponent, selectors: [["fs-list"]], decls: 16, vars: 4, consts: [[1, "mb-md"], [2, "margin-right", "10px", 3, "onSave"], ["nz-button", "", 3, "nzType", "click"], ["nzSize", "small", "nzBordered", "", 3, "nzData", "nzLoading"], ["basicTable", ""], ["nzWidth", "75px"], ["style", "cursor: pointer;", "class", "bg-white listColor", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "bg-white", "listColor", 2, "cursor", "pointer", 3, "ngClass"], ["nzWidth", "75px", "nzAlign", "center"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], [3, "blogId", "onSave"], ["nz-menu-item", "", 4, "ngIf"], [3, "click"], [1, "text-red", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "fs-create", 1);
        ɵɵlistener("onSave", function ListComponent_Template_fs_create_onSave_2_listener() { return ctx.reload(); });
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 2);
        ɵɵlistener("click", function ListComponent_Template_button_click_3_listener() { return ctx.showDetail(null); });
        ɵɵtext(4, " \u5168\u90E8 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "nz-table", 3, 4);
        ɵɵelementStart(7, "thead");
        ɵɵelementStart(8, "tr");
        ɵɵelement(9, "th", 5);
        ɵɵelementStart(10, "th");
        ɵɵtext(11, "\u540D\u7A31");
        ɵɵelementEnd();
        ɵɵelementStart(12, "th");
        ɵɵtext(13, "\u72C0\u614B");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "tbody");
        ɵɵtemplate(15, ListComponent_tr_15_Template, 16, 11, "tr", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵadvance(3);
        ɵɵproperty("nzType", "primary");
        ɵɵadvance(2);
        ɵɵproperty("nzData", ctx.blogDatas)("nzLoading", ctx.loading);
        ɵɵadvance(10);
        ɵɵproperty("ngForOf", _r0.data);
    } }, directives: [CreateComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgForOf, NgClass, NzCellAlignDirective, NzDropDownADirective, NzDropDownDirective, NzIconDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective, NgIf], pipes: [LocalizationPipe], styles: [".listSelected[_ngcontent-%COMP%]{background-color:#e6f2ff!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'fs-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: PageService }, { type: PostStateService }]; }, null); })();

function MainComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function MainComponent_ng_template_12_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.changePage(1); });
    ɵɵelement(1, "i", 13);
    ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "i", 24);
    ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "i", 25);
    ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u5167\u5BB9");
    ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\u9023\u7D50");
    ɵɵelementEnd();
} }
function MainComponent_ng_container_28_div_33_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "h3");
    ɵɵtext(2, "\u5167\u5BB9\uFF1A");
    ɵɵelementEnd();
    ɵɵelement(3, "quill-view", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵproperty("content", item_r6.content);
} }
function MainComponent_ng_container_28_div_34_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "h3");
    ɵɵtext(2, "\u9023\u7D50");
    ɵɵelementEnd();
    ɵɵelementStart(3, "p");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(item_r6.url);
} }
function MainComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "tr", 14);
    ɵɵelementStart(2, "td", 15);
    ɵɵlistener("nzExpandChange", function MainComponent_ng_container_28_Template_td_nzExpandChange_2_listener($event) { const item_r6 = ctx.$implicit; return item_r6.expand = $event; });
    ɵɵelementStart(3, "a", 16);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelement(6, "i", 17);
    ɵɵelementEnd();
    ɵɵelementStart(7, "nz-dropdown-menu", null, 18);
    ɵɵelementStart(9, "ul", 19);
    ɵɵelementStart(10, "li", 20);
    ɵɵlistener("click", function MainComponent_ng_container_28_Template_li_click_10_listener() { ɵɵrestoreView(_r18); const item_r6 = ctx.$implicit; const ctx_r17 = ɵɵnextContext(); return ctx_r17.gotoDetail(item_r6.id); });
    ɵɵelementStart(11, "a");
    ɵɵtext(12, "\u7DE8\u8F2F");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "li", 20);
    ɵɵlistener("click", function MainComponent_ng_container_28_Template_li_click_13_listener() { ɵɵrestoreView(_r18); const item_r6 = ctx.$implicit; const ctx_r19 = ɵɵnextContext(); return ctx_r19.deleteItem(item_r6); });
    ɵɵelementStart(14, "a", 21);
    ɵɵtext(15, "\u522A\u9664");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "td");
    ɵɵtemplate(17, MainComponent_ng_container_28_span_17_Template, 2, 0, "span", 22);
    ɵɵtemplate(18, MainComponent_ng_container_28_span_18_Template, 2, 0, "span", 22);
    ɵɵelementEnd();
    ɵɵelementStart(19, "td");
    ɵɵtext(20);
    ɵɵelementEnd();
    ɵɵelementStart(21, "td");
    ɵɵtemplate(22, MainComponent_ng_container_28_span_22_Template, 2, 0, "span", 22);
    ɵɵtemplate(23, MainComponent_ng_container_28_span_23_Template, 2, 0, "span", 22);
    ɵɵelementEnd();
    ɵɵelementStart(24, "td");
    ɵɵtext(25);
    ɵɵpipe(26, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(27, "tr", 23);
    ɵɵelementStart(28, "div");
    ɵɵelementStart(29, "h3");
    ɵɵtext(30, "\u526F\u6A19\u984C");
    ɵɵelementEnd();
    ɵɵelementStart(31, "p");
    ɵɵtext(32);
    ɵɵelementEnd();
    ɵɵtemplate(33, MainComponent_ng_container_28_div_33_Template, 4, 1, "div", 22);
    ɵɵtemplate(34, MainComponent_ng_container_28_div_34_Template, 5, 1, "div", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r7 = ɵɵreference(8);
    ɵɵadvance(2);
    ɵɵproperty("nzExpand", item_r6.expand);
    ɵɵadvance(1);
    ɵɵproperty("nzDropdownMenu", _r7);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 13, "AbpIdentity::Actions"), " ");
    ɵɵadvance(13);
    ɵɵproperty("ngIf", item_r6.published);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r6.published);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r6.title, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", item_r6.displayMode == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r6.displayMode == 1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(26, 15, item_r6.published_At, "yyyy-MM-dd HH:mm:ss"));
    ɵɵadvance(2);
    ɵɵproperty("nzExpand", item_r6.expand);
    ɵɵadvance(5);
    ɵɵtextInterpolate(item_r6.subtitle || "-");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r6.displayMode == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r6.displayMode == 1);
} }
// import { ActivatedRoute, Router } from '@angular/router';
// import { PostWithDetailsDto } from '@fs-tw/cms/proxy';
// import { CodesDto } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select, Store } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { Deletepost, GetPosts } from '../../providers/post/post.actions';
// import { PostState } from '../../providers/post/post.state';
// import { PostsStateService } from '../../providers/post/poststate.service';
// import { PageService } from '../../providers/page.service';
class MainComponent {
    constructor(pageService, postStateService) {
        this.pageService = pageService;
        this.postStateService = postStateService;
        this.postParams = {
            skipCount: 0,
            maxResultCount: 10,
            keyword: "",
            blogId: null
        };
        this.posts = [];
        this.totalCount = 0;
        this.loading = false;
    }
    ngOnInit() {
        this.blog$ = this.postStateService.getBlog();
        this.onBlogChange();
    }
    onBlogChange() {
        this.blog$.subscribe((blog) => {
            this.blogId = blog == null ? null : blog.id;
            this.blogName = blog == null ? "" : blog.displayName;
            this.postParams.blogId = this.blogId;
            this.changePage(1);
        });
    }
    gotoDetail() {
    }
    changePage(page) {
        this.postParams.skipCount = (page - 1) * this.postParams.maxResultCount;
        this.loading = true;
        this.pageService.getPostsByBlogId(this.postParams).subscribe((x) => {
            this.loading = false;
            this.posts = x.items;
            this.totalCount = x.totalCount;
        });
    }
    deleteItem(item) {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(ɵɵdirectiveInject(PageService), ɵɵdirectiveInject(PostStateService)); };
MainComponent.ɵcmp = ɵɵdefineComponent({ type: MainComponent, selectors: [["fs-main"]], decls: 29, vars: 8, consts: [["nzGutter", "16"], ["nzSpan", "8"], ["nzSpan", "16"], [1, "mb-md"], ["nz-button", "", "nzType", "primary", 2, "margin-right", "20px", 3, "click"], ["nzSearch", "", 2, "width", "300px", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "\u8F38\u5165\u540D\u7A31", 3, "ngModel", "ngModelChange"], ["suffixIconButton", ""], ["nzSize", "small", "nzPageSize", "10", "nzBordered", "", 3, "nzData", "nzTotal", "nzFrontPagination", "nzLoading", "nzPageIndexChange"], ["listTable", ""], ["nzWidth", "110px"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [1, "bg-white"], ["nzShowExpand", "", "nzWidth", "110px", 3, "nzExpand", "nzExpandChange"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [1, "text-red"], [4, "ngIf"], [3, "nzExpand"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], [3, "content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-row", 0);
        ɵɵelementStart(1, "nz-col", 1);
        ɵɵelement(2, "fs-list");
        ɵɵelementEnd();
        ɵɵelementStart(3, "nz-col", 2);
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "div", 3);
        ɵɵelementStart(6, "h5");
        ɵɵtext(7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "button", 4);
        ɵɵlistener("click", function MainComponent_Template_button_click_8_listener() { return ctx.gotoDetail(); });
        ɵɵtext(9, " \u65B0\u589E ");
        ɵɵelementEnd();
        ɵɵelementStart(10, "nz-input-group", 5);
        ɵɵelementStart(11, "input", 6);
        ɵɵlistener("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) { return ctx.postParams.keyword = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(12, MainComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(14, "nz-table", 8, 9);
        ɵɵlistener("nzPageIndexChange", function MainComponent_Template_nz_table_nzPageIndexChange_14_listener($event) { return ctx.changePage($event); });
        ɵɵelementStart(16, "thead");
        ɵɵelementStart(17, "tr");
        ɵɵelement(18, "th", 10);
        ɵɵelementStart(19, "th");
        ɵɵtext(20, "\u555F\u7528");
        ɵɵelementEnd();
        ɵɵelementStart(21, "th");
        ɵɵtext(22, "\u6A19\u984C");
        ɵɵelementEnd();
        ɵɵelementStart(23, "th");
        ɵɵtext(24, "\u986F\u793A\u6A21\u5F0F");
        ɵɵelementEnd();
        ɵɵelementStart(25, "th");
        ɵɵtext(26, "\u767C\u4F48\u65E5\u671F");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "tbody");
        ɵɵtemplate(28, MainComponent_ng_container_28_Template, 35, 18, "ng-container", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(13);
        const _r2 = ɵɵreference(15);
        ɵɵadvance(7);
        ɵɵtextInterpolate1("\u985E\u578B\uFF1A", ctx.blogName, "");
        ɵɵadvance(3);
        ɵɵproperty("nzAddOnAfter", _r0);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.postParams.keyword);
        ɵɵadvance(3);
        ɵɵproperty("nzData", ctx.posts)("nzTotal", ctx.totalCount)("nzFrontPagination", false)("nzLoading", ctx.loading);
        ɵɵadvance(14);
        ɵɵproperty("ngForOf", _r2.data);
    } }, directives: [NzRowDirective, NzColDirective, ListComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzInputGroupComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, NgModel, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgForOf, NzIconDirective, NzTdAddOnComponent, NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective, NgIf, NzTrExpandDirective, NzTableFixedRowComponent, QuillViewComponent], pipes: [LocalizationPipe, DatePipe], styles: ["nz-select[_ngcontent-%COMP%]{margin-right:8px;width:220px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MainComponent, [{
        type: Component,
        args: [{
                selector: 'fs-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.less']
            }]
    }], function () { return [{ type: PageService }, { type: PostStateService }]; }, null); })();

// import { ActivatedRoute, Router } from '@angular/router';
// import { BlogDto, PostImageDto } from '@fs-tw/cms/proxy';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { forkJoin, Observable } from 'rxjs';
// import { FileService } from '@fs-tw/theme-core';
// import { PageService } from '../../providers/page.service';
// import { PostsStateService } from '../../providers/post/poststate.service';
// import { UploadFileComponent } from '../upload-file/upload-file.component';
// import { TagComponent } from '../tag/tag.component';
// import { finalize } from 'rxjs/operators';
class DetailComponent {
    ngOnInit() {
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
DetailComponent.ɵcmp = ɵɵdefineComponent({ type: DetailComponent, selectors: [["fs-detail"]], decls: 0, vars: 0, template: function DetailComponent_Template(rf, ctx) { }, styles: [".unchecked[_ngcontent-%COMP%]{border:1px solid #e4e4e4}.unchecked[_ngcontent-%COMP%]:hover{background-color:#00c1de;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DetailComponent, [{
        type: Component,
        args: [{
                selector: 'fs-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.less']
            }]
    }], null, null); })();

class RouteConfig {
    constructor(postStateService) {
        this.postStateService = postStateService;
    }
    resolve() {
        return this.postStateService.setBlog(null);
    }
}
RouteConfig.ɵfac = function RouteConfig_Factory(t) { return new (t || RouteConfig)(ɵɵinject(PostStateService)); };
RouteConfig.ɵprov = ɵɵdefineInjectable({ token: RouteConfig, factory: RouteConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RouteConfig, [{
        type: Injectable
    }], function () { return [{ type: PostStateService }]; }, null); })();
const routes = [
    {
        path: '',
        component: LayoutComponent,
        resolve: { 'RouteConfig': RouteConfig },
        children: [
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'detail',
                component: DetailComponent,
            },
            {
                path: 'detail/:postId',
                component: DetailComponent,
            }
        ],
    }
];
class PostRoutingModule {
}
PostRoutingModule.ɵfac = function PostRoutingModule_Factory(t) { return new (t || PostRoutingModule)(); };
PostRoutingModule.ɵmod = ɵɵdefineNgModule({ type: PostRoutingModule });
PostRoutingModule.ɵinj = ɵɵdefineInjector({ providers: [
        RouteConfig
    ], imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PostRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PostRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: [
                    RouteConfig
                ]
            }]
    }], null, null); })();

// import { NgAlainBasicModule } from '@fs-tw/theme-ng-alain/basic';
const COMPONENT = [];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵɵdefineInjector({ imports: [[
        // NgAlainBasicModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [...COMPONENT],
                imports: [
                // NgAlainBasicModule,
                ],
                exports: [
                    // NgAlainBasicModule,
                    ...COMPONENT
                ]
            }]
    }], null, null); })();

// import { ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { NzModalRef } from 'ng-zorro-antd/modal';
// import { NzUploadFile } from 'ng-zorro-antd/upload';
// import { FileService } from '@fs-tw/theme-core';
class UploadFileComponent {
    ngOnInit() {
    }
}
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(); };
UploadFileComponent.ɵcmp = ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["fs-upload-file"]], decls: 0, vars: 0, template: function UploadFileComponent_Template(rf, ctx) { }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UploadFileComponent, [{
        type: Component,
        args: [{
                selector: 'fs-upload-file',
                templateUrl: './upload-file.component.html',
                styleUrls: ['./upload-file.component.css']
            }]
    }], null, null); })();

// import { group } from '@angular/animations';
// import { PostTagMapDto, TagGroupDto } from '@fs-tw/cms/proxy';
// import * as _ from 'lodash';
// import { Observable } from 'rxjs';
// import { take } from 'rxjs/operators';
// import { PageService } from '../../providers/page.service';
class TagComponent {
    ngOnInit() {
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = ɵɵdefineComponent({ type: TagComponent, selectors: [["fs-tag"]], decls: 1, vars: 0, template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "br");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TagComponent, [{
        type: Component,
        args: [{
                selector: 'fs-tag',
                templateUrl: './tag.component.html',
                styleUrls: ['./tag.component.css']
            }]
    }], null, null); })();

const NzModules = [
    NzGridModule,
    NzInputModule,
    NzTableModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzRadioModule,
    NzUploadModule,
    SEModule
];
class PostModule {
    static forChild() {
        return {
            ngModule: PostModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(PostModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(PostModule.forChild());
    }
}
PostModule.ɵfac = function PostModule_Factory(t) { return new (t || PostModule)(); };
PostModule.ɵmod = ɵɵdefineNgModule({ type: PostModule });
PostModule.ɵinj = ɵɵdefineInjector({ providers: [
        // PostsStateService,
        PageService
    ], imports: [[
            SharedModule,
            CoreModule,
            ReactiveFormsModule,
            FormsModule,
            CommonModule,
            PostRoutingModule,
            ...NzModules,
            // NgxsModule.forFeature([PostState]),
            QuillModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PostModule, { declarations: [LayoutComponent,
        MainComponent,
        DetailComponent,
        ListComponent,
        CreateComponent,
        UploadFileComponent,
        TagComponent,
        ImagePickerComponent], imports: [SharedModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        PostRoutingModule, NzGridModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzButtonModule,
        NzIconModule,
        NzModalModule,
        NzRadioModule,
        NzUploadModule,
        SEModule, QuillModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PostModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LayoutComponent,
                    MainComponent,
                    DetailComponent,
                    ListComponent,
                    CreateComponent,
                    UploadFileComponent,
                    TagComponent,
                    ImagePickerComponent
                ],
                imports: [
                    SharedModule,
                    CoreModule,
                    ReactiveFormsModule,
                    FormsModule,
                    CommonModule,
                    PostRoutingModule,
                    ...NzModules,
                    // NgxsModule.forFeature([PostState]),
                    QuillModule.forRoot()
                ],
                providers: [
                    // PostsStateService,
                    PageService
                ]
            }]
    }], null, null); })();

const routes$1 = [
    { path: '', pathMatch: 'full', redirectTo: 'post' },
    {
        path: '',
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'post',
                loadChildren: PostModule.forEarly
            },
        ],
    }
];
class CmsAdminRoutingModule {
}
CmsAdminRoutingModule.ɵfac = function CmsAdminRoutingModule_Factory(t) { return new (t || CmsAdminRoutingModule)(); };
CmsAdminRoutingModule.ɵmod = ɵɵdefineNgModule({ type: CmsAdminRoutingModule });
CmsAdminRoutingModule.ɵinj = ɵɵdefineInjector({ imports: [[RouterModule.forChild(routes$1)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CmsAdminRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmsAdminRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            }]
    }], null, null); })();

class CmsAdminModule {
    static forChild() {
        return {
            ngModule: CmsAdminModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(CmsAdminModule.forChild());
    }
}
CmsAdminModule.ɵfac = function CmsAdminModule_Factory(t) { return new (t || CmsAdminModule)(); };
CmsAdminModule.ɵmod = ɵɵdefineNgModule({ type: CmsAdminModule });
CmsAdminModule.ɵinj = ɵɵdefineInjector({ imports: [[
            SharedModule,
            CoreModule,
            CmsAdminRoutingModule,
        ], SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CmsAdminModule, { imports: [SharedModule,
        CoreModule,
        CmsAdminRoutingModule], exports: [SharedModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmsAdminModule, [{
        type: NgModule,
        args: [{
                imports: [
                    SharedModule,
                    CoreModule,
                    CmsAdminRoutingModule,
                ],
                exports: [
                    SharedModule,
                ],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CmsAdminModule, SharedModule };
//# sourceMappingURL=fs-tw-cms-admin.js.map
