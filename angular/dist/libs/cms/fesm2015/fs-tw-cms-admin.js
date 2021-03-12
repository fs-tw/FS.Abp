import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelement, Component, ɵɵinject, Injector, ɵɵdirectiveInject, ɵɵdefinePipe, Pipe, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵnextContext, ɵɵreference, ɵɵproperty, ɵɵpureFunction2, ɵɵadvance, ɵɵtext, ɵɵtemplateRefExtractor, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵsanitizeUrl, ɵɵpureFunction1, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵNgOnChangesFeature, Input, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, ViewChild, ɵɵtextInterpolate, ɵɵpipe, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵpureFunction0, EventEmitter, Output } from '@angular/core';
import { InternalStore, EnvironmentService, RestService, ConfigStateService, ListService, FormSubmitDirective, LocalizationPipe, LazyModuleFactory, CoreModule, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { RouterOutlet, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgClass, NgStyle, NgIf, NgForOf, NgTemplateOutlet, DatePipe, CommonModule } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, NgModel, NgForm, RequiredValidator, NumberValueAccessor, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillViewComponent, QuillEditorComponent, QuillModule } from 'ngx-quill';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputGroupComponent, NzInputDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NzTdAddOnComponent, NzTrExpandDirective, NzTableFixedRowComponent, NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalComponent, NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioGroupComponent, NzRadioComponent, NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadComponent, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectComponent, NzOptionComponent, NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerComponent, NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabSetComponent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';
import { SEContainerComponent, SEComponent, SEModule } from '@delon/abc/se';
import { Fs, Volo } from '@fs-tw/cms/proxy';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule, ExtensibleTableComponent } from '@fs-tw/theme-alain-ms/shared/extensions';
import { FormPropData, generateFormFromProps, EXTENSIONS_IDENTIFIER, ExtensibleFormComponent } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '@fs-tw/cms/config';
import { ToasterService, Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ValidationGroupDirective } from '@ngx-validate/core';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { cloneDeep } from 'lodash';
import { NzFormDirective } from 'ng-zorro-antd/form';

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

// @dynamic
class PageService {
    constructor(injector) {
        this.injector = injector;
        this.blogService = injector.get(Fs.Cms.Blogs.BlogsApiService);
        this.postService = injector.get(Fs.Cms.Posts.PostsApiService);
        this.directoriesApiService = injector.get(Fs.Abp.File.Directories.DirectoriesApiService);
        this.fileDescriptorService = injector.get(Volo.FileManagement.Files.FileDescriptorService);
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
    //#region File
    findByProviderByKeyAndGroup(key, group) {
        return this.directoriesApiService.findByProviderByKeyAndGroup(key, group);
    }
    deleteFile(id) {
        return this.fileDescriptorService.deleteById(id);
    }
    //#endregion
    //#region Post
    getPostsByBlogId(input) {
        return this.postService.getPostsByBlogIdByInput(input);
    }
    getPostById(id) {
        return this.postService.getByPostPrimaryKey({ id: id });
    }
    createPost(input) {
        return this.postService.createByPostCreate(input);
    }
    updatePost(id, input) {
        return this.postService.updateByPostPrimaryKeyAndPostUpdate({ id: id }, input);
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(ɵɵinject(Injector)); };
PageService.ɵprov = ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PageService, [{
        type: Injectable
    }], function () { return [{ type: Injector }]; }, null); })();

class GetFileByIdPipe {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    transform(value) {
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value;
    }
}
GetFileByIdPipe.ɵfac = function GetFileByIdPipe_Factory(t) { return new (t || GetFileByIdPipe)(ɵɵdirectiveInject(EnvironmentService)); };
GetFileByIdPipe.ɵpipe = ɵɵdefinePipe({ name: "getFileById", type: GetFileByIdPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GetFileByIdPipe, [{
        type: Pipe,
        args: [{
                name: 'getFileById'
            }]
    }], function () { return [{ type: EnvironmentService }]; }, null); })();

const COMPONENT = [GetFileByIdPipe];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵɵdefineInjector({ imports: [[
            // NgAlainBasicModule,
            ThemeAlainMsSharedModule,
            UiExtensionsModule
        ], ThemeAlainMsSharedModule,
        UiExtensionsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedModule, { declarations: [GetFileByIdPipe], imports: [
        // NgAlainBasicModule,
        ThemeAlainMsSharedModule,
        UiExtensionsModule], exports: [GetFileByIdPipe, ThemeAlainMsSharedModule,
        UiExtensionsModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [...COMPONENT],
                imports: [
                    // NgAlainBasicModule,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ],
                exports: [
                    // NgAlainBasicModule,
                    ...COMPONENT,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ]
            }]
    }], null, null); })();

class FileService {
    constructor(restService, environmentService) {
        this.restService = restService;
        this.environmentService = environmentService;
    }
    getFileUrl(id) {
        if (!id)
            return "";
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + id;
    }
    uploadFile(file, directoryId) {
        const formData = new FormData();
        formData.append("relativePath", null);
        formData.append("file", file);
        formData.append("name", file.name);
        formData.append("type", file.type);
        return this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/upload`,
            body: formData,
            params: { directoryId: directoryId }
        });
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(ɵɵinject(RestService), ɵɵinject(EnvironmentService)); };
FileService.ɵprov = ɵɵdefineInjectable({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: RestService }, { type: EnvironmentService }]; }, null); })();

function ImagePickerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_template_0_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
function ImagePickerComponent_ng_template_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, ImagePickerComponent_ng_template_0_ng_template_2_div_1_Template, 1, 0, "div", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r11 = ɵɵreference(5);
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(2, _c0, ctx_r10.borderWidth, ctx_r10.borderHeight));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.uploadTextTemplate || _r11);
} }
function ImagePickerComponent_ng_template_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵtext(2, "Upload");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function ImagePickerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-upload", 8);
    ɵɵtemplate(1, ImagePickerComponent_ng_template_0_div_1_Template, 1, 0, "div", 9);
    ɵɵtemplate(2, ImagePickerComponent_ng_template_0_ng_template_2_Template, 2, 5, "ng-template", null, 10, ɵɵtemplateRefExtractor);
    ɵɵtemplate(4, ImagePickerComponent_ng_template_0_ng_template_4_Template, 3, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
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
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_div_click_0_listener() { ɵɵrestoreView(_r16); const item_r14 = ctx.$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.controllModal(true, item_r14.file); });
    ɵɵelementStart(1, "div", 16);
    ɵɵelementStart(2, "i", 17);
    ɵɵlistener("click", function ImagePickerComponent_ng_template_2_Template_i_click_2_listener() { ɵɵrestoreView(_r16); const item_r14 = ctx.$implicit; const ctx_r17 = ɵɵnextContext(); return ctx_r17.deleteFile(item_r14.file.fileName); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(3, "img", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(3, _c0, ctx_r3.borderWidth, ctx_r3.borderHeight));
    ɵɵadvance(3);
    ɵɵproperty("src", item_r14.file.fileUrl, ɵɵsanitizeUrl)("ngStyle", ɵɵpureFunction1(6, _c1, ctx_r3.imageHeight));
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
const _c2 = function (a0, a1) { return { file: a0, i: a1 }; };
const _c3 = function (a0) { return { $implicit: a0 }; };
function ImagePickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerComponent_ng_container_6_div_1_Template, 1, 0, "div", 19);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r5 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.imageTemplate || _r2)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, ɵɵpureFunction2(2, _c2, item_r19, i_r20)));
} }
function ImagePickerComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div");
} }
function ImagePickerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ImagePickerComponent_ng_container_7_div_1_Template, 1, 0, "div", 19);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r6 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.imageTemplate || _r2)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, ɵɵpureFunction2(2, _c2, item_r22, i_r23)));
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
const _c4 = function (a0) { return { "divGrid": a0 }; };
const _c5 = function (a0) { return { "grid-template-columns": a0 }; };
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
ImagePickerComponent.ɵcmp = ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["image-picker"]], inputs: { imageWidth: "imageWidth", imageHeight: "imageHeight", borderWidth: "borderWidth", borderHeight: "borderHeight", maxImageCount: "maxImageCount", isMultiple: "isMultiple", imageTemplate: "imageTemplate", uploadTemplate: "uploadTemplate", uploadTextTemplate: "uploadTextTemplate", inLine: "inLine", showFrontButton: "showFrontButton", existFiles: "existFiles" }, features: [ɵɵNgOnChangesFeature], decls: 12, vars: 15, consts: [["Upload", ""], ["Image", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzCancelText", "\u95DC\u9589", 3, "nzOkText", "nzWidth", "nzTitle", "nzVisible", "nzVisibleChange", "nzOnCancel"], [1, "divGridCenter"], [2, "max-width", "100%", "max-height", "500px", 3, "src"], [1, "avatar-uploader", 2, "display", "grid", 3, "nzListType", "nzBeforeUpload", "nzMultiple"], [4, "ngTemplateOutlet"], ["UploadImage", ""], ["UploadText", ""], [1, "divBorder", "divGridCenter", 3, "ngStyle"], [2, "font-size", "16px", "text-align", "center"], [1, "ant-upload-text"], [1, "divBorder", "imgGrid", "divGridCenter", 3, "ngStyle", "click"], [1, "imgGridClose"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [2, "max-width", "100%", 3, "src", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function ImagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ImagePickerComponent_ng_template_0_Template, 6, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, ImagePickerComponent_ng_template_2_Template, 4, 8, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementStart(4, "div", 2);
        ɵɵtemplate(5, ImagePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        ɵɵtemplate(6, ImagePickerComponent_ng_container_6_Template, 2, 7, "ng-container", 4);
        ɵɵtemplate(7, ImagePickerComponent_ng_container_7_Template, 2, 7, "ng-container", 4);
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
        ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c4, ctx.inLine))("ngStyle", ɵɵpureFunction1(13, _c5, ctx.inLine ? "repeat(auto-fit, " + ctx.borderWidth + ")" : "unset"));
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
        }], maxImageCount: [{
            type: Input
        }], isMultiple: [{
            type: Input
        }], imageTemplate: [{
            type: Input
        }], uploadTemplate: [{
            type: Input
        }], uploadTextTemplate: [{
            type: Input
        }], inLine: [{
            type: Input
        }], showFrontButton: [{
            type: Input
        }], existFiles: [{
            type: Input
        }] }); })();

const _c0$1 = ["DefaultImagePicker"];
function ListComponent_form_9_abp_extensible_form_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "abp-extensible-form", 13);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("selectedRecord", ctx_r3.selected);
} }
function ListComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 7);
    ɵɵlistener("ngSubmit", function ListComponent_form_9_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.save(); });
    ɵɵtemplate(1, ListComponent_form_9_abp_extensible_form_1_Template, 1, 1, "abp-extensible-form", 8);
    ɵɵelementStart(2, "div", 9);
    ɵɵelementStart(3, "label", 10);
    ɵɵtext(4, "\u5716\u793A(\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png)");
    ɵɵelementEnd();
    ɵɵelement(5, "image-picker", 11, 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r0.form);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.form);
    ɵɵadvance(4);
    ɵɵproperty("existFiles", ctx_r0.defaultImages)("maxImageCount", 1);
} }
function ListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function ListComponent_ng_template_10_Template_button_click_0_listener() { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.handleCancel(); });
    ɵɵtext(1, "\u53D6\u6D88");
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 15);
    ɵɵlistener("click", function ListComponent_ng_template_10_Template_button_click_2_listener() { ɵɵrestoreView(_r8); const ctx_r9 = ɵɵnextContext(); return ctx_r9.save(); });
    ɵɵtext(3, "\u5132\u5B58");
    ɵɵelementEnd();
} }
class ListComponent {
    constructor(extensionsService, pageService, injector, list, fileService, toasterService, postStateService) {
        this.extensionsService = extensionsService;
        this.pageService = pageService;
        this.injector = injector;
        this.list = list;
        this.fileService = fileService;
        this.toasterService = toasterService;
        this.postStateService = postStateService;
        this.datas = [];
        this.count = 0;
        this.defaultImages = [];
        this.isVisible = false;
        this.selected = {};
        this.pageService.findByProviderByKeyAndGroup("FS.Cms.Blogs").subscribe(x => {
            this.directory = x;
        });
    }
    ngOnInit() {
        this.extensionsService.Actions$["Cms::FS.Cms.Blogs" /* Blog */].subscribe((x) => {
            switch (x.name) {
                case 'Edit':
                    this.edit(x.record.id);
                    break;
                case 'Delete':
                    this.deleteBlog(x.record);
                    break;
                case 'Add':
                    this.add();
                    break;
            }
        });
        this.reload();
    }
    reload() {
        let input = {
            skipCount: 0,
            maxResultCount: 10,
            sorting: 'sequence'
        };
        const customerStreamCreator = (query) => {
            query = input;
            return this.pageService.getBlogs(input);
        };
        this.list.hookToQuery(customerStreamCreator).subscribe((res) => {
            this.datas = res.items;
            this.count = res.totalCount;
        });
    }
    showDetail(blog) {
        if (blog == null)
            return;
        this.postStateService.setBlog(blog);
    }
    deleteBlog(blog) {
        console.log(blog);
        alert("開發中…");
    }
    handleCancel() {
        this.isVisible = false;
    }
    save() {
        if (!this.form.valid)
            return;
        //TODO delete file and code refactoring
        let uploadImageInfos = this.defaultImagePicker.getUploadFiles();
        let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
        let fileId = "";
        if ((uploadImageInfos.length > 0)) {
            if (this.selected.iconUrl == uploadImageInfos[0].fileName) {
                this.saveBlog(this.selected.iconUrl);
                return;
            }
            this.fileService.uploadFile(uploadImageInfos[0].file, this.directory.id).subscribe(x => {
                fileId = x.id;
                this.saveBlog(fileId);
            });
        }
        else
            this.saveBlog("");
    }
    saveBlog(fileId) {
        let input = Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), { id: this.selected.id });
        input.iconUrl = fileId;
        let action;
        if (input.id)
            action = this.pageService.updateBlog(input.id, input);
        else {
            input.no = input.displayName;
            action = this.pageService.createBlog(input);
        }
        action.subscribe((x) => {
            this.toasterService.success('修改成功！');
            this.isVisible = false;
            this.list.get();
        });
    }
    add() {
        this.selected = {};
        this.defaultImages = [];
        this.openModal();
    }
    edit(id) {
        this.pageService.getBlogById(id).subscribe(x => {
            this.selected = x;
            this.defaultImages = [];
            if (x.iconUrl)
                this.defaultImages.push(new ImageFile(x.iconUrl, this.fileService.getFileUrl(x.iconUrl)));
            this.openModal();
        });
    }
    buildForm() {
        const data = new FormPropData(this.injector, this.selected);
        this.form = null;
        this.form = generateFormFromProps(data);
    }
    openModal() {
        this.buildForm();
        this.isVisible = true;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(ɵɵdirectiveInject(ExtensionsService), ɵɵdirectiveInject(PageService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ListService), ɵɵdirectiveInject(FileService), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(PostStateService)); };
ListComponent.ɵcmp = ɵɵdefineComponent({ type: ListComponent, selectors: [["fs-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
    } }, features: [ɵɵProvidersFeature([
            ListService,
            {
                provide: EXTENSIONS_IDENTIFIER,
                useValue: "Cms::FS.Cms.Blogs" /* Blog */,
            },
        ])], decls: 12, vars: 9, consts: [[1, "mb-md"], ["nz-button", "", 2, "margin-right", "10px", 3, "nzType", "click"], ["nz-button", "", 3, "nzType", "click"], [3, "data", "recordsTotal", "list", "haveSelect", "select"], ["nzTitle", "blog", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["footer", ""], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [3, "selectedRecord", 4, "ngIf"], [1, "form-group"], ["for", "exampleInputEmail1"], ["imageWidth", "40px", "imageHeight", "30px", "borderWidth", "80px", "borderHeight", "60px", 3, "existFiles", "maxImageCount"], ["DefaultImagePicker", ""], [3, "selectedRecord"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "button", 1);
        ɵɵlistener("click", function ListComponent_Template_button_click_2_listener() { return ctx.add(); });
        ɵɵelementStart(3, "span");
        ɵɵtext(4, "+\u5EFA\u7ACB");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 2);
        ɵɵlistener("click", function ListComponent_Template_button_click_5_listener() { return ctx.showDetail(null); });
        ɵɵtext(6, " \u5168\u90E8 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "nz-extensible-table", 3);
        ɵɵlistener("select", function ListComponent_Template_nz_extensible_table_select_7_listener($event) { return ctx.showDetail($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "nz-modal", 4);
        ɵɵlistener("nzVisibleChange", function ListComponent_Template_nz_modal_nzVisibleChange_8_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ListComponent_Template_nz_modal_nzOnCancel_8_listener() { return ctx.handleCancel(); });
        ɵɵtemplate(9, ListComponent_form_9_Template, 7, 4, "form", 5);
        ɵɵelementEnd();
        ɵɵtemplate(10, ListComponent_ng_template_10_Template, 4, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(11);
        ɵɵadvance(2);
        ɵɵproperty("nzType", "primary");
        ɵɵadvance(3);
        ɵɵproperty("nzType", "primary");
        ɵɵadvance(2);
        ɵɵproperty("data", ctx.datas)("recordsTotal", ctx.count)("list", ctx.list)("haveSelect", true);
        ɵɵadvance(1);
        ɵɵproperty("nzVisible", ctx.isVisible)("nzFooter", _r1);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.form);
    } }, directives: [NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, ExtensibleTableComponent, NzModalComponent, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, ImagePickerComponent, ExtensibleFormComponent], styles: [".listSelected[_ngcontent-%COMP%]{background-color:#e6f2ff!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'fs-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css'],
                providers: [
                    ListService,
                    {
                        provide: EXTENSIONS_IDENTIFIER,
                        useValue: "Cms::FS.Cms.Blogs" /* Blog */,
                    },
                ],
            }]
    }], function () { return [{ type: ExtensionsService }, { type: PageService }, { type: Injector }, { type: ListService }, { type: FileService }, { type: ToasterService }, { type: PostStateService }]; }, { defaultImagePicker: [{
            type: ViewChild,
            args: ["DefaultImagePicker"]
        }] }); })();

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
// 
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
    constructor(router, pageService, postStateService) {
        this.router = router;
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
    gotoDetail(id) {
        if (id)
            this.router.navigate(["/cms/post/detail/" + id]);
        else
            this.router.navigate(["/cms/post/detail"]);
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(PageService), ɵɵdirectiveInject(PostStateService)); };
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
    }], function () { return [{ type: Router }, { type: PageService }, { type: PostStateService }]; }, null); })();

function UploadFileComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵelementStart(2, "a");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "td");
    ɵɵelementStart(5, "a", 8);
    ɵɵlistener("click", function UploadFileComponent_tr_15_Template_a_click_5_listener() { ɵɵrestoreView(_r4); const data_r2 = ctx.$implicit; const ctx_r3 = ɵɵnextContext(); return ctx_r3.delete(data_r2); });
    ɵɵtext(6, "\u522A\u9664");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(data_r2);
} }
// import { Confirmation, ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';
// import { NzModalRef } from 'ng-zorro-antd/modal';
// import { FileService } from '@fs-tw/theme-core';
class UploadFileComponent {
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
UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) { return new (t || UploadFileComponent)(ɵɵdirectiveInject(ConfirmationService)); };
UploadFileComponent.ɵcmp = ɵɵdefineComponent({ type: UploadFileComponent, selectors: [["fs-upload-file"]], inputs: { existFileUrls: "existFileUrls" }, decls: 16, vars: 6, consts: [["nzType", "drag", 3, "nzFileList", "nzBeforeUpload", "nzMultiple", "nzFileListChange"], [1, "ant-upload-drag-icon"], ["nz-icon", "", "nzType", "inbox"], [1, "ant-upload-text"], [1, "my-md"], ["nzSimple", "false", "nzSize", "small", 3, "nzData", "nzShowPagination"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [1, "text-red", 3, "click"]], template: function UploadFileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-upload", 0);
        ɵɵlistener("nzFileListChange", function UploadFileComponent_Template_nz_upload_nzFileListChange_0_listener($event) { return ctx.fileList = $event; });
        ɵɵelementStart(1, "p", 1);
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "p", 3);
        ɵɵtext(4, "\u9EDE\u64CA\u6B64\u8655\u6216\u5C07\u6A94\u6848\u62D6\u62FD\u81F3\u6B64\u8655\u9032\u884C\u4E0A\u50B3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(5, "div", 4);
        ɵɵelementStart(6, "nz-table", 5, 6);
        ɵɵelementStart(8, "thead");
        ɵɵelementStart(9, "tr");
        ɵɵelementStart(10, "th");
        ɵɵtext(11, "\u6A94\u540D");
        ɵɵelementEnd();
        ɵɵelementStart(12, "th");
        ɵɵtext(13, "-");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "tbody");
        ɵɵtemplate(15, UploadFileComponent_tr_15_Template, 7, 1, "tr", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzFileList", ctx.fileList)("nzBeforeUpload", ctx.beforeUpload)("nzMultiple", true);
        ɵɵadvance(6);
        ɵɵproperty("nzData", ctx.existFileUrls)("nzShowPagination", false);
        ɵɵadvance(9);
        ɵɵproperty("ngForOf", ctx.existFileUrls);
    } }, directives: [NzUploadComponent, ɵNzTransitionPatchDirective, NzIconDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UploadFileComponent, [{
        type: Component,
        args: [{
                selector: 'fs-upload-file',
                templateUrl: './upload-file.component.html',
                styleUrls: ['./upload-file.component.css']
            }]
    }], function () { return [{ type: ConfirmationService }]; }, { existFileUrls: [{
            type: Input
        }] }); })();

const _c0$2 = ["DefaultImagePicker"];
function DetailComponent_form_2_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-option", 32);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    ɵɵproperty("nzValue", item_r10.id)("nzLabel", item_r10.displayName);
} }
const _c1$1 = function () { return { standalone: true }; };
function DetailComponent_form_2_se_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "se", 33);
    ɵɵelementStart(1, "quill-editor", 34);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_se_22_Template_quill_editor_ngModelChange_1_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(2); return ctx_r11.data.content = $event; });
    ɵɵelementStart(2, "div", 35);
    ɵɵelementStart(3, "span", 36);
    ɵɵelement(4, "button", 37);
    ɵɵelement(5, "button", 38);
    ɵɵelement(6, "button", 39);
    ɵɵelement(7, "button", 40);
    ɵɵelementEnd();
    ɵɵelementStart(8, "span", 36);
    ɵɵelement(9, "button", 41);
    ɵɵelement(10, "button", 42);
    ɵɵelementEnd();
    ɵɵelementStart(11, "span");
    ɵɵelement(12, "button", 43);
    ɵɵelement(13, "button", 44);
    ɵɵelementEnd();
    ɵɵelementStart(14, "span", 36);
    ɵɵelement(15, "button", 45);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r7.data.content)("ngModelOptions", ɵɵpureFunction0(2, _c1$1));
} }
function DetailComponent_form_2_se_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "se", 46);
    ɵɵelementStart(1, "input", 47);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_se_23_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.data.url = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r8.data.url);
} }
function DetailComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 4, 5);
    ɵɵelementStart(2, "se", 6);
    ɵɵelementStart(3, "nz-select", 7);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_select_ngModelChange_3_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(); return ctx_r15.data.blogId = $event; });
    ɵɵtemplate(4, DetailComponent_form_2_nz_option_4_Template, 1, 2, "nz-option", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "se", 9);
    ɵɵelementStart(6, "nz-radio-group", 10);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_radio_group_ngModelChange_6_listener($event) { ɵɵrestoreView(_r16); const ctx_r17 = ɵɵnextContext(); return ctx_r17.data.disable = $event; });
    ɵɵelementStart(7, "label", 11);
    ɵɵtext(8, "\u958B");
    ɵɵelementEnd();
    ɵɵelementStart(9, "label", 11);
    ɵɵtext(10, "\u95DC");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "se", 12);
    ɵɵelementStart(12, "nz-date-picker", 13);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_date_picker_ngModelChange_12_listener($event) { ɵɵrestoreView(_r16); const ctx_r18 = ɵɵnextContext(); return (ctx_r18.dateRange[0] = $event); });
    ɵɵelementEnd();
    ɵɵelementStart(13, "nz-date-picker", 14);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_date_picker_ngModelChange_13_listener($event) { ɵɵrestoreView(_r16); const ctx_r19 = ɵɵnextContext(); return (ctx_r19.dateRange[1] = $event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "se", 15);
    ɵɵelementStart(15, "input", 16);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_input_ngModelChange_15_listener($event) { ɵɵrestoreView(_r16); const ctx_r20 = ɵɵnextContext(); return ctx_r20.data.title = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "se", 17);
    ɵɵelementStart(17, "input", 18);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_input_ngModelChange_17_listener($event) { ɵɵrestoreView(_r16); const ctx_r21 = ɵɵnextContext(); return ctx_r21.data.subtitle = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "se", 19);
    ɵɵelementStart(19, "nz-select", 20);
    ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_select_ngModelChange_19_listener($event) { ɵɵrestoreView(_r16); const ctx_r22 = ɵɵnextContext(); return ctx_r22.data.displayMode = $event; });
    ɵɵelement(20, "nz-option", 21);
    ɵɵelement(21, "nz-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(22, DetailComponent_form_2_se_22_Template, 16, 3, "se", 23);
    ɵɵtemplate(23, DetailComponent_form_2_se_23_Template, 2, 1, "se", 24);
    ɵɵelementStart(24, "se", 25);
    ɵɵelementStart(25, "nz-tabset");
    ɵɵelementStart(26, "nz-tab", 26);
    ɵɵelementStart(27, "se");
    ɵɵelement(28, "image-picker", 27, 28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(30, "nz-tab", 29);
    ɵɵelementStart(31, "se");
    ɵɵelement(32, "fs-upload-file", 30);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(33, "se");
    ɵɵelementStart(34, "button", 31);
    ɵɵlistener("click", function DetailComponent_form_2_Template_button_click_34_listener() { ɵɵrestoreView(_r16); const ctx_r23 = ɵɵnextContext(); return ctx_r23.save(); });
    ɵɵtext(35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r5 = ɵɵreference(1);
    const ctx_r0 = ɵɵnextContext();
    const _r1 = ɵɵreference(4);
    const _r3 = ɵɵreference(6);
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r0.data.blogId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.blogs);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r0.data.disable);
    ɵɵadvance(1);
    ɵɵproperty("nzValue", false);
    ɵɵadvance(2);
    ɵɵproperty("nzValue", true);
    ɵɵadvance(3);
    ɵɵproperty("nzAllowClear", false)("ngModel", ctx_r0.dateRange[0]);
    ɵɵadvance(1);
    ɵɵproperty("nzAllowClear", true)("ngModel", ctx_r0.dateRange[1]);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r0.data.title);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r0.data.subtitle);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r0.data.displayMode);
    ɵɵadvance(1);
    ɵɵproperty("nzValue", 0);
    ɵɵadvance(1);
    ɵɵproperty("nzValue", 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.data.displayMode == 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.data.displayMode == 1);
    ɵɵadvance(5);
    ɵɵproperty("existFiles", ctx_r0.defaultImages)("uploadTextTemplate", _r1)("imageTemplate", _r3)("inLine", false);
    ɵɵadvance(4);
    ɵɵproperty("existFileUrls", ctx_r0.data.attachmentFileUrls);
    ɵɵadvance(2);
    ɵɵproperty("disabled", _r5.invalid);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", !ctx_r0.data.id ? "\u5EFA\u7ACB" : "\u66F4\u65B0", " ");
} }
function DetailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 48);
    ɵɵelementStart(1, "div", 49);
    ɵɵelement(2, "i", 50);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 51);
    ɵɵtext(4, " \u8ACB\u5C07\u6A94\u6848\u62D6\u79FB\u81F3\u6B64\uFF0C\u6216\u6309\u4E0B\u6B64\u5716\u793A\u4E0A\u50B3\u6A94\u6848 ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function DetailComponent_ng_template_5_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 61);
    ɵɵlistener("click", function DetailComponent_ng_template_5_a_2_Template_a_click_0_listener() { ɵɵrestoreView(_r28); const item_r24 = ɵɵnextContext().$implicit; const ctx_r27 = ɵɵnextContext(); return ctx_r27.coverImage = item_r24.file.fileName; });
    ɵɵtext(1, "\u8A2D\u70BA\u5C01\u9762\u5716");
    ɵɵelementEnd();
} }
function DetailComponent_ng_template_5_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 62);
} }
function DetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 52);
    ɵɵelementStart(1, "div", 53);
    ɵɵtemplate(2, DetailComponent_ng_template_5_a_2_Template, 2, 0, "a", 54);
    ɵɵtemplate(3, DetailComponent_ng_template_5_i_3_Template, 1, 0, "i", 55);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 56);
    ɵɵlistener("click", function DetailComponent_ng_template_5_Template_div_click_4_listener() { ɵɵrestoreView(_r31); const item_r24 = ctx.$implicit; const ctx_r30 = ɵɵnextContext(); return ctx_r30.defaultImagePicker.controllModal(true, item_r24.file); });
    ɵɵelementStart(5, "div", 57);
    ɵɵelement(6, "img", 58);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 59);
    ɵɵelementStart(8, "div", 57);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 53);
    ɵɵelementStart(11, "div", 57);
    ɵɵelementStart(12, "a", 60);
    ɵɵlistener("click", function DetailComponent_ng_template_5_Template_a_click_12_listener() { ɵɵrestoreView(_r31); const item_r24 = ctx.$implicit; const ctx_r32 = ɵɵnextContext(); return ctx_r32.deleteFile(item_r24.file.fileName); });
    ɵɵtext(13, "\u522A\u9664");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.coverImage != item_r24.file.fileName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.coverImage == item_r24.file.fileName);
    ɵɵadvance(3);
    ɵɵproperty("src", item_r24.file.fileUrl, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r24.file.fileName);
} }
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
    constructor(router, activatedRoute, pageService, confirmationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.confirmationService = confirmationService;
        this.dateRange = [new Date(), new Date()];
        this.defaultImages = [];
        this.blogs = [];
        this.isLoading = false;
        this.coverImage = '';
    }
    ngOnInit() {
        this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
        console.log(this.postId);
        this.getPost();
        this.getBlogs();
    }
    getPost() {
        this.data = {
            blogId: null,
            title: '',
            subtitle: '',
            url: '',
            content: '',
            disable: false,
            startTime: '',
            endTime: '',
            displayMode: 0,
            sequence: 0,
            attachmentFileUrls: [],
            postImages: []
        };
        this.dateRange = [new Date(), new Date()];
        this.defaultImages = [new ImageFile('test', 'https://dummyimage.com/200x130/000/fff')];
        this.coverImage = 'test';
        if (this.postId) {
            this.pageService.getPostById(this.postId).subscribe((x) => {
                this.data = x;
                let st = x.startTime ? new Date(x.startTime) : new Date();
                let ed = x.endTime ? new Date(x.endTime) : new Date();
                this.dateRange = [st, ed];
                this.defaultImages = x.postImages.map(y => new ImageFile(y.url, y.url));
                let coverImageIndex = x.postImages.findIndex(y => y.isCover);
                if (coverImageIndex > -1)
                    this.coverImage = x.postImages[coverImageIndex].url;
            });
        }
    }
    getBlogs() {
        let input = {
            skipCount: 0,
            maxResultCount: 999,
            sorting: 'sequence'
        };
        this.pageService.getBlogs(input).subscribe((x) => {
            this.blogs = x.items;
        });
    }
    deleteFile(fileName) {
        this.confirmationService.warn(`確定刪除 ${fileName} 嗎？`, "系統訊息")
            .subscribe((result) => {
            if (result != Confirmation.Status.confirm)
                return;
            this.defaultImagePicker.deleteFile(fileName);
        });
    }
    save() {
        let item = cloneDeep(this.data);
        item.startTime = this.dateRange[0].toLocalISOString();
        item.endTime = this.dateRange[1].toLocalISOString();
        // TODO: 上傳檔案、上傳附件、加標籤
        let action;
        if (!this.postId) {
            action = this.pageService.createPost(item);
        }
        else {
            action = this.pageService.updatePost(this.postId, item);
        }
        action.subscribe((x) => {
            this.router.navigate(["cms/post"]);
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(PageService), ɵɵdirectiveInject(ConfirmationService)); };
DetailComponent.ɵcmp = ɵɵdefineComponent({ type: DetailComponent, selectors: [["fs-detail"]], viewQuery: function DetailComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
    } }, decls: 7, vars: 2, consts: [["nzTip", "\u8F09\u5165\u4E2D...", 3, "nzSpinning"], ["nz-form", "", "se-container", "1", "labelWidth", "150", 4, "ngIf"], ["Upload", ""], ["Image", ""], ["nz-form", "", "se-container", "1", "labelWidth", "150"], ["f", "ngForm"], ["label", "\u516C\u544A\u985E\u578B"], ["name", "blogId", "required", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["label", "\u524D\u53F0\u986F\u793A", "required", ""], ["name", "disable", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["label", "\u767C\u4F48\u6642\u9593", "required", ""], ["nzShowTime", "", "name", "startDate", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["nzShowTime", "", "name", "endDate", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["label", "\u6A19\u984C", "error", "\u5FC5\u586B", "required", ""], ["type", "text", "nz-input", "", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u526F\u6A19\u984C"], ["type", "text", "nz-input", "", "name", "Subtitle", 3, "ngModel", "ngModelChange"], ["label", "\u986F\u793A\u985E\u578B", "required", ""], ["name", "type", 3, "ngModel", "ngModelChange"], ["nzLabel", "\u5167\u6587", 3, "nzValue"], ["nzLabel", "\u9023\u7D50", 3, "nzValue"], ["label", "\u5167\u6587", 4, "ngIf"], ["label", "\u9023\u7D50", 4, "ngIf"], ["label", "\u4E0A\u50B3\u6A94\u6848", "optionalHelp", "\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B\uFF1A1080X608"], ["nzTitle", "\u5716\u7247"], ["borderWidth", "100%", "borderHeight", "132px", 3, "existFiles", "uploadTextTemplate", "imageTemplate", "inLine"], ["DefaultImagePicker", ""], ["nzTitle", "\u9644\u4EF6"], [3, "existFileUrls"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], [3, "nzValue", "nzLabel"], ["label", "\u5167\u6587"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], [1, "ql-image"], ["label", "\u9023\u7D50"], ["type", "text", "nz-input", "", "name", "url", 3, "ngModel", "ngModelChange"], [2, "text-align", "center"], [2, "color", "#26d7eb", "font-size", "48px"], ["nz-icon", "", "nzType", "inbox", 2, "display", "block"], [2, "font-size", "16px"], ["nz-row", "", 2, "border", "1px solid #ddd", "border-right", "0px", "margin-top", "5px"], ["nz-col", "", "nzSpan", "4", 1, "imgItemDiv"], ["class", "text-blue", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", "style", "font-size: 16px;", "class", "text-green", 4, "ngIf"], ["nz-col", "", "nzSpan", "8", 1, "imgItemDiv", 2, "cursor", "pointer", 3, "click"], [2, "width", "100%"], [2, "max-height", "40px", 3, "src"], ["nz-col", "", "nzSpan", "8", 1, "imgItemDiv"], [1, "text-red", 3, "click"], [1, "text-blue", 3, "click"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 1, "text-green", 2, "font-size", "16px"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-spin", 0);
        ɵɵelementStart(1, "nz-card");
        ɵɵtemplate(2, DetailComponent_form_2_Template, 36, 23, "form", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(3, DetailComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, DetailComponent_ng_template_5_Template, 14, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("nzSpinning", ctx.isLoading);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.data);
    } }, directives: [NzSpinComponent, NzCardComponent, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NzFormDirective, SEContainerComponent, SEComponent, NzSelectComponent, RequiredValidator, NgControlStatus, NgModel, NgForOf, NzRadioGroupComponent, NzRadioComponent, NzDatePickerComponent, NzInputDirective, DefaultValueAccessor, NzOptionComponent, NzTabSetComponent, NzTabComponent, ImagePickerComponent, UploadFileComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, QuillEditorComponent, NzIconDirective, NzRowDirective, NzColDirective], styles: [".unchecked[_ngcontent-%COMP%]{border:1px solid #e4e4e4}.unchecked[_ngcontent-%COMP%]:hover{background-color:#00c1de;color:#fff}.imgItemDiv[_ngcontent-%COMP%]{border-right:1px solid #ddd;padding:5px;height:50px;display:grid;place-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DetailComponent, [{
        type: Component,
        args: [{
                selector: 'fs-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.less']
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: PageService }, { type: ConfirmationService }]; }, { defaultImagePicker: [{
            type: ViewChild,
            args: ["DefaultImagePicker"]
        }] }); })();

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

const _c0$3 = ["DefaultImagePicker"];
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
        ɵɵviewQuery(_c0$3, 1);
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
    } }, directives: [NgIf, NzModalComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NzFormDirective, SEContainerComponent, SEComponent, NzRadioGroupComponent, NgControlStatus, NgModel, NzRadioComponent, NumberValueAccessor, NzInputDirective, DefaultValueAccessor, RequiredValidator, ImagePickerComponent], styles: [".uploadImgGrid[_ngcontent-%COMP%]{display:grid;place-items:center;border:1px dashed #ddd;padding:10px;justify-content:center;background-color:#fafafa}"] });
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
    NzSpinModule,
    NzCardModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTabsModule,
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
        NzSpinModule,
        NzCardModule,
        NzSelectModule,
        NzDatePickerModule,
        NzTabsModule,
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

export { CmsAdminModule, FileService, GetFileByIdPipe, SharedModule };
//# sourceMappingURL=fs-tw-cms-admin.js.map
