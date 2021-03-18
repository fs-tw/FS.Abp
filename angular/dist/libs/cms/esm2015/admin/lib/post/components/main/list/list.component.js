import { Component, Injector, ViewChild } from '@angular/core';
import { FileService } from '../../../../shared';
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER, FormPropData, generateFormFromProps, } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '@fs-tw/cms/config';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';
import { Confirmation, ConfirmationService, ToasterService, } from '@abp/ng.theme.shared';
import { Router, ActivatedRoute } from '@angular/router';
const ɵ0 = "Cms::FS.Cms.Blogs" /* Blog */;
export class ListComponent {
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
                selector: 'fs-list',
                template: "<div>\r\n  <div class=\"mb-md\">   \r\n    <button nz-button [nzType]=\"'primary'\"  style=\"margin-right: 10px;\" (click)=\"add()\"><span>+ {{'AbpIdentityServer::Add'|abpLocalization}}</span></button>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"showDetail(null)\">\r\n      {{'AbpPermissionManagement::All'|abpLocalization}}\r\n    </button>\r\n  </div>\r\n\r\n  <nz-extensible-table [data]=\"datas\" [defaultSelectId]=\"defaultSelectId\" [recordsTotal]=\"count\" [list]=\"list\" [haveSelect]=\"true\"\r\n    (select)=\"showDetail($event)\">\r\n  </nz-extensible-table>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"blog\" (nzOnCancel)=\"handleCancel()\" [nzFooter]=\"footer\">\r\n  <form [formGroup]=\"form\" *ngIf=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <abp-extensible-form *ngIf=\"form\" [selectedRecord]=\"selected\"></abp-extensible-form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">\u5716\u793A(\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png)</label>\r\n      <image-picker #DefaultImagePicker [existFiles]=\"defaultImages\" [maxImageCount]=\"1\" imageWidth=\"40px\"\r\n        imageHeight=\"30px\" borderWidth=\"80px\" borderHeight=\"60px\"></image-picker>\r\n    </div>\r\n  </form>\r\n</nz-modal>\r\n\r\n<ng-template #footer>\r\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">\u53D6\u6D88</button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\">\u5132\u5B58</button>\r\n</ng-template>",
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
export { ɵ0 };
//# sourceMappingURL=list.component.js.map