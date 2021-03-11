import { ɵɵdefineInjectable, Injectable, Component, Injector, Input, ViewChild, NgModule, Pipe, ɵɵinject, EventEmitter, Output } from '@angular/core';
import { InternalStore, EnvironmentService, ConfigStateService, RestService, ListService, LazyModuleFactory, CoreModule, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
import { Fs, Volo } from '@fs-tw/cms/proxy';
import { ToasterService, Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { cloneDeep } from 'lodash';
import { ThemeAlainMsSharedModule } from '@fs-tw/theme-alain-ms/shared';
import { UiExtensionsModule } from '@fs-tw/theme-alain-ms/shared/extensions';
import { FormPropData, generateFormFromProps, EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '@fs-tw/cms/config';

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
PostStateService.ctorParameters = () => [];

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
PageService.decorators = [
    { type: Injectable }
];
PageService.ctorParameters = () => [
    { type: Injector }
];

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
MainComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-main',
                template: "<nz-row nzGutter=\"16\">\r\n  <nz-col nzSpan=\"8\">\r\n    <fs-list></fs-list>\r\n  </nz-col>\r\n  <nz-col nzSpan=\"16\">\r\n    <div>\r\n      <div class=\"mb-md\">\r\n        <h5>\u985E\u578B\uFF1A{{ blogName }}</h5>\r\n        <button nz-button nzType=\"primary\" (click)=\"gotoDetail()\" style=\"margin-right: 20px;\">\r\n          \u65B0\u589E\r\n        </button>\r\n        <nz-input-group nzSearch [nzAddOnAfter]=\"suffixIconButton\" style=\"width: 300px;\">\r\n          <input type=\"text\" [(ngModel)]=\"postParams.keyword\" nz-input placeholder=\"\u8F38\u5165\u540D\u7A31\" />\r\n        </nz-input-group>\r\n        <ng-template #suffixIconButton>\r\n          <button nz-button nzType=\"primary\" (click)=\"changePage(1)\" nzSearch>\r\n            <i nz-icon nzType=\"search\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n      <nz-table #listTable [nzData]=\"posts\" nzSize=\"small\" nzPageSize=\"10\" [nzTotal]=\"totalCount\"\r\n        [nzFrontPagination]=\"false\" [nzLoading]=\"loading\" (nzPageIndexChange)=\"changePage($event)\" nzBordered>\r\n        <thead>\r\n          <tr>\r\n            <th nzWidth=\"110px\"></th>\r\n            <th>\u555F\u7528</th>\r\n            <th>\u6A19\u984C</th>\r\n            <th>\u986F\u793A\u6A21\u5F0F</th>\r\n            <th>\u767C\u4F48\u65E5\u671F</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let item of listTable.data\">\r\n            <tr class=\"bg-white\">\r\n              <td nzShowExpand [(nzExpand)]=\"item.expand\" nzWidth=\"110px\">\r\n                <a nz-dropdown [nzDropdownMenu]=\"menu\">\r\n                  {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n                  <i nz-icon nzType=\"down\"></i>\r\n                </a>\r\n                <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n                  <ul nz-menu>\r\n                    <li nz-menu-item (click)=\"gotoDetail(item.id)\">\r\n                      <a>\u7DE8\u8F2F</a>\r\n                    </li>\r\n                    <li nz-menu-item (click)=\"deleteItem(item)\">\r\n                      <a class=\"text-red\">\u522A\u9664</a>\r\n                    </li>\r\n                  </ul>\r\n                </nz-dropdown-menu>\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.published\"><i nz-icon nzType=\"check\" nzTheme=\"outline\"></i></span>\r\n                <span *ngIf=\"!item.published\"><i nz-icon nzType=\"close\" nzTheme=\"outline\"></i></span>\r\n              </td>\r\n              <td>\r\n                {{ item.title }}\r\n              </td>\r\n              <td>\r\n                <span *ngIf=\"item.displayMode == 0\">\u5167\u5BB9</span>\r\n                <span *ngIf=\"item.displayMode == 1\">\u9023\u7D50</span>\r\n              </td>\r\n              <td>{{ item.published_At | date: 'yyyy-MM-dd HH:mm:ss' }}</td>\r\n            </tr>\r\n\r\n            <tr [nzExpand]=\"item.expand\">\r\n              <div>\r\n                <h3>\u526F\u6A19\u984C</h3>\r\n                <p>{{ item.subtitle || '-' }}</p>\r\n                <div *ngIf=\"item.displayMode == 0\">\r\n                  <h3>\u5167\u5BB9\uFF1A</h3>\r\n                  <quill-view [content]=\"item.content\"></quill-view>\r\n                </div>\r\n                <div *ngIf=\"item.displayMode == 1\">\r\n                  <h3>\u9023\u7D50</h3>\r\n                  <p>{{ item.url }}</p>\r\n                </div>\r\n              </div>\r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </nz-table>\r\n    </div>\r\n  </nz-col>\r\n</nz-row>",
                styles: ["nz-select{margin-right:8px;width:220px}.bg-white{background-color:#fff}"]
            },] }
];
MainComponent.ctorParameters = () => [
    { type: Router },
    { type: PageService },
    { type: PostStateService }
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
ImagePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'image-picker',
                template: "<ng-template #Upload>\r\n    <nz-upload\r\n        class=\"avatar-uploader\" style=\"display: grid;\"\r\n        [nzListType]=\"uploadTemplate ? 'text' : 'picture'\"\r\n        [nzBeforeUpload]=\"beforeUpload\" \r\n        [nzMultiple]=\"isMultiple\"\r\n        >\r\n\r\n        <div *ngTemplateOutlet=\"uploadTemplate || UploadImage\"></div>\r\n        <ng-template #UploadImage>\r\n            <div class=\"divBorder divGridCenter\" [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\">\r\n                <div *ngTemplateOutlet=\"uploadTextTemplate || UploadText\"></div>\r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template #UploadText>\r\n            <div style=\"font-size: 16px; text-align: center;\">\r\n                <div class=\"ant-upload-text\">Upload</div>\r\n            </div>\r\n        </ng-template>\r\n    </nz-upload>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n    <div class=\"divBorder imgGrid divGridCenter\" \r\n        [ngStyle]=\"{ 'width': borderWidth, 'height': borderHeight }\"\r\n        (click)=\"controllModal(true, item.file)\">\r\n\r\n        <div class=\"imgGridClose\">\r\n            <i (click)=\"deleteFile(item.file.fileName)\" nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\r\n        </div>\r\n\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-width: 100%;\" [ngStyle]=\"{ 'max-height': imageHeight }\" />\r\n    </div>\r\n</ng-template>\r\n\r\n<div [ngClass]=\"{ 'divGrid': inLine }\" [ngStyle]=\"{ 'grid-template-columns': inLine ? 'repeat(auto-fit, ' + borderWidth + ')' : 'unset' }\">\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u524D) -->\r\n    <ng-container *ngIf=\"canUpload && showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u50B3\u5165\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of existFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u7684\u5716\u7247 -->\r\n    <ng-container *ngFor=\"let item of showFiles; let i = index\">\r\n        <div *ngTemplateOutlet=\"imageTemplate || Image; context: {$implicit: { file: item, i: i }}\"></div>\r\n    </ng-container>\r\n\r\n    <!-- \u4E0A\u50B3\u6309\u9215(\u5F8C) -->\r\n    <ng-container *ngIf=\"canUpload && !showFrontButton\">\r\n        <div *ngTemplateOutlet=\"Upload\"></div>\r\n    </ng-container>\r\n    \r\n</div>\r\n\r\n<nz-modal [nzOkText]=\"null\" nzCancelText=\"\u95DC\u9589\" [nzWidth]=\"1000\"\r\n        [nzTitle]=\"'\u9810\u89BD\u5716'\" \r\n        [(nzVisible)]=\"viewImage.isVisabled\" \r\n        (nzOnCancel)=\"controllModal(false, viewImage.image)\">\r\n    <div class=\"divGridCenter\">\r\n        <img [src]=\"viewImage.image.fileUrl\" style=\"max-width: 100%; max-height: 500px;\" />\r\n    </div>\r\n</nz-modal>",
                styles: [".divBorder{display:block;border:1px dashed #d9d9d9;background:#fafafa}.divGridCenter{display:grid!important;place-items:center}.divGrid{display:grid;grid-gap:1rem}.imgGrid{border:1px solid #ddd;background-color:#f9f9f9;position:relative;cursor:pointer}.imgGridClose{top:-7px;position:absolute;text-align:right;font-size:18px;color:rgba(0,0,0,.55);width:100%}.imgGridClose i{padding:3px;border-radius:2px;opacity:.8;z-index:10;background-color:#ddd}::ng-deep .ant-upload.ant-upload-select-picture-card{margin:unset!important}::ng-deep .ant-upload.ant-upload-select-picture-card>.ant-upload{padding:unset!important}"]
            },] }
];
ImagePickerComponent.ctorParameters = () => [
    { type: ToasterService },
    { type: EnvironmentService },
    { type: ConfigStateService }
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
DetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-detail',
                template: "<nz-spin nzTip=\"\u8F09\u5165\u4E2D...\" [nzSpinning]=\"isLoading\">\r\n\r\n  <nz-card>\r\n\r\n    <form nz-form #f=\"ngForm\" se-container=\"1\" labelWidth=\"150\" *ngIf=\"data\">\r\n      <se label=\"\u516C\u544A\u985E\u578B\">\r\n        <nz-select [(ngModel)]=\"data.blogId\" name=\"blogId\" required>\r\n          <nz-option *ngFor=\"let item of blogs\" [nzValue]=\"item.id\" [nzLabel]=\"item.displayName\"></nz-option>\r\n        </nz-select>\r\n      </se>\r\n      <se label=\"\u524D\u53F0\u986F\u793A\" required>\r\n        <nz-radio-group [(ngModel)]=\"data.disable\" name=\"disable\">\r\n          <label nz-radio [nzValue]=\"false\">\u958B</label>\r\n          <label nz-radio [nzValue]=\"true\">\u95DC</label>\r\n        </nz-radio-group>\r\n      </se>\r\n      <se label=\"\u767C\u4F48\u6642\u9593\" required>\r\n        <!-- <nz-range-picker nzShowTime nzFormat=\"yyyy/MM/dd HH:mm:ss\" name=\"dateRange\" [(ngModel)]=\"dateRange\"\r\n          [nzAllowClear]=\"false\"></nz-range-picker> -->\r\n        <nz-date-picker nzShowTime name=\"startDate\" [nzAllowClear]=\"false\"\r\n          [(ngModel)]=\"dateRange[0]\"></nz-date-picker>\r\n\r\n        <nz-date-picker nzShowTime name=\"endDate\" [nzAllowClear]=\"true\"\r\n          [(ngModel)]=\"dateRange[1]\"></nz-date-picker>\r\n        <!-- <nz-date-picker nzShowTime name=\"published_At\" nzPlaceHolder=\"Select Time\" [nzAllowClear]=\"false\"\r\n          [(ngModel)]=\"data.published_At\"></nz-date-picker> -->\r\n      </se>\r\n      <se label=\"\u6A19\u984C\" error=\"\u5FC5\u586B\" required>\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.title\" name=\"title\" required>\r\n      </se>\r\n      <se label=\"\u526F\u6A19\u984C\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.subtitle\" name=\"Subtitle\">\r\n      </se>\r\n      <se label=\"\u986F\u793A\u985E\u578B\" required>\r\n        <nz-select [(ngModel)]=\"data.displayMode\" name=\"type\">\r\n          <nz-option [nzValue]=\"0\" nzLabel=\"\u5167\u6587\"></nz-option>\r\n          <nz-option [nzValue]=\"1\" nzLabel=\"\u9023\u7D50\"></nz-option>\r\n        </nz-select>\r\n      </se>\r\n\r\n      <se label=\"\u5167\u6587\" *ngIf=\"data.displayMode == 0\">\r\n\r\n        <quill-editor [(ngModel)]=\"data.content\" [ngModelOptions]=\"{standalone: true}\">\r\n          <div quill-editor-toolbar>\r\n            <span class=\"ql-formats\">\r\n              <button class=\"ql-bold\"></button>\r\n              <button class=\"ql-italic\"></button>\r\n              <button class=\"ql-underline\"></button>\r\n              <button class=\"ql-strike\"></button>\r\n            </span>\r\n\r\n            <span class=\"ql-formats\">\r\n              <button class=\"ql-list\" value=\"ordered\"></button>\r\n              <button class=\"ql-list\" value=\"bullet\"></button>\r\n            </span>\r\n\r\n            <span>\r\n              <button type=\"button\" class=\"ql-header\" value=\"1\"></button>\r\n              <button type=\"button\" class=\"ql-header\" value=\"2\"></button>\r\n            </span>\r\n\r\n            <span class=\"ql-formats\">\r\n              <button class=\"ql-image\"></button>\r\n            </span>\r\n\r\n          </div>\r\n        </quill-editor>\r\n      </se>\r\n\r\n\r\n      <se label=\"\u9023\u7D50\" *ngIf=\"data.displayMode == 1\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.url\" name=\"url\">\r\n      </se>\r\n\r\n      <se label=\"\u4E0A\u50B3\u6A94\u6848\" optionalHelp=\"\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B\uFF1A1080X608\">\r\n        <nz-tabset>\r\n          <nz-tab nzTitle=\"\u5716\u7247\">\r\n            <se>\r\n              <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [uploadTextTemplate]=\"Upload\"\r\n                [imageTemplate]=\"Image\" [inLine]=\"false\" borderWidth=\"100%\" borderHeight=\"132px\"></image-picker>\r\n            </se>\r\n          </nz-tab>\r\n          <nz-tab nzTitle=\"\u9644\u4EF6\">\r\n            <se>\r\n              <fs-upload-file [existFileUrls]=\"data.attachmentFileUrls\"></fs-upload-file>\r\n            </se>\r\n          </nz-tab>\r\n        </nz-tabset>\r\n      </se>\r\n\r\n      <!-- <se label=\"\u6A19\u7C64\">\r\n        <fs-tag [postId]=\"data.id\" [postTags]=\"data.postTags\"></fs-tag>\r\n      </se> -->\r\n\r\n      <se>\r\n        <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"f.invalid\">\r\n          {{ !data.id ? '\u5EFA\u7ACB' : '\u66F4\u65B0' }}\r\n        </button>\r\n      </se>\r\n    </form>\r\n  </nz-card>\r\n\r\n</nz-spin>\r\n\r\n\r\n<ng-template #Upload>\r\n  <div style=\"text-align: center;\">\r\n    <div style=\"color: #26d7eb; font-size: 48px;\">\r\n      <i nz-icon nzType=\"inbox\" style=\"display: block;\"></i>\r\n    </div>\r\n    <div style=\"font-size: 16px;\">\r\n      \u8ACB\u5C07\u6A94\u6848\u62D6\u79FB\u81F3\u6B64\uFF0C\u6216\u6309\u4E0B\u6B64\u5716\u793A\u4E0A\u50B3\u6A94\u6848\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #Image let-item>\r\n  <div nz-row style=\"border: 1px solid #ddd; border-right: 0px; margin-top: 5px;\">\r\n    <div nz-col nzSpan=\"4\" class=\"imgItemDiv\">\r\n      <a class=\"text-blue\" *ngIf=\"coverImage != item.file.fileName\" (click)=\"coverImage = item.file.fileName\">\u8A2D\u70BA\u5C01\u9762\u5716</a>\r\n      <i nz-icon nzType=\"check\" nzTheme=\"outline\" style=\"font-size: 16px;\" class=\"text-green\"\r\n        *ngIf=\"coverImage == item.file.fileName\"></i>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\" class=\"imgItemDiv\" style=\"cursor: pointer;\"\r\n      (click)=\"defaultImagePicker.controllModal(true, item.file)\">\r\n      <div style=\"width: 100%;\">\r\n        <img [src]=\"item.file.fileUrl\" style=\"max-height: 40px;\" />\r\n      </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\" class=\"imgItemDiv\">\r\n      <div style=\"width: 100%;\">{{ item.file.fileName }}</div>\r\n    </div>\r\n    <div nz-col nzSpan=\"4\" class=\"imgItemDiv\">\r\n      <div style=\"width: 100%;\">\r\n        <a class=\"text-red\" (click)=\"deleteFile(item.file.fileName)\">\u522A\u9664</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                styles: [".unchecked{border:1px solid #e4e4e4}.unchecked:hover{background-color:#00c1de;color:#fff}.imgItemDiv{border-right:1px solid #ddd;padding:5px;height:50px;display:grid;place-items:center}"]
            },] }
];
DetailComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: PageService },
    { type: ConfirmationService }
];
DetailComponent.propDecorators = {
    defaultImagePicker: [{ type: ViewChild, args: ["DefaultImagePicker",] }]
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

class GetFileByIdPipe {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    transform(value) {
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + value;
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
FileService.ɵprov = ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(ɵɵinject(RestService), ɵɵinject(EnvironmentService)); }, token: FileService, providedIn: "root" });
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FileService.ctorParameters = () => [
    { type: RestService },
    { type: EnvironmentService }
];

const ɵ0 = "Cms::FS.Cms.Blogs" /* Blog */;
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
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-list',
                template: "<div>\r\n  <div class=\"mb-md\">\r\n    <!-- <fs-create (onSave)=\"reload()\" style=\"margin-right: 10px;\"></fs-create> -->\r\n    <button nz-button [nzType]=\"'primary'\"  style=\"margin-right: 10px;\" (click)=\"add()\"><span>+\u5EFA\u7ACB</span></button>\r\n\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"showDetail(null)\">\r\n      \u5168\u90E8\r\n    </button>\r\n  </div>\r\n\r\n  <nz-extensible-table [data]=\"datas\" [recordsTotal]=\"count\" [list]=\"list\" [haveSelect]=\"true\"\r\n    (select)=\"showDetail($event)\">\r\n  </nz-extensible-table>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"blog\" (nzOnCancel)=\"handleCancel()\" [nzFooter]=\"footer\">\r\n  <form [formGroup]=\"form\" *ngIf=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <abp-extensible-form *ngIf=\"form\" [selectedRecord]=\"selected\"></abp-extensible-form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">\u5716\u793A(\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png)</label>\r\n      <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [maxImageCount]=\"1\" imageWidth=\"40px\"\r\n        imageHeight=\"30px\" borderWidth=\"80px\" borderHeight=\"60px\"></image-picker>\r\n    </div>\r\n  </form>\r\n</nz-modal>\r\n\r\n<ng-template #footer>\r\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">\u53D6\u6D88</button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\">\u5132\u5B58</button>\r\n</ng-template>",
                providers: [
                    ListService,
                    {
                        provide: EXTENSIONS_IDENTIFIER,
                        useValue: ɵ0,
                    },
                ],
                styles: [".listSelected{background-color:#e6f2ff!important}nz-list-item{font-size:15px}.bg-white{background-color:#fff}"]
            },] }
];
ListComponent.ctorParameters = () => [
    { type: ExtensionsService },
    { type: PageService },
    { type: Injector },
    { type: ListService },
    { type: FileService },
    { type: ToasterService },
    { type: PostStateService }
];
ListComponent.propDecorators = {
    defaultImagePicker: [{ type: ViewChild, args: ["DefaultImagePicker",] }]
};

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
CreateComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-create',
                template: "<button nz-button [nzType]=\"'primary'\" *ngIf=\"!blogId\" (click)=\"showModal()\"><span>+\u5EFA\u7ACB</span></button>\r\n<a (click)=\"showModal()\" *ngIf=\"blogId\">\u7DE8\u8F2F</a>\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"\u5EFA\u7ACB\u6D88\u606F\u7A2E\u985E\" (nzOnCancel)=\"handleCancel()\" [nzFooter]=\"footer\">\r\n  <form nz-form #f=\"ngForm\" se-container=\"1\" labelWidth=\"100\" *ngIf=\"data\">\r\n    <se label=\"\u662F\u5426\u555F\u7528\" required>\r\n      <nz-radio-group [(ngModel)]=\"data.disable\" name=\"disable\">\r\n        <label nz-radio [nzValue]=\"false\">\u662F</label>\r\n        <label nz-radio [nzValue]=\"true\">\u5426</label>\r\n      </nz-radio-group>\r\n    </se>\r\n\r\n    <!-- *ngIf=\"!isParent\" -->\r\n    <ng-container>\r\n      <se label=\"\u9806\u5E8F\" required> \r\n        <input type=\"number\" nz-input [(ngModel)]=\"data.sequence\" name=\"no\" required>\r\n      </se>\r\n      <se label=\"\u540D\u7A31\" required>\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.displayName\" name=\"displayName\" required>\r\n      </se>\r\n      <se label=\"\u8AAA\u660E\">\r\n        <textarea nz-input type=\"text\" nz-input [(ngModel)]=\"data.description\" name=\"description\"></textarea>\r\n      </se>\r\n  \r\n      <se label=\"\u7DB2\u5740\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.url\" name=\"url\">\r\n      </se>\r\n  \r\n      <se label=\"\u5217\u8868\u6A23\u5F0F\" optionalHelp=\"\u76EE\u524D\u53EF\u8A2D\u5B9A\u6709\u6548\u8A2D\u5B9A\u503C\u70BA 2\u30013\u30014 \u9810\u8A2D\u70BA 3\">\r\n        <input type=\"text\" nz-input [(ngModel)]=\"data.listStyle\" name=\"listStyle\">\r\n      </se>\r\n  \r\n      <se label=\"\u5716\u793A\" optionalHelp=\"\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png\">\r\n        <image-picker #DefaultImagePicker\r\n            [existFiles]=\"defaultImages\"\r\n            [maxImageCount]=\"1\"\r\n            imageWidth=\"40px\"\r\n            imageHeight=\"30px\"\r\n            borderWidth=\"80px\"\r\n            borderHeight=\"60px\"></image-picker>\r\n      </se>\r\n    </ng-container>\r\n    \r\n\r\n  </form>\r\n</nz-modal>\r\n\r\n\r\n<ng-template #footer>\r\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">\u53D6\u6D88</button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"data.sequence == null || !data.displayName\">\u5132\u5B58</button>\r\n</ng-template>",
                styles: [".uploadImgGrid{display:grid;place-items:center;border:1px dashed #ddd;padding:10px;justify-content:center;background-color:#fafafa}"]
            },] }
];
CreateComponent.ctorParameters = () => [
    { type: PageService }
];
CreateComponent.propDecorators = {
    defaultImagePicker: [{ type: ViewChild, args: ["DefaultImagePicker",] }],
    blogId: [{ type: Input }],
    onSave: [{ type: Output }]
};

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
            },] }
];

const ɵ0$1 = PostModule.forEarly;
const routes$1 = [
    { path: '', pathMatch: 'full', redirectTo: 'post' },
    {
        path: '',
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'post',
                loadChildren: ɵ0$1
            },
        ],
    }
];
class CmsAdminRoutingModule {
}
CmsAdminRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
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

export { CmsAdminModule, FileService, GetFileByIdPipe, SharedModule, CmsAdminRoutingModule as ɵa, PostModule as ɵb, LayoutComponent as ɵc, MainComponent as ɵd, PageService as ɵe, PostStateService as ɵf, DetailComponent as ɵg, ListComponent as ɵh, FileService as ɵi, CreateComponent as ɵj, UploadFileComponent as ɵk, TagComponent as ɵl, ImagePickerComponent as ɵm, RouteConfig as ɵn, PostRoutingModule as ɵo };
//# sourceMappingURL=fs-tw-cms-admin.js.map
