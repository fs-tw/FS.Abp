import { Component, ViewChild } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { PageService } from '../../providers/page.service';
import { ImageFile, ImagePickerComponent } from '../image-picker/image-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../providers/page.service";
import * as i3 from "@abp/ng.theme.shared";
import * as i4 from "ng-zorro-antd/spin";
import * as i5 from "ng-zorro-antd/card";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "@delon/abc/se";
import * as i10 from "ng-zorro-antd/select";
import * as i11 from "ng-zorro-antd/radio";
import * as i12 from "ng-zorro-antd/date-picker";
import * as i13 from "ng-zorro-antd/input";
import * as i14 from "ng-zorro-antd/tabs";
import * as i15 from "../image-picker/image-picker.component";
import * as i16 from "../upload-file/upload-file.component";
import * as i17 from "ng-zorro-antd/button";
import * as i18 from "ng-zorro-antd/core/wave";
import * as i19 from "ng-zorro-antd/core/transition-patch";
import * as i20 from "ngx-quill";
import * as i21 from "ng-zorro-antd/icon";
import * as i22 from "ng-zorro-antd/grid";
const _c0 = ["DefaultImagePicker"];
function DetailComponent_form_2_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 32);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", item_r10.id)("nzLabel", item_r10.displayName);
} }
const _c1 = function () { return { standalone: true }; };
function DetailComponent_form_2_se_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "se", 33);
    i0.ɵɵelementStart(1, "quill-editor", 34);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_se_22_Template_quill_editor_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.data.content = $event; });
    i0.ɵɵelementStart(2, "div", 35);
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵelement(4, "button", 37);
    i0.ɵɵelement(5, "button", 38);
    i0.ɵɵelement(6, "button", 39);
    i0.ɵɵelement(7, "button", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 36);
    i0.ɵɵelement(9, "button", 41);
    i0.ɵɵelement(10, "button", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵelement(12, "button", 43);
    i0.ɵɵelement(13, "button", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 36);
    i0.ɵɵelement(15, "button", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r7.data.content)("ngModelOptions", i0.ɵɵpureFunction0(2, _c1));
} }
function DetailComponent_form_2_se_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "se", 46);
    i0.ɵɵelementStart(1, "input", 47);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_se_23_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.data.url = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r8.data.url);
} }
function DetailComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 4, 5);
    i0.ɵɵelementStart(2, "se", 6);
    i0.ɵɵelementStart(3, "nz-select", 7);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.data.blogId = $event; });
    i0.ɵɵtemplate(4, DetailComponent_form_2_nz_option_4_Template, 1, 2, "nz-option", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "se", 9);
    i0.ɵɵelementStart(6, "nz-radio-group", 10);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_radio_group_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.data.disable = $event; });
    i0.ɵɵelementStart(7, "label", 11);
    i0.ɵɵtext(8, "\u958B");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "label", 11);
    i0.ɵɵtext(10, "\u95DC");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "se", 12);
    i0.ɵɵelementStart(12, "nz-date-picker", 13);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_date_picker_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return (ctx_r18.dateRange[0] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nz-date-picker", 14);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_date_picker_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r19 = i0.ɵɵnextContext(); return (ctx_r19.dateRange[1] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "se", 15);
    i0.ɵɵelementStart(15, "input", 16);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.data.title = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "se", 17);
    i0.ɵɵelementStart(17, "input", 18);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.data.subtitle = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "se", 19);
    i0.ɵɵelementStart(19, "nz-select", 20);
    i0.ɵɵlistener("ngModelChange", function DetailComponent_form_2_Template_nz_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.data.displayMode = $event; });
    i0.ɵɵelement(20, "nz-option", 21);
    i0.ɵɵelement(21, "nz-option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, DetailComponent_form_2_se_22_Template, 16, 3, "se", 23);
    i0.ɵɵtemplate(23, DetailComponent_form_2_se_23_Template, 2, 1, "se", 24);
    i0.ɵɵelementStart(24, "se", 25);
    i0.ɵɵelementStart(25, "nz-tabset");
    i0.ɵɵelementStart(26, "nz-tab", 26);
    i0.ɵɵelementStart(27, "se");
    i0.ɵɵelement(28, "image-picker", 27, 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "nz-tab", 29);
    i0.ɵɵelementStart(31, "se");
    i0.ɵɵelement(32, "fs-upload-file", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "se");
    i0.ɵɵelementStart(34, "button", 31);
    i0.ɵɵlistener("click", function DetailComponent_form_2_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r16); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.save(); });
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(1);
    const ctx_r0 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(4);
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.data.blogId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.blogs);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.data.disable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzValue", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzValue", true);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzAllowClear", false)("ngModel", ctx_r0.dateRange[0]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzAllowClear", true)("ngModel", ctx_r0.dateRange[1]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.data.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.data.subtitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.data.displayMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzValue", 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzValue", 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.data.displayMode == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.data.displayMode == 1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("existFiles", ctx_r0.defaultImages)("uploadTextTemplate", _r1)("imageTemplate", _r3)("inLine", false);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("existFileUrls", ctx_r0.data.attachmentFileUrls);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", _r5.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", !ctx_r0.data.id ? "\u5EFA\u7ACB" : "\u66F4\u65B0", " ");
} }
function DetailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "div", 49);
    i0.ɵɵelement(2, "i", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 51);
    i0.ɵɵtext(4, " \u8ACB\u5C07\u6A94\u6848\u62D6\u79FB\u81F3\u6B64\uFF0C\u6216\u6309\u4E0B\u6B64\u5716\u793A\u4E0A\u50B3\u6A94\u6848 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DetailComponent_ng_template_5_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 61);
    i0.ɵɵlistener("click", function DetailComponent_ng_template_5_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r28); const item_r24 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.coverImage = item_r24.file.fileName; });
    i0.ɵɵtext(1, "\u8A2D\u70BA\u5C01\u9762\u5716");
    i0.ɵɵelementEnd();
} }
function DetailComponent_ng_template_5_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 62);
} }
function DetailComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵelementStart(1, "div", 53);
    i0.ɵɵtemplate(2, DetailComponent_ng_template_5_a_2_Template, 2, 0, "a", 54);
    i0.ɵɵtemplate(3, DetailComponent_ng_template_5_i_3_Template, 1, 0, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 56);
    i0.ɵɵlistener("click", function DetailComponent_ng_template_5_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r31); const item_r24 = ctx.$implicit; const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.defaultImagePicker.controllModal(true, item_r24.file); });
    i0.ɵɵelementStart(5, "div", 57);
    i0.ɵɵelement(6, "img", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 59);
    i0.ɵɵelementStart(8, "div", 57);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 53);
    i0.ɵɵelementStart(11, "div", 57);
    i0.ɵɵelementStart(12, "a", 60);
    i0.ɵɵlistener("click", function DetailComponent_ng_template_5_Template_a_click_12_listener() { i0.ɵɵrestoreView(_r31); const item_r24 = ctx.$implicit; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.deleteFile(item_r24.file.fileName); });
    i0.ɵɵtext(13, "\u522A\u9664");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.coverImage != item_r24.file.fileName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.coverImage == item_r24.file.fileName);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", item_r24.file.fileUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r24.file.fileName);
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
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.PageService), i0.ɵɵdirectiveInject(i3.ConfirmationService)); };
DetailComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DetailComponent, selectors: [["fs-detail"]], viewQuery: function DetailComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultImagePicker = _t.first);
    } }, decls: 7, vars: 2, consts: [["nzTip", "\u8F09\u5165\u4E2D...", 3, "nzSpinning"], ["nz-form", "", "se-container", "1", "labelWidth", "150", 4, "ngIf"], ["Upload", ""], ["Image", ""], ["nz-form", "", "se-container", "1", "labelWidth", "150"], ["f", "ngForm"], ["label", "\u516C\u544A\u985E\u578B"], ["name", "blogId", "required", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["label", "\u524D\u53F0\u986F\u793A", "required", ""], ["name", "disable", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], ["label", "\u767C\u4F48\u6642\u9593", "required", ""], ["nzShowTime", "", "name", "startDate", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["nzShowTime", "", "name", "endDate", 3, "nzAllowClear", "ngModel", "ngModelChange"], ["label", "\u6A19\u984C", "error", "\u5FC5\u586B", "required", ""], ["type", "text", "nz-input", "", "name", "title", "required", "", 3, "ngModel", "ngModelChange"], ["label", "\u526F\u6A19\u984C"], ["type", "text", "nz-input", "", "name", "Subtitle", 3, "ngModel", "ngModelChange"], ["label", "\u986F\u793A\u985E\u578B", "required", ""], ["name", "type", 3, "ngModel", "ngModelChange"], ["nzLabel", "\u5167\u6587", 3, "nzValue"], ["nzLabel", "\u9023\u7D50", 3, "nzValue"], ["label", "\u5167\u6587", 4, "ngIf"], ["label", "\u9023\u7D50", 4, "ngIf"], ["label", "\u4E0A\u50B3\u6A94\u6848", "optionalHelp", "\u5EFA\u8B70\u5716\u7247\u6BD4\u4F8B\uFF1A1080X608"], ["nzTitle", "\u5716\u7247"], ["borderWidth", "100%", "borderHeight", "132px", 3, "existFiles", "uploadTextTemplate", "imageTemplate", "inLine"], ["DefaultImagePicker", ""], ["nzTitle", "\u9644\u4EF6"], [3, "existFileUrls"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], [3, "nzValue", "nzLabel"], ["label", "\u5167\u6587"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-strike"], ["value", "ordered", 1, "ql-list"], ["value", "bullet", 1, "ql-list"], ["type", "button", "value", "1", 1, "ql-header"], ["type", "button", "value", "2", 1, "ql-header"], [1, "ql-image"], ["label", "\u9023\u7D50"], ["type", "text", "nz-input", "", "name", "url", 3, "ngModel", "ngModelChange"], [2, "text-align", "center"], [2, "color", "#26d7eb", "font-size", "48px"], ["nz-icon", "", "nzType", "inbox", 2, "display", "block"], [2, "font-size", "16px"], ["nz-row", "", 2, "border", "1px solid #ddd", "border-right", "0px", "margin-top", "5px"], ["nz-col", "", "nzSpan", "4", 1, "imgItemDiv"], ["class", "text-blue", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", "style", "font-size: 16px;", "class", "text-green", 4, "ngIf"], ["nz-col", "", "nzSpan", "8", 1, "imgItemDiv", 2, "cursor", "pointer", 3, "click"], [2, "width", "100%"], [2, "max-height", "40px", 3, "src"], ["nz-col", "", "nzSpan", "8", 1, "imgItemDiv"], [1, "text-red", 3, "click"], [1, "text-blue", 3, "click"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 1, "text-green", 2, "font-size", "16px"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-spin", 0);
        i0.ɵɵelementStart(1, "nz-card");
        i0.ɵɵtemplate(2, DetailComponent_form_2_Template, 36, 23, "form", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, DetailComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, DetailComponent_ng_template_5_Template, 14, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("nzSpinning", ctx.isLoading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.data);
    } }, directives: [i4.NzSpinComponent, i5.NzCardComponent, i6.NgIf, i7.ɵangular_packages_forms_forms_y, i7.NgControlStatusGroup, i7.NgForm, i8.NzFormDirective, i9.SEContainerComponent, i9.SEComponent, i10.NzSelectComponent, i7.RequiredValidator, i7.NgControlStatus, i7.NgModel, i6.NgForOf, i11.NzRadioGroupComponent, i11.NzRadioComponent, i12.NzDatePickerComponent, i13.NzInputDirective, i7.DefaultValueAccessor, i10.NzOptionComponent, i14.NzTabSetComponent, i14.NzTabComponent, i15.ImagePickerComponent, i16.UploadFileComponent, i17.NzButtonComponent, i18.NzWaveDirective, i19.ɵNzTransitionPatchDirective, i20.QuillEditorComponent, i21.NzIconDirective, i22.NzRowDirective, i22.NzColDirective], styles: [".unchecked[_ngcontent-%COMP%]{border:1px solid #e4e4e4}.unchecked[_ngcontent-%COMP%]:hover{background-color:#00c1de;color:#fff}.imgItemDiv[_ngcontent-%COMP%]{border-right:1px solid #ddd;padding:5px;height:50px;display:grid;place-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailComponent, [{
        type: Component,
        args: [{
                selector: 'fs-detail',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.less']
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.PageService }, { type: i3.ConfirmationService }]; }, { defaultImagePicker: [{
            type: ViewChild,
            args: ["DefaultImagePicker"]
        }] }); })();
//# sourceMappingURL=detail.component.js.map