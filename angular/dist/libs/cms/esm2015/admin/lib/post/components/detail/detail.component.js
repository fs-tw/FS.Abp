import { Component, ViewChild } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import * as _ from 'lodash';
import * as dns from 'date-fns';
import { Fs } from '@fs-tw/cms/proxy';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '@fs-tw/cms/admin/shared';
import { FileService } from '@fs-tw/cms/admin/shared';
import { map } from 'rxjs/operators';
import { FileInfo } from '../upload-file/upload-file.component';
export class DetailComponent {
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
        let item = _.cloneDeep(this.data);
        item.startTime = this.dateRange[0].toLocalISOString();
        item.endTime = (_a = this.dateRange[1]) === null || _a === void 0 ? void 0 : _a.toLocalISOString();
        let contentAction$ = of("");
        if (item.displayMode == Fs.Cms.Posts.DisplayMode.內文) {
            // let now = new Date();
            const blob = new Blob([item.content], { type: "text/plain;charset=utf-8" });
            let useContentFileName = dns.format(new Date(), 'yyyyMMddHHmmss') + '-' + this.getRand() + ".txt"; //now.toLocaleDateString() + "_" + now.toLocaleTimeString() + "_" + (Math.floor(Math.random() * 100) + 1) + ".txt";
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
        let domainItem = _.cloneDeep(item);
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
        let domainItem = _.cloneDeep(item);
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
//# sourceMappingURL=detail.component.js.map