import { Component, ViewChild } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../image-picker/image-picker.component';
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
export class DetailComponent {
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
        let item = _.cloneDeep(this.data);
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
//# sourceMappingURL=detail.component.js.map