import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { PageService } from '../../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../../image-picker/image-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../providers/page.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/modal";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "@angular/forms";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "@delon/abc/se";
import * as i10 from "ng-zorro-antd/radio";
import * as i11 from "ng-zorro-antd/input";
import * as i12 from "../../image-picker/image-picker.component";
const _c0 = ["DefaultImagePicker"];
function CreateComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function CreateComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.showModal(); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "+\u5EFA\u7ACB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("nzType", "primary");
} }
function CreateComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function CreateComponent_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.showModal(); });
    i0.ɵɵtext(1, "\u7DE8\u8F2F");
    i0.ɵɵelementEnd();
} }
function CreateComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 7, 8);
    i0.ɵɵelementStart(2, "se", 9);
    i0.ɵɵelementStart(3, "nz-radio-group", 10);
    i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_nz_radio_group_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.data.disable = $event; });
    i0.ɵɵelementStart(4, "label", 11);
    i0.ɵɵtext(5, "\u662F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label", 11);
    i0.ɵɵtext(7, "\u5426");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerStart(8);
    i0.ɵɵelementStart(9, "se", 12);
    i0.ɵɵelementStart(10, "input", 13);
    i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.data.sequence = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "se", 14);
    i0.ɵɵelementStart(12, "input", 15);
    i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.data.displayName = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "se", 16);
    i0.ɵɵelementStart(14, "textarea", 17);
    i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_textarea_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.data.description = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "se", 18);
    i0.ɵɵelementStart(16, "input", 19);
    i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.data.url = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "se", 20);
    i0.ɵɵelementStart(18, "input", 21);
    i0.ɵɵlistener("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.data.listStyle = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "se", 22);
    i0.ɵɵelement(20, "image-picker", 23, 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r2.data.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzValue", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzValue", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.data.sequence);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.data.displayName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.data.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.data.url);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r2.data.listStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("existFiles", ctx_r2.defaultImages)("maxImageCount", 1);
} }
function CreateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function CreateComponent_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.handleCancel(); });
    i0.ɵɵtext(1, "\u53D6\u6D88");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 26);
    i0.ɵɵlistener("click", function CreateComponent_ng_template_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.save(); });
    i0.ɵɵtext(3, "\u5132\u5B58");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r4.data.sequence == null || !ctx_r4.data.displayName);
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
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(i0.ɵɵdirectiveInject(i1.PageService)); };
CreateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CreateComponent, selectors: [["fs-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
    } }, inputs: { blogId: "blogId" }, outputs: { onSave: "onSave" }, decls: 6, vars: 5, consts: [["nz-button", "", 3, "nzType", "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["nzTitle", "\u5EFA\u7ACB\u6D88\u606F\u7A2E\u985E", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["nz-form", "", "se-container", "1", "labelWidth", "100", 4, "ngIf"], ["footer", ""], ["nz-button", "", 3, "nzType", "click"], [3, "click"], ["nz-form", "", "se-container", "1", "labelWidth", "100"], ["f", "ngForm"], ["label", "\u662F\u5426\u555F\u7528", "required", ""], ["name", "disable", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["label", "\u9806\u5E8F", "required", ""], ["type", "number", "nz-input", "", "name", "no", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u540D\u7A31", "required", ""], ["type", "text", "nz-input", "", "name", "displayName", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u8AAA\u660E"], ["nz-input", "", "type", "text", "nz-input", "", "name", "description", 3, "ngModel", "ngModelChange"], ["label", "\u7DB2\u5740"], ["type", "text", "nz-input", "", "name", "url", 3, "ngModel", "ngModelChange"], ["label", "\u5217\u8868\u6A23\u5F0F", "optionalHelp", "\u76EE\u524D\u53EF\u8A2D\u5B9A\u6709\u6548\u8A2D\u5B9A\u503C\u70BA 2\u30013\u30014 \u9810\u8A2D\u70BA 3"], ["type", "text", "nz-input", "", "name", "listStyle", 3, "ngModel", "ngModelChange"], ["label", "\u5716\u793A", "optionalHelp", "\u5EFA\u8B70\u5716\u7247\u5927\u5C0F\u70BA 40*30\uFF0C\u50C5\u80FD\u4E0A\u50B3 jpg, png"], ["imageWidth", "40px", "imageHeight", "30px", "borderWidth", "80px", "borderHeight", "60px", 3, "existFiles", "maxImageCount"], ["DefaultImagePicker", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CreateComponent_button_0_Template, 3, 1, "button", 0);
        i0.ɵɵtemplate(1, CreateComponent_a_1_Template, 2, 0, "a", 1);
        i0.ɵɵelementStart(2, "nz-modal", 2);
        i0.ɵɵlistener("nzVisibleChange", function CreateComponent_Template_nz_modal_nzVisibleChange_2_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function CreateComponent_Template_nz_modal_nzOnCancel_2_listener() { return ctx.handleCancel(); });
        i0.ɵɵtemplate(3, CreateComponent_form_3_Template, 22, 10, "form", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, CreateComponent_ng_template_4_Template, 4, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("ngIf", !ctx.blogId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.blogId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzVisible", ctx.isVisible)("nzFooter", _r3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data);
    } }, directives: [i2.NgIf, i3.NzModalComponent, i4.NzButtonComponent, i5.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i7.ɵangular_packages_forms_forms_y, i7.NgControlStatusGroup, i7.NgForm, i8.NzFormDirective, i9.SEContainerComponent, i9.SEComponent, i10.NzRadioGroupComponent, i7.NgControlStatus, i7.NgModel, i10.NzRadioComponent, i7.NumberValueAccessor, i11.NzInputDirective, i7.DefaultValueAccessor, i7.RequiredValidator, i12.ImagePickerComponent], styles: [".uploadImgGrid[_ngcontent-%COMP%]{display:grid;place-items:center;border:1px dashed #ddd;padding:10px;justify-content:center;background-color:#fafafa}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateComponent, [{
        type: Component,
        args: [{
                selector: 'fs-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.less']
            }]
    }], function () { return [{ type: i1.PageService }]; }, { defaultImagePicker: [{
            type: ViewChild,
            args: ["DefaultImagePicker"]
        }], blogId: [{
            type: Input
        }], onSave: [{
            type: Output
        }] }); })();
//# sourceMappingURL=create.component.js.map