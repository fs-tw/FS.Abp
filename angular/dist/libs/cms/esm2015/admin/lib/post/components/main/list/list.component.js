import { Component, Injector, ViewChild } from '@angular/core';
import { FileService } from '../../../../shared';
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER, FormPropData, generateFormFromProps, } from '@abp/ng.theme.shared/extensions';
import { ExtensionsService } from '@fs-tw/cms/config';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';
import { ToasterService, } from '@abp/ng.theme.shared';
import * as i0 from "@angular/core";
import * as i1 from "@fs-tw/cms/config";
import * as i2 from "../../../providers/page.service";
import * as i3 from "@abp/ng.core";
import * as i4 from "../../../../shared";
import * as i5 from "@abp/ng.theme.shared";
import * as i6 from "../../../providers/post-state.service";
import * as i7 from "ng-zorro-antd/button";
import * as i8 from "ng-zorro-antd/core/wave";
import * as i9 from "ng-zorro-antd/core/transition-patch";
import * as i10 from "@fs-tw/theme-alain-ms/shared/extensions";
import * as i11 from "ng-zorro-antd/modal";
import * as i12 from "@angular/common";
import * as i13 from "@angular/forms";
import * as i14 from "@ngx-validate/core";
import * as i15 from "../../image-picker/image-picker.component";
import * as i16 from "@abp/ng.theme.shared/extensions";
const _c0 = ["DefaultImagePicker"];
function ListComponent_form_9_abp_extensible_form_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "abp-extensible-form", 13);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("selectedRecord", ctx_r3.selected);
} }
function ListComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 7);
    i0.ɵɵlistener("ngSubmit", function ListComponent_form_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.save(); });
    i0.ɵɵtemplate(1, ListComponent_form_9_abp_extensible_form_1_Template, 1, 1, "abp-extensible-form", 8);
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵelementStart(3, "label", 10);
    i0.ɵɵtext(4, "\u5716\u793A(\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "image-picker", 11, 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.form);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("existFiles", ctx_r0.defaultImages)("maxImageCount", 1);
} }
function ListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ListComponent_ng_template_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.handleCancel(); });
    i0.ɵɵtext(1, "\u53D6\u6D88");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 15);
    i0.ɵɵlistener("click", function ListComponent_ng_template_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.save(); });
    i0.ɵɵtext(3, "\u5132\u5B58");
    i0.ɵɵelementEnd();
} }
export class ListComponent {
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
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1.ExtensionsService), i0.ɵɵdirectiveInject(i2.PageService), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i3.ListService), i0.ɵɵdirectiveInject(i4.FileService), i0.ɵɵdirectiveInject(i5.ToasterService), i0.ɵɵdirectiveInject(i6.PostStateService)); };
ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["fs-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            ListService,
            {
                provide: EXTENSIONS_IDENTIFIER,
                useValue: "Cms::FS.Cms.Blogs" /* Blog */,
            },
        ])], decls: 12, vars: 9, consts: [[1, "mb-md"], ["nz-button", "", 2, "margin-right", "10px", 3, "nzType", "click"], ["nz-button", "", 3, "nzType", "click"], [3, "data", "recordsTotal", "list", "haveSelect", "select"], ["nzTitle", "blog", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["footer", ""], ["validateOnSubmit", "", 3, "formGroup", "ngSubmit"], [3, "selectedRecord", 4, "ngIf"], [1, "form-group"], ["for", "exampleInputEmail1"], ["imageWidth", "40px", "imageHeight", "30px", "borderWidth", "80px", "borderHeight", "60px", 3, "existFiles", "maxImageCount"], ["DefaultImagePicker", ""], [3, "selectedRecord"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function ListComponent_Template_button_click_2_listener() { return ctx.add(); });
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4, "+\u5EFA\u7ACB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function ListComponent_Template_button_click_5_listener() { return ctx.showDetail(null); });
        i0.ɵɵtext(6, " \u5168\u90E8 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nz-extensible-table", 3);
        i0.ɵɵlistener("select", function ListComponent_Template_nz_extensible_table_select_7_listener($event) { return ctx.showDetail($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "nz-modal", 4);
        i0.ɵɵlistener("nzVisibleChange", function ListComponent_Template_nz_modal_nzVisibleChange_8_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ListComponent_Template_nz_modal_nzOnCancel_8_listener() { return ctx.handleCancel(); });
        i0.ɵɵtemplate(9, ListComponent_form_9_Template, 7, 4, "form", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ListComponent_ng_template_10_Template, 4, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(11);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzType", "primary");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzType", "primary");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("data", ctx.datas)("recordsTotal", ctx.count)("list", ctx.list)("haveSelect", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzVisible", ctx.isVisible)("nzFooter", _r1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.form);
    } }, directives: [i7.NzButtonComponent, i8.NzWaveDirective, i9.ɵNzTransitionPatchDirective, i10.ExtensibleTableComponent, i11.NzModalComponent, i12.NgIf, i13.ɵangular_packages_forms_forms_y, i13.NgControlStatusGroup, i3.FormSubmitDirective, i13.FormGroupDirective, i14.ValidationGroupDirective, i15.ImagePickerComponent, i16.ExtensibleFormComponent], styles: [".listSelected[_ngcontent-%COMP%]{background-color:#e6f2ff!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
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
    }], function () { return [{ type: i1.ExtensionsService }, { type: i2.PageService }, { type: i0.Injector }, { type: i3.ListService }, { type: i4.FileService }, { type: i5.ToasterService }, { type: i6.PostStateService }]; }, { defaultImagePicker: [{
            type: ViewChild,
            args: ["DefaultImagePicker"]
        }] }); })();
//# sourceMappingURL=list.component.js.map