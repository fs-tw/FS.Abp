import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { PageService } from '../../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';
// import { ConfigStateService } from '@abp/ng.core';
// import { NzUploadFile } from 'ng-zorro-antd/upload';
// import { Observable } from 'rxjs';
// import * as _ from 'lodash';
// import { ConfirmationService,ToasterService } from '@abp/ng.theme.shared';
// import { BlogDto } from '@fs-tw/cms/proxy';
// import { FileService } from '@fs-tw/theme-core';
// import { PageService } from '../../../providers/page.service';
// import { Store } from '@ngxs/store';
export class CreateComponent {
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
        let input = _.cloneDeep(this.data);
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
//# sourceMappingURL=create.component.js.map