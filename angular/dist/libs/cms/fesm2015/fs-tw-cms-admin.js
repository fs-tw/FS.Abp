import { ɵɵdefineInjectable, Injectable, Component, Injector, Input, Pipe, NgModule, ɵɵinject, ViewChild } from '@angular/core';
import { InternalStore, ListService, EnvironmentService, RestService, LazyModuleFactory, CoreModule, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SEModule } from '@delon/abc/se';
import { Confirmation, ToasterService, ConfirmationService } from '@abp/ng.theme.shared';
import { EXTENSIONS_IDENTIFIER, FormPropData, generateFormFromProps } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '@fs-tw/cms/config';
import { forkJoin, of, Subject } from 'rxjs';
import { Fs, Volo } from '@fs-tw/cms/proxy';
import { cloneDeep } from 'lodash';
import { format } from 'date-fns';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions';
import { map } from 'rxjs/operators';
import { NzTagModule } from 'ng-zorro-antd/tag';

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
PostStateService.ɵprov = ɵɵdefineInjectable({ factory: function PostStateService_Factory() { return new PostStateService(); }, token: PostStateService, providedIn: "root" });
PostStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];

class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-layout',
                template: "<router-outlet></router-outlet>\r\n",
                styles: [""]
            },] }
];
LayoutComponent.ctorParameters = () => [];

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
    deleteBlog(id) {
        return this.blogService.deleteByBlogPrimaryKey({ id });
    }
    //#endregion
    //#region File
    findByProviderByKeyAndGroup(key, group) {
        return this.directoriesApiService.findByProviderByKeyAndGroup(key, group);
    }
    deleteFile(id) {
        return this.fileDescriptorService.deleteById(id);
    }
    getFileDescriptor(id) {
        return this.fileDescriptorService.getById(id);
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
    deletePost(id) {
        return this.postService.deleteByPostPrimaryKey({ id });
    }
}
PageService.decorators = [
    { type: Injectable }
];
PageService.ctorParameters = () => [
    { type: Injector }
];

const ɵ0 = "Cms::FS.Cms.PostManagement" /* Post */;
class MainComponent {
    constructor(extensionsService, router, toasterService, confirmationService, pageService, list, postStateService) {
        this.extensionsService = extensionsService;
        this.router = router;
        this.toasterService = toasterService;
        this.confirmationService = confirmationService;
        this.pageService = pageService;
        this.list = list;
        this.postStateService = postStateService;
        this.postParams = {
            skipCount: 0,
            maxResultCount: 10,
            keyword: "",
            blogId: null
        };
        this.posts = [];
        this.totalCount = 0;
    }
    ngOnInit() {
        this.extensionsService.Actions$["Cms::FS.Cms.PostManagement" /* Post */].subscribe((x) => {
            switch (x.name) {
                case 'Edit':
                    this.gotoDetail(x.record.id);
                    break;
                case 'Delete':
                    this.deleteItem(x.record);
                    break;
            }
        });
        this.blog$ = this.postStateService.getBlog();
        this.onBlogChange();
    }
    onBlogChange() {
        this.sub = this.blog$.subscribe((blog) => {
            this.blogId = blog == null ? null : blog.id;
            this.blogName = blog == null ? "全部" : blog.displayName;
            this.postParams.blogId = this.blogId;
            this.hookToQuery();
        });
    }
    gotoDetail(id) {
        if (id)
            this.router.navigate(["/cms/post/detail/" + id]);
        else
            this.router.navigate(["/cms/post/detail"], {
                queryParams: {
                    blogId: this.postParams.blogId
                }
            });
    }
    hookToQuery() {
        if (this.hookToQueryScribe)
            this.hookToQueryScribe.unsubscribe();
        const query = (query) => {
            query.keyword = this.postParams.keyword;
            query.blogId = this.postParams.blogId;
            return this.pageService.getPostsByBlogId(query);
        };
        this.hookToQueryScribe = this.list.hookToQuery(query).subscribe((res) => {
            this.posts = res.items;
            this.totalCount = res.totalCount;
        });
    }
    deleteItem(item) {
        this.confirmationService
            .warn('確認要刪除嗎？', '系統訊息', {
            cancelText: "取消",
            yesText: "確定"
        })
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                let files = item.attachmentFileInfos.map(x => x.fileId);
                let images = item.postImages.map(x => x.imageId);
                let deleteFileActions = files.concat(images).map(x => this.pageService.deleteFile(x));
                forkJoin(deleteFileActions).subscribe();
                this.pageService.deletePost(item.id).subscribe(x => {
                    this.toasterService.success("刪除成功！");
                    this.list.get();
                });
            }
        });
    }
    ngOnDestroy() {
        if (this.hookToQueryScribe)
            this.hookToQueryScribe.unsubscribe();
        if (this.sub)
            this.sub.unsubscribe();
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                template: "<nz-row nzGutter=\"16\">\r\n  <nz-col nzSpan=\"8\">\r\n    <cms-list></cms-list>\r\n  </nz-col>\r\n  <nz-col nzSpan=\"16\">\r\n    <div>\r\n      <div class=\"mb-md\">\r\n        <h5>{{'Cms::FS.Cms.BlogType' | abpLocalization}}:{{ blogName }}</h5>\r\n        <button nz-button nzType=\"primary\" (click)=\"gotoDetail()\" style=\"margin-right: 20px;\">\r\n          {{'AbpIdentityServer::Add'|abpLocalization}}\r\n        </button>\r\n        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\" style=\"width: 300px;\">\r\n          <input type=\"text\" [(ngModel)]=\"postParams.keyword\" nz-input placeholder=\"\u8F38\u5165\u540D\u7A31\" />\r\n        </nz-input-group>\r\n        <ng-template #suffixIconButton>\r\n          <button nz-button nzType=\"primary\" (click)=\"hookToQuery()\" nzSearch>\r\n            <i nz-icon nzType=\"search\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <nz-extensible-table [data]=\"posts\" [scroll]=\"{x:'600px'}\" [recordsTotal]=\"totalCount\" [list]=\"list\"\r\n        [haveRowDetail]=\"false\">\r\n     \r\n        <ng-template row-detail-template let-node>\r\n          <div>\r\n            <h3>{{'Cms::FS.Post.Subtitle' | abpLocalization}}</h3>\r\n            <p>{{ node.subtitle || '-' }}</p>\r\n            <div *ngIf=\"node.displayMode == 0\">\r\n              <h3>{{'Cms::FS.Post.Content' | abpLocalization}}</h3>\r\n              <quill-view [content]=\"node.content\"></quill-view>\r\n            </div>\r\n            <div *ngIf=\"node.displayMode == 1\">\r\n              <h3>{{'Cms::FS.Post.Url' | abpLocalization}}</h3>\r\n              <p>{{ node.url }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        \r\n      </nz-extensible-table>\r\n    </div>\r\n  </nz-col>\r\n</nz-row>",
                providers: [
                    ListService,
                    {
                        provide: EXTENSIONS_IDENTIFIER,
                        useValue: ɵ0,
                    },
                ],
                styles: ["nz-select{margin-right:8px;width:220px}.bg-white{background-color:#fff}"]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: ExtensionsService },
    { type: Router },
    { type: ToasterService },
    { type: ConfirmationService },
    { type: PageService },
    { type: ListService },
    { type: PostStateService }
];

class FileInfo {
    constructor(fileName = '', fileUrl = '') {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
}
class FileData {
    constructor(fileName, fileUrl, file) {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.file = file;
        this.isUpload = this.file != null;
    }
}
class UploadFileComponent {
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.existFiles = [];
        this.fileList = [];
        this.beforeUpload = (file) => {
            let exist = this.existFiles.findIndex(x => x.fileName == file.name) > -1 ||
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
                this.existFiles = this.existFiles.filter(x => x != url);
            }
        });
    }
    getNewUploadFiles() {
        let updateFiles = this.fileList.map((x) => new FileData(x.name, '', x));
        return updateFiles;
    }
}
UploadFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-upload-file',
                template: "\r\n\r\n<nz-upload nzType=\"drag\" [(nzFileList)]=\"fileList\" [nzBeforeUpload]=\"beforeUpload\" [nzMultiple]=\"true\">\r\n  <p class=\"ant-upload-drag-icon\">\r\n    <i nz-icon nzType=\"inbox\"></i>\r\n  </p>\r\n  <p class=\"ant-upload-text\">\u9EDE\u64CA\u6B64\u8655\u6216\u5C07\u6A94\u6848\u62D6\u62FD\u81F3\u6B64\u8655\u9032\u884C\u4E0A\u50B3</p>\r\n</nz-upload>\r\n\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"existFiles\"  nzSimple=\"false\" nzSize=\"small\" [nzShowPagination]=\"false\">\r\n  <thead>\r\n    <tr>\r\n      <th>\u6A94\u540D</th>\r\n      <th>-</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of existFiles\">\r\n      <td>\r\n        <a [href]=\"data.fileUrl\">{{data.fileName}}</a>\r\n        <!-- <a>{{ data }}</a> -->\r\n      </td>\r\n      <td>\r\n        <a (click)=\"delete(data)\" class=\"text-red\">\u522A\u9664</a>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</nz-table>",
                styles: [""]
            },] }
];
UploadFileComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
UploadFileComponent.propDecorators = {
    existFiles: [{ type: Input }]
};

class GetFileByIdPipe {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    //TODO:if api route  this will broke;
    transform(value) {
        return this.environmentService.getApiUrl() + `${"/api/file/files/file-content" /* FileContentPath */}?id=${value}`;
    }
}
GetFileByIdPipe.decorators = [
    { type: Pipe, args: [{
                name: 'getFileById'
            },] }
];
GetFileByIdPipe.ctorParameters = () => [
    { type: EnvironmentService }
];

const COMPONENT = [GetFileByIdPipe];
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...COMPONENT],
                imports: [
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ],
                exports: [
                    ...COMPONENT,
                    ThemeAlainMsSharedModule,
                    UiExtensionsModule
                ]
            },] }
];

class FileService {
    constructor(restService, environmentService) {
        this.restService = restService;
        this.environmentService = environmentService;
    }
    getFileUrl(id) {
        if (!id)
            return "";
        return this.environmentService.getApiUrl() + `${"/api/file/files/file-content" /* FileContentPath */}?id=${id}`;
    }
    uploadFile(file, directoryId) {
        let formData = new FormData();
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
    getFileBlobById(id) {
        return this.restService.request({
            method: 'GET',
            url: `${"/api/file/files/file-content" /* FileContentPath */}`,
            params: { id },
            responseType: 'blob'
        });
    }
}
FileService.ɵprov = ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(ɵɵinject(RestService), ɵɵinject(EnvironmentService)); }, token: FileService, providedIn: "root" });
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FileService.ctorParameters = () => [
    { type: RestService },
    { type: EnvironmentService }
];

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

class DetailComponent {
    constructor(router, fileService, activatedRoute, pageService, confirmationService) {
        this.router = router;
        this.fileService = fileService;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.confirmationService = confirmationService;
        this.dateRange = [new Date(), new Date()];
        this.defaultImages = [];
        this.defaultFiles = [];
        this.blogs = [];
        this.isLoading = false;
        this.coverImage = '';
        this.contentFileName = "";
        this.blobToFile = (theBlob, fileName) => {
            return new File([theBlob], fileName, { type: "text/plain;charset=utf-8" });
        };
        this.postId = this.activatedRoute.snapshot.paramMap.get('postId');
        this.pageService.findByProviderByKeyAndGroup("FS.Cms.Posts", this.postId ? this.postId : this.getRand()).subscribe(x => {
            this.directory = x;
        });
    }
    ngOnInit() {
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
            attachmentFileInfos: [],
            postImages: []
        };
        this.contentFileName = "";
        this.dateRange = [new Date(), new Date()];
        this.defaultImages = [];
        this.defaultFiles = [];
        this.coverImage = '';
        if (this.postId) {
            this.pageService.getPostById(this.postId).subscribe((x) => {
                this.data = x;
                let st = x.startTime ? new Date(x.startTime) : new Date();
                let ed = x.endTime ? new Date(x.endTime) : new Date();
                this.dateRange = [st, ed];
                this.defaultImages = x.postImages.map(y => new ImageFile(y.name, y.imageId));
                this.defaultFiles = x.attachmentFileInfos.map(y => new FileInfo(y.name, this.fileService.getFileUrl(y.fileId)));
                let coverImageIndex = x.postImages.findIndex(y => y.isCover);
                if (coverImageIndex > -1)
                    this.coverImage = x.postImages[coverImageIndex].imageId;
                if (x.content) {
                    this.pageService.getFileDescriptor(x.content).subscribe(x => {
                        this.contentFileName = x.name;
                    });
                    this.fileService.getFileBlobById(x.content).subscribe(data => {
                        const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
                        let reader = new FileReader();
                        reader.onload = () => {
                            this.data.content = reader.result.toString();
                        };
                        reader.readAsText(blob);
                    });
                }
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
            if (!this.postId)
                this.data.blogId = this.activatedRoute.snapshot.queryParamMap.get('blogId');
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
    getRand() {
        return (Math.floor(Math.random() * 100) + 1).toString();
    }
    save() {
        // TODO: 刪除檔案、加標籤
        // let deleteImages = this.defaultImagePicker.getDeleteFileNames();
        // let deleteTargets = item.postImages.filter(x => deleteImages.some(y => y == x.name));
        // let deleteActions = deleteTargets.map(x=>{
        //   return this.pageService.deleteFile(x.imageId);
        // })
        // forkJoin(deleteActions).subscribe(x=>{})
        var _a;
        let item = cloneDeep(this.data);
        item.startTime = this.dateRange[0].toLocalISOString();
        item.endTime = (_a = this.dateRange[1]) === null || _a === void 0 ? void 0 : _a.toLocalISOString();
        let contentAction$ = of("");
        if (item.displayMode == Fs.Cms.Posts.DisplayMode.內文) {
            // let now = new Date();
            const blob = new Blob([item.content], { type: "text/plain;charset=utf-8" });
            let useContentFileName = format(new Date(), 'yyyyMMddHHmmss') + '-' + this.getRand() + ".txt"; //now.toLocaleDateString() + "_" + now.toLocaleTimeString() + "_" + (Math.floor(Math.random() * 100) + 1) + ".txt";
            if (this.contentFileName)
                useContentFileName = this.contentFileName;
            let file = this.blobToFile(blob, useContentFileName);
            contentAction$ = this.fileService.uploadFile(file, this.directory.id).pipe(map(x => x.id));
        }
        let imagesAction = this.uploadImage$(item);
        let filesAction = this.uploadFiles$(item);
        forkJoin([imagesAction, filesAction, contentAction$]).subscribe(x => {
            item.postImages = x[0];
            item.attachmentFileInfos = x[1];
            item.content = x[2];
            this.savePost(item);
        });
    }
    uploadFiles$(item) {
        let domainItem = cloneDeep(item);
        let newUploadFiles = this.defaultUploadFile.getNewUploadFiles();
        let existFileNames = this.defaultUploadFile.existFiles.map(x => x.fileName);
        domainItem.attachmentFileInfos = domainItem.attachmentFileInfos.filter(x => existFileNames.some(y => y == x.name));
        if (newUploadFiles.length == 0) {
            return of(domainItem.attachmentFileInfos);
        }
        let fileActions = newUploadFiles.map(savefile => {
            return this.fileService.uploadFile(savefile.file, this.directory.id);
        });
        return forkJoin(fileActions).pipe(map(x => {
            let result = x.map(y => {
                return {
                    name: y.name,
                    fileId: y.id
                };
            });
            return result.concat(domainItem.attachmentFileInfos);
        }));
    }
    uploadImage$(item) {
        let domainItem = cloneDeep(item);
        let newUploadImages = this.defaultImagePicker.getNewUploadFiles();
        let existFileNames = this.defaultImagePicker.existFiles.map(x => x.fileName);
        domainItem.postImages = domainItem.postImages.filter(x => existFileNames.some(y => y == x.name));
        if (newUploadImages.length == 0) {
            return of(domainItem.postImages);
        }
        let fileActions = newUploadImages.map(savefile => {
            return this.fileService.uploadFile(savefile.file, this.directory.id);
        });
        return forkJoin(fileActions).pipe(map(x => {
            let result = x.map(y => {
                return {
                    name: y.name,
                    isCover: (this.coverImage == y.name),
                    imageId: y.id
                };
            });
            return result.concat(domainItem.postImages);
        }));
    }
    savePost(item) {
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
DetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-detail',
                template: "<nz-spin nzTip=\"{{'Cms::FS.Message:Loading' |abpLocalization }}\" [nzSpinning]=\"isLoading\">\r\n\r\n  <nz-card>\r\n\r\n    <form nz-form #f=\"ngForm\" se-container=\"1\" labelWidth=\"150\" *ngIf=\"data\">\r\n      <se label=\"{{'Cms::FS.Cms.BlogType'|abpLocalization}}\">\r\n        <nz-select [(ngModel)]=\"data.blogId\" name=\"blogId\" required>\r\n          <nz-option *ngFor=\"let item of blogs\" [nzValue]=\"item.id\" [nzLabel]=\"item.displayName\"></nz-option>\r\n        </nz-select>\r\n      </se>\r\n      <se label=\"{{'Cms::FS.Blog.Enable' |abpLocalization }}\" required>\r\n        <nz-radio-group [(ngModel)]=\"data.disable\" name=\"disable\">\r\n          <label nz-radio [nzValue]=\"false\">{{'Cms::FS.Blog.Enable' |abpLocalization }}</label>\r\n          <label nz-radio [nzValue]=\"true\">{{'Cms::FS.Blog.Disable' |abpLocalization }}</label>\r\n        </nz-radio-group>\r\n      </se>\r\n      <se label=\"{{'Cms::FS.Post.PublishDate'  |abpLocalization}}\" required>\r\n        <!-- <nz-range-picker nzShowTime nzFormat=\"yyyy/MM/dd HH:mm:ss\" name=\"dateRange\" [(ngModel)]=\"dateRange\"\r\n          [nzAllowClear]=\"false\"></nz-range-picker> -->\r\n        <nz-date-picker nzShowTime name=\"startDate\" [nzAllowClear]=\"false\"\r\n          [(ngModel)]=\"dateRange[0]\"></nz-date-picker>\r\n\r\n        <nz-date-picker nzShowTime name=\"endDate\" [nzAllowClear]=\"true\"\r\n          [(ngModel)]=\"dateRange[1]\"></nz-date-picker>\r\n        <!-- <nz-date-picker nzShowTime name=\"published_At\" nzPlaceHolder=\"Select Time\" [nzAllowClear]=\"false\"\r\n          [(ngModel)]=\"data.published_At\"></nz-date-picker> -->\r\n      </se>\r\n      <se label=\"{{'Cms::FS.Post.Title'  |abpLocalization}}\" error=\"\" required>\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.title\" name=\"title\" required>\r\n      </se>\r\n      <se label=\"{{'Cms::FS.Post.Subtitle'  |abpLocalization}}\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.subtitle\" name=\"Subtitle\">\r\n      </se>\r\n      <se label=\"{{'Cms::FS.Post.DisplayMode'  |abpLocalization}}\" required>\r\n        <nz-select [(ngModel)]=\"data.displayMode\" name=\"type\">\r\n          <nz-option [nzValue]=\"0\" nzLabel=\"{{'Cms::FS.Post.Content'  |abpLocalization}}\"></nz-option>\r\n          <nz-option [nzValue]=\"1\" nzLabel=\"{{'Cms::FS.Post.Url'  |abpLocalization}}\"></nz-option>\r\n        </nz-select>\r\n      </se>\r\n\r\n      <se label=\"{{'Cms::FS.Post.Content'  |abpLocalization}}\" *ngIf=\"data.displayMode == 0\">\r\n\r\n        <quill-editor [(ngModel)]=\"data.content\" [ngModelOptions]=\"{standalone: true}\">\r\n        </quill-editor>\r\n      </se>\r\n\r\n\r\n      <se label=\"{{'Cms::FS.Post.Url'  |abpLocalization}}\" *ngIf=\"data.displayMode == 1\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.url\" name=\"url\">\r\n      </se>\r\n\r\n      <se label=\"{{'Cms::FS.Post.AttachmentFileUrls'  |abpLocalization}}\" optionalHelp=\"  {{'Cms::FS.Message:SuggestionImageSize'| abpLocalization}}\uFF1A1080X608\">\r\n        <nz-tabset>\r\n          <nz-tab nzTitle=\"{{'Cms::FS.Post.AttachmentImage'  |abpLocalization}}\">\r\n            <se>\r\n              <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [uploadTextTemplate]=\"Upload\"\r\n                [imageTemplate]=\"Image\" [inLine]=\"false\" borderWidth=\"100%\" borderHeight=\"132px\"></image-picker>\r\n            </se>\r\n          </nz-tab>\r\n          <nz-tab nzTitle=\"{{'Cms::FS.Post.AttachmentFile'  |abpLocalization}}\">\r\n            <se>\r\n              <fs-upload-file  #DefaultUploadFile [existFiles]=\"defaultFiles\"></fs-upload-file>\r\n            </se>\r\n          </nz-tab>\r\n        </nz-tabset>\r\n      </se>\r\n\r\n      <!-- <se label=\"\u6A19\u7C64\">\r\n        <fs-tag [postId]=\"data.id\" [postTags]=\"data.postTags\"></fs-tag>\r\n      </se> -->\r\n\r\n      <se>\r\n        <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"f.invalid\">\r\n          {{ !data.id ? ('AbpUi::Create'  |abpLocalization) : ('AbpUi::Save'  |abpLocalization) }}\r\n        </button>\r\n      </se>\r\n    </form>\r\n  </nz-card>\r\n\r\n</nz-spin>\r\n\r\n\r\n<ng-template #Upload>\r\n  <div style=\"text-align: center;\">\r\n    <div style=\"color: #26d7eb; font-size: 48px;\">\r\n      <i nz-icon nzType=\"inbox\" style=\"display: block;\"></i>\r\n    </div>\r\n    <div style=\"font-size: 16px;\">\r\n     {{'Cms::FS.Message:DragOrClickHere'| abpLocalization}}\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n  <div nz-row style=\"border: 1px solid #ddd; border-right: 0px; margin-top: 5px;\">\r\n    <div nz-col nzSpan=\"4\" class=\"imgItemDiv\">\r\n      <a class=\"text-blue\" *ngIf=\"coverImage != item.file.fileName\" (click)=\"coverImage = item.file.fileName\">{{'Cms::FS.Post.SetAsCover'  |abpLocalization}}</a>\r\n      <i nz-icon nzType=\"check\" nzTheme=\"outline\" style=\"font-size: 16px;\" class=\"text-green\"\r\n        *ngIf=\"coverImage == item.file.fileName\"></i>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\" class=\"imgItemDiv\" style=\"cursor: pointer;\"\r\n      (click)=\"defaultImagePicker.controllModal(true, item.file)\">\r\n      <div style=\"width: 100%;\">\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-height: 40px;\" />     \r\n      </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\" class=\"imgItemDiv\">\r\n      <div style=\"width: 100%;\">{{ item.file.fileName }}</div>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\" class=\"imgItemDiv\">\r\n      <div style=\"width: 100%;\">\r\n        <a class=\"text-red\" (click)=\"deleteFile(item.file.fileName)\">{{'AbpUi::Delete'  |abpLocalization}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                styles: [".unchecked{border:1px solid #e4e4e4}.unchecked:hover{background-color:#00c1de;color:#fff}.imgItemDiv{border-right:1px solid #ddd;padding:5px;height:50px;display:grid;place-items:center}"]
            },] }
];
DetailComponent.ctorParameters = () => [
    { type: Router },
    { type: FileService },
    { type: ActivatedRoute },
    { type: PageService },
    { type: ConfirmationService }
];
DetailComponent.propDecorators = {
    defaultImagePicker: [{ type: ViewChild, args: ["DefaultImagePicker",] }],
    defaultUploadFile: [{ type: ViewChild, args: ["DefaultUploadFile",] }]
};

class RouteConfig {
    constructor(postStateService) {
        this.postStateService = postStateService;
    }
    resolve() {
        return this.postStateService.setBlog(null);
    }
}
RouteConfig.decorators = [
    { type: Injectable }
];
RouteConfig.ctorParameters = () => [
    { type: PostStateService }
];
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
PostRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
                providers: [
                    RouteConfig
                ]
            },] }
];

const ɵ0$1 = "Cms::FS.Cms.Blogs" /* Blog */;
class ListComponent {
    constructor(router, extensionsService, pageService, injector, list, fileService, toasterService, activatedRoute, confirmationService, postStateService) {
        this.router = router;
        this.extensionsService = extensionsService;
        this.pageService = pageService;
        this.injector = injector;
        this.list = list;
        this.fileService = fileService;
        this.toasterService = toasterService;
        this.activatedRoute = activatedRoute;
        this.confirmationService = confirmationService;
        this.postStateService = postStateService;
        this.datas = [];
        this.count = 0;
        this.defaultImages = [];
        this.isVisible = false;
        this.selected = {};
        this.defaultSelectId = null;
        this.activatedRoute.queryParamMap.subscribe(x => {
            this.defaultSelectId = x.get("blogId");
            this.pageService.findByProviderByKeyAndGroup("FS.Cms.Blogs", this.defaultSelectId ? this.defaultSelectId : this.getRand()).subscribe(x => {
                this.directory = x;
            });
        });
    }
    ngOnDestroy() {
        if (this.sub)
            this.sub.unsubscribe();
    }
    getRand() {
        return (Math.floor(Math.random() * 100) + 1).toString();
    }
    ngOnInit() {
        this.sub = this.extensionsService.Actions$["Cms::FS.Cms.Blogs" /* Blog */].subscribe((x) => {
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
            return this.pageService.getBlogs(input);
        };
        this.list.hookToQuery(customerStreamCreator).subscribe((res) => {
            this.datas = res.items;
            this.count = res.totalCount;
            if (this.defaultSelectId) {
                let select = this.datas.find(x => x.id == this.defaultSelectId);
                this.showDetail(select);
            }
        });
    }
    showDetail(blog) {
        if (blog == null) {
            this.router.navigate(['./cms/post']);
            this.postStateService.setBlog(null);
            return;
        }
        this.router.navigate(['./cms/post'], { queryParams: { 'blogId': blog.id } });
        this.postStateService.setBlog(blog);
    }
    deleteBlog(blog) {
        this.confirmationService
            .warn('確認要刪除嗎？(此Blog下的文章將移至不分類)', '系統訊息', {
            cancelText: "取消",
            yesText: "確定"
        })
            .subscribe((status) => {
            if (status === Confirmation.Status.confirm) {
                this.pageService.deleteBlog(blog.id).subscribe(x => {
                    this.toasterService.success("刪除成功！");
                    this.list.get();
                    this.router.navigate(["./cms/post"]);
                });
            }
        });
    }
    handleCancel() {
        this.isVisible = false;
    }
    save() {
        if (!this.form.valid)
            return;
        let deleteImageNames = this.defaultImagePicker.getDeleteFileNames();
        if (deleteImageNames.length > 0) {
            this.pageService.deleteFile(deleteImageNames[0]).subscribe(() => {
                this.uploadFile();
            });
        }
        else
            this.uploadFile();
    }
    uploadFile() {
        let uploadImageInfos = this.defaultImagePicker.getUploadFiles();
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
                this.defaultImages.push(new ImageFile(x.iconUrl, x.iconUrl));
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
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'cms-list',
                template: "<div>\r\n  <div class=\"mb-md\">   \r\n    <button nz-button [nzType]=\"'primary'\"  style=\"margin-right: 10px;\" (click)=\"add()\"><span>+ {{'AbpIdentityServer::Add'|abpLocalization}}</span></button>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"showDetail(null)\">\r\n      {{'AbpPermissionManagement::All'|abpLocalization}}\r\n    </button>\r\n  </div>\r\n\r\n  <nz-extensible-table [data]=\"datas\" [defaultSelectId]=\"defaultSelectId\" [recordsTotal]=\"count\" [list]=\"list\" [haveSelect]=\"true\"\r\n    (select)=\"showDetail($event)\">\r\n  </nz-extensible-table>\r\n\r\n</div>\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"blog\" (nzOnCancel)=\"handleCancel()\" [nzFooter]=\"footer\">\r\n  <form [formGroup]=\"form\" *ngIf=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <abp-extensible-form *ngIf=\"form\" [selectedRecord]=\"selected\"></abp-extensible-form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">{{'Cms::FS.Message:Image'|abpLocalization}}</label>\r\n      <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [maxImageCount]=\"1\" imageWidth=\"40px\"\r\n        imageHeight=\"30px\" borderWidth=\"80px\" borderHeight=\"60px\"></image-picker>\r\n    </div>\r\n  </form>\r\n</nz-modal>\r\n\r\n<ng-template #footer>\r\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">{{'AbpUi::Cancel' | abpLocalization}}</button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\">{{'AbpUi::Save' | abpLocalization}}</button>\r\n</ng-template>",
                providers: [
                    ListService,
                    {
                        provide: EXTENSIONS_IDENTIFIER,
                        useValue: ɵ0$1,
                    },
                ],
                styles: [".listSelected{background-color:#e6f2ff!important}nz-list-item{font-size:15px}.bg-white{background-color:#fff}"]
            },] }
];
ListComponent.ctorParameters = () => [
    { type: Router },
    { type: ExtensionsService },
    { type: PageService },
    { type: Injector },
    { type: ListService },
    { type: FileService },
    { type: ToasterService },
    { type: ActivatedRoute },
    { type: ConfirmationService },
    { type: PostStateService }
];
ListComponent.propDecorators = {
    defaultImagePicker: [{ type: ViewChild, args: ["DefaultImagePicker",] }]
};

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
TagComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-tag',
                template: "<br>\r\n<!-- <label>\u641C\u5C0B\u6A19\u7C64\uFF1A</label>\r\n\r\n<nz-select nzSize='small' [(ngModel)]=\"select\" nzAllowClear nzShowSearch style=\"width: 200px;\">\r\n    <nz-option-group *ngFor=\"let item of tagGroups\" [nzLabel]=\"item.tagGroupName\">\r\n        <nz-option *ngFor=\"let i of item.tags\" [nzLabel]=\"i.name\" [nzValue]=\"i.name\"></nz-option>\r\n    </nz-option-group>\r\n</nz-select>\r\n<button nz-button nzType=\"primary\" nzShape=\"circle\"><i nz-icon nzType=\"search\"></i></button> -->\r\n\r\n<!-- \u53EA\u555F\u7528\u4EE5\u4E0B table -->\r\n<!-- <nz-table #smallTable nzBordered nzSize=\"small\" [nzData]=\"tagGroups\" style=\"width: 500px;\" nzShowPagination=\"false\"\r\n    style=\"margin-top: 10px;\">\r\n    <thead>\r\n        <tr>\r\n            <th nzAlign=\"center\">\u5206\u985E</th>\r\n            <th nzAlign=\"center\">\u6A19\u7C64</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let tagGroup of smallTable.data; let parentIndex = index\" class=\"bg-white\">\r\n            <td>\r\n                <nz-tag [nzColor]=\"tagGroup.check? 'green' : 'default'\" (click)=\"checkParent(tagGroup)\" class=\"pointer\">\r\n                    <i nz-icon [nzType]=\"tagGroup.check ? 'check' : 'close'\"></i>\r\n                    {{ tagGroup.tagGroupName }}\r\n                </nz-tag>\r\n            </td>\r\n            <td>               \r\n                <nz-tag *ngFor=\"let tagItem of tagGroup.tags; let childIndex = index\" class=\"pointer\"\r\n                    [nzColor]=\"tagItem.check ? 'green' : 'default'\" (click)=\"checkChild(tagItem)\">\r\n                    <i nz-icon [nzType]=\"tagItem.check ? 'check' : 'close'\"></i>\r\n                    {{ tagItem.name }}\r\n                </nz-tag>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table> -->\r\n\r\n<!-- <button (click)=\"save()\">check</button> -->",
                styles: [""]
            },] }
];

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
PostModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LayoutComponent,
                    MainComponent,
                    DetailComponent,
                    ListComponent,
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
            },] }
];

class PageService$1 {
    constructor() {
        this.allTagData = new Subject();
        this.tagData = new Subject();
        this.allTagData$ = this.allTagData.asObservable();
        this.tagData$ = this.tagData.asObservable();
    }
    getTageListFromApi() {
        // this.tagsApiService.tagGroupGetList().pipe(tap(x => this.allTagData.next(x))).subscribe()
    }
    getTagOneFromApi(groupId) {
        if (!groupId) {
            this.tagData.next(null);
            return;
        }
        ;
        // this.tagsApiService.tagGroupGetByIdById(groupId).pipe(tap(x => this.tagData.next(x))).subscribe();
    }
}
PageService$1.decorators = [
    { type: Injectable }
];
PageService$1.ctorParameters = () => [];

class MainComponent$1 {
    constructor(PageService, confirmation) {
        this.PageService = PageService;
        this.confirmation = confirmation;
        this.tagGroupList = [];
    }
    ngOnInit() {
        this.subscription = this.PageService.allTagData$.subscribe(result => {
            this.tagGroupList = result;
        });
    }
    deleteGroup(id) {
        // this.confirmation
        //   .warn(`確認要刪除嗎？`, '系統訊息')
        //   .pipe(
        //     filter(res => res === Confirmation.Status.confirm),
        //     switchMap(() => this.PageService.deleteGroup(id)),
        //     take(1)
        //   )
        //   .subscribe(() => {
        //     this.PageService.getTageListFromApi();
        //   });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MainComponent$1.decorators = [
    { type: Component, args: [{
                template: "\r\n<nz-tabset nzType=\"card\">\r\n  <nz-tab nzTitle=\"\u5217\u8868\">\r\n    <nz-table #basicTable [nzData]=\"tagGroupList\" nzSize=\"small\" nzBordered>\r\n      <thead>\r\n        <tr>\r\n          <th nzWidth=\"75px\"></th>\r\n          <th>\u540D\u7A31</th>\r\n          <th>\u9805\u76EE</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let tagGroup of basicTable.data\" class=\"bg-white\">\r\n          <td nzWidth=\"75px\" nzAlign=\"center\">\r\n            <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n              \u64CD\u4F5C\r\n              <i nz-icon nzType=\"down\"></i>\r\n            </a>\r\n            <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n              <ul nz-menu nzSelectable>\r\n                <li nz-menu-item>\r\n                  <a class=\"text-blue\" [routerLink]=\"tagGroup.id\">\u7DE8\u8F2F</a>\r\n                </li>\r\n                <li nz-menu-item><a class=\"text-red\" (click)=\"deleteGroup(tagGroup.id)\">\u522A\u9664</a></li>\r\n              </ul>\r\n            </nz-dropdown-menu>\r\n          </td>\r\n          <td>{{ tagGroup.tagGroupName }}</td>\r\n          <td>\r\n            <nz-tag *ngFor=\"let tagItem of tagGroup.tags\">\r\n              {{ tagItem.name }}\r\n            </nz-tag>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </nz-tab>\r\n  <nz-tab nzTitle=\"\u65B0\u589E\">\r\n    <fs-tag-detail [isCreate]=\"true\"></fs-tag-detail>\r\n  </nz-tab>\r\n</nz-tabset>",
                styles: [".bg-white{background-color:#fff}"]
            },] }
];
MainComponent$1.ctorParameters = () => [
    { type: PageService$1 },
    { type: ConfirmationService }
];

class LayoutComponent$1 {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent$1.decorators = [
    { type: Component, args: [{
                template: "<!-- <fs-page-bar></fs-page-bar> -->\r\n<router-outlet></router-outlet>",
                styles: [""]
            },] }
];
LayoutComponent$1.ctorParameters = () => [];

class TagDetailComponent {
    constructor(pageService, location, toasterService) {
        this.pageService = pageService;
        this.location = location;
        this.toasterService = toasterService;
        this.isCreate = false;
        this.deleteTargetTagIds = [];
        this.data = {};
        this.inputList = [
        // { name: '' }
        ];
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ngOnInit() {
        this.subscription = this.pageService.tagData$.subscribe(x => {
            this.data = x;
        });
    }
    addOption() {
        this.inputList.push();
    }
    removeOption(index) {
        this.inputList.splice(index, 1);
    }
    removeOldOption(id) {
        // this.data.tags = this.data.tags.filter(x => x.id != id);
        this.deleteTargetTagIds.push(id);
    }
    save() {
        // if (this.inputList.filter(x => x.name == '').length > 0 && this.data.tagGroupName != '') {
        //   this.toasterService.error("不能有空值！")
        //   return;
        // }
        // if (this.isCreate) this.create()
        // else this.update();
    }
    update() {
        // this.pageService.updateGroup(this.data.id, this.data.tagGroupName).subscribe(x => {
        //   let createTarget = this.pageService.createGroupAndTags(this.data.id, this.inputList);
        //   let target = this.updateTags().concat(this.deleteTags());
        //   target.push(createTarget)
        //   forkJoin(target).subscribe(()=>{
        //     this.location.back();
        //     this.toasterService.success("修改成功！")
        //   })
        // })
    }
    updateTags() {
        // let obsList = this.data.tags.map(x => {
        //   return this.pageService.updateTag(x.id, x.name)
        // });
        // return obsList
        // forkJoin(obsList).subscribe();
    }
    deleteTags() {
        // let obsList = this.deleteTargetTagIds.map(x => {
        //   return this.pageService.delteTag(x);
        // })
        // return obsList;
        // forkJoin(obsList).subscribe()
    }
    create() {
        // this.pageService.createGroup({
        //   tagGroupName: this.data.tagGroupName
        // }).pipe(tap(x => this.createTags(x.id))).subscribe()
    }
    createTags(groupId) {
        // this.pageService.createGroupAndTags(groupId, this.inputList).subscribe(() => {
        //   this.pageService.getTageListFromApi();
        //   this.toasterService.success("新增成功！");
        //   this.clear();
        // })
    }
    clear() {
        // this.inputList = [
        //   { name: '' }
        // ];
        // this.deleteTargetTagIds = [];
        // this.data = {
        //   id: '',
        //   tagGroupName: '',
        //   tags: [
        //     {
        //       id: '',
        //       name: ''
        //     }
        //   ]
        // };
    }
}
TagDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-tag-detail',
                template: "<nz-card>\r\n  <form nz-form #f=\"ngForm\" se-container=\"1\">\r\n    <!-- <se label=\"\u540D\u7A31\">\r\n      <input type=\"text\" nz-input name=\"Createname\" required [(ngModel)]=\"data.tagGroupName\"  *ngIf=\"isCreate==false\"/>\r\n      <input type=\"text\" nz-input name=\"name\" required [(ngModel)]=\"data.tagGroupName\"   *ngIf=\"isCreate==true\"/>\r\n    </se>\r\n\r\n    <se [label]=\"addItem\" col=\"1\">\r\n      <ng-template #addItem>\r\n        <button nz-button (click)=\"addOption()\">\u65B0\u589E\u9805\u76EE</button>\r\n      </ng-template>\r\n      <div style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\" *ngIf=\"isCreate==false\">\r\n        <div *ngFor=\"let inputItem of data.tags;let i = index\">\r\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n            <input nz-input [(ngModel)]=\"inputItem.name\" [ngModelOptions]=\"{standalone: true}\"/>\r\n          </nz-input-group>\r\n          <ng-template #addOnBeforeTemplate>\r\n            <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOldOption(inputItem.id)\"></i>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n\r\n      <div  style=\"display: grid;grid-template-columns: repeat(auto-fill,200px);gap:8px\" >\r\n        <div *ngFor=\"let i of inputList\">\r\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n            <input nz-input [(ngModel)]=\"i.name\"  [ngModelOptions]=\"{standalone: true}\" />\r\n          </nz-input-group>\r\n\r\n          <ng-template #addOnBeforeTemplate>\r\n            <i nz-icon nzType=\"close\" class=\"pointer text-red\" (click)=\"removeOption(i)\"></i>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </se> -->\r\n\r\n\r\n    <se>\r\n      <button nz-button nzType=\"primary\" (click)=\"save()\">\u5B58\u6A94</button>\r\n    </se>\r\n  </form>\r\n</nz-card>",
                styles: [""]
            },] }
];
TagDetailComponent.ctorParameters = () => [
    { type: PageService$1 },
    { type: Location },
    { type: ToasterService }
];
TagDetailComponent.propDecorators = {
    isCreate: [{ type: Input }]
};

class RouteConfig$1 {
    constructor(pageService) {
        this.pageService = pageService;
    }
    resolve() {
        this.pageService.getTageListFromApi();
    }
}
RouteConfig$1.decorators = [
    { type: Injectable }
];
RouteConfig$1.ctorParameters = () => [
    { type: PageService$1 }
];
class DetailRouteConfig {
    constructor(pageService) {
        this.pageService = pageService;
    }
    resolve(route) {
        let tagId = route.params.tagId;
        if (tagId)
            this.pageService.getTagOneFromApi(tagId);
    }
}
DetailRouteConfig.decorators = [
    { type: Injectable }
];
DetailRouteConfig.ctorParameters = () => [
    { type: PageService$1 }
];
const routes$1 = [
    {
        path: '',
        component: LayoutComponent$1,
        children: [
            {
                path: '',
                component: MainComponent$1,
                resolve: { RouteConfig: RouteConfig$1 },
            },
            {
                path: ':tagId',
                component: TagDetailComponent,
                resolve: { DetailRouteConfig: DetailRouteConfig }
            }
        ],
    }
];
class TagManagementRoutingModule {
}
TagManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
                providers: [
                    RouteConfig$1,
                    DetailRouteConfig
                ]
            },] }
];

class TagManagementModule {
    static forChild() {
        return {
            ngModule: TagManagementModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(TagManagementModule.forChild());
    }
    static forEarly() {
        return new LazyModuleFactory(TagManagementModule.forChild());
    }
}
TagManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent$1, LayoutComponent$1, TagDetailComponent],
                imports: [
                    SharedModule,
                    NzTagModule,
                    TagManagementRoutingModule
                ],
                providers: [PageService$1]
            },] }
];

const ɵ0$2 = PostModule.forEarly, ɵ1 = TagManagementModule.forEarly;
const routes$2 = [
    { path: '', pathMatch: 'full', redirectTo: 'post' },
    {
        path: '',
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'post',
                loadChildren: ɵ0$2
            },
            {
                path: 'tag',
                loadChildren: ɵ1
            },
        ],
    }
];
class CmsAdminRoutingModule {
}
CmsAdminRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$2)],
                exports: [RouterModule],
            },] }
];

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
CmsAdminModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SharedModule,
                    CoreModule,
                    CmsAdminRoutingModule,
                ],
                exports: [
                    SharedModule,
                ],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { CmsAdminModule, FileService, GetFileByIdPipe, SharedModule, CmsAdminRoutingModule as ɵa, PostModule as ɵb, LayoutComponent as ɵc, MainComponent as ɵd, PageService as ɵe, PostStateService as ɵf, DetailComponent as ɵg, FileService as ɵh, ListComponent as ɵi, UploadFileComponent as ɵj, TagComponent as ɵk, ImagePickerComponent as ɵl, RouteConfig as ɵm, PostRoutingModule as ɵn, TagManagementModule as ɵo, MainComponent$1 as ɵp, PageService$1 as ɵq, LayoutComponent$1 as ɵr, TagDetailComponent as ɵs, RouteConfig$1 as ɵt, DetailRouteConfig as ɵu, TagManagementRoutingModule as ɵv };
//# sourceMappingURL=fs-tw-cms-admin.js.map
