import { Component } from '@angular/core';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../providers/page.service";
import * as i2 from "../../providers/post-state.service";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "./list/list.component";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/core/wave";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/input";
import * as i9 from "@angular/forms";
import * as i10 from "ng-zorro-antd/table";
import * as i11 from "@angular/common";
import * as i12 from "ng-zorro-antd/icon";
import * as i13 from "ng-zorro-antd/dropdown";
import * as i14 from "ng-zorro-antd/menu";
import * as i15 from "ngx-quill";
import * as i16 from "@abp/ng.core";
function MainComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function MainComponent_ng_template_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.changePage(1); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 24);
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u5167\u5BB9");
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_container_28_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u9023\u7D50");
    i0.ɵɵelementEnd();
} }
function MainComponent_ng_container_28_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "\u5167\u5BB9\uFF1A");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "quill-view", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("content", item_r6.content);
} }
function MainComponent_ng_container_28_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "\u9023\u7D50");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r6.url);
} }
function MainComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 14);
    i0.ɵɵelementStart(2, "td", 15);
    i0.ɵɵlistener("nzExpandChange", function MainComponent_ng_container_28_Template_td_nzExpandChange_2_listener($event) { const item_r6 = ctx.$implicit; return item_r6.expand = $event; });
    i0.ɵɵelementStart(3, "a", 16);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelement(6, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "nz-dropdown-menu", null, 18);
    i0.ɵɵelementStart(9, "ul", 19);
    i0.ɵɵelementStart(10, "li", 20);
    i0.ɵɵlistener("click", function MainComponent_ng_container_28_Template_li_click_10_listener() { i0.ɵɵrestoreView(_r18); const item_r6 = ctx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.gotoDetail(item_r6.id); });
    i0.ɵɵelementStart(11, "a");
    i0.ɵɵtext(12, "\u7DE8\u8F2F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "li", 20);
    i0.ɵɵlistener("click", function MainComponent_ng_container_28_Template_li_click_13_listener() { i0.ɵɵrestoreView(_r18); const item_r6 = ctx.$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.deleteItem(item_r6); });
    i0.ɵɵelementStart(14, "a", 21);
    i0.ɵɵtext(15, "\u522A\u9664");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtemplate(17, MainComponent_ng_container_28_span_17_Template, 2, 0, "span", 22);
    i0.ɵɵtemplate(18, MainComponent_ng_container_28_span_18_Template, 2, 0, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtemplate(22, MainComponent_ng_container_28_span_22_Template, 2, 0, "span", 22);
    i0.ɵɵtemplate(23, MainComponent_ng_container_28_span_23_Template, 2, 0, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td");
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "tr", 23);
    i0.ɵɵelementStart(28, "div");
    i0.ɵɵelementStart(29, "h3");
    i0.ɵɵtext(30, "\u526F\u6A19\u984C");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(33, MainComponent_ng_container_28_div_33_Template, 4, 1, "div", 22);
    i0.ɵɵtemplate(34, MainComponent_ng_container_28_div_34_Template, 5, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r7 = i0.ɵɵreference(8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzExpand", item_r6.expand);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzDropdownMenu", _r7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 13, "AbpIdentity::Actions"), " ");
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", item_r6.published);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.published);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.title, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r6.displayMode == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.displayMode == 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(26, 15, item_r6.published_At, "yyyy-MM-dd HH:mm:ss"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzExpand", item_r6.expand);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r6.subtitle || "-");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.displayMode == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.displayMode == 1);
} }
// import { ActivatedRoute, Router } from '@angular/router';
// import { PostWithDetailsDto } from '@fs-tw/cms/proxy';
// import { CodesDto } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select, Store } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { Deletepost, GetPosts } from '../../providers/post/post.actions';
// import { PostState } from '../../providers/post/post.state';
// import { PostsStateService } from '../../providers/post/poststate.service';
// import { PageService } from '../../providers/page.service';
export class MainComponent {
    constructor(pageService, postStateService) {
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
    gotoDetail() {
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(i0.ɵɵdirectiveInject(i1.PageService), i0.ɵɵdirectiveInject(i2.PostStateService)); };
MainComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MainComponent, selectors: [["fs-main"]], decls: 29, vars: 8, consts: [["nzGutter", "16"], ["nzSpan", "8"], ["nzSpan", "16"], [1, "mb-md"], ["nz-button", "", "nzType", "primary", 2, "margin-right", "20px", 3, "click"], ["nzSearch", "", 2, "width", "300px", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "\u8F38\u5165\u540D\u7A31", 3, "ngModel", "ngModelChange"], ["suffixIconButton", ""], ["nzSize", "small", "nzPageSize", "10", "nzBordered", "", 3, "nzData", "nzTotal", "nzFrontPagination", "nzLoading", "nzPageIndexChange"], ["listTable", ""], ["nzWidth", "110px"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [1, "bg-white"], ["nzShowExpand", "", "nzWidth", "110px", 3, "nzExpand", "nzExpandChange"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [1, "text-red"], [4, "ngIf"], [3, "nzExpand"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], [3, "content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-row", 0);
        i0.ɵɵelementStart(1, "nz-col", 1);
        i0.ɵɵelement(2, "fs-list");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nz-col", 2);
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "h5");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵlistener("click", function MainComponent_Template_button_click_8_listener() { return ctx.gotoDetail(); });
        i0.ɵɵtext(9, " \u65B0\u589E ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "nz-input-group", 5);
        i0.ɵɵelementStart(11, "input", 6);
        i0.ɵɵlistener("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) { return ctx.postParams.keyword = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, MainComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "nz-table", 8, 9);
        i0.ɵɵlistener("nzPageIndexChange", function MainComponent_Template_nz_table_nzPageIndexChange_14_listener($event) { return ctx.changePage($event); });
        i0.ɵɵelementStart(16, "thead");
        i0.ɵɵelementStart(17, "tr");
        i0.ɵɵelement(18, "th", 10);
        i0.ɵɵelementStart(19, "th");
        i0.ɵɵtext(20, "\u555F\u7528");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "th");
        i0.ɵɵtext(22, "\u6A19\u984C");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "th");
        i0.ɵɵtext(24, "\u986F\u793A\u6A21\u5F0F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "th");
        i0.ɵɵtext(26, "\u767C\u4F48\u65E5\u671F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "tbody");
        i0.ɵɵtemplate(28, MainComponent_ng_container_28_Template, 35, 18, "ng-container", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(13);
        const _r2 = i0.ɵɵreference(15);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("\u985E\u578B\uFF1A", ctx.blogName, "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzAddOnAfter", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.postParams.keyword);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzData", ctx.posts)("nzTotal", ctx.totalCount)("nzFrontPagination", false)("nzLoading", ctx.loading);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngForOf", _r2.data);
    } }, directives: [i3.NzRowDirective, i3.NzColDirective, i4.ListComponent, i5.NzButtonComponent, i6.NzWaveDirective, i7.ɵNzTransitionPatchDirective, i8.NzInputGroupComponent, i8.NzInputDirective, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.NzTableComponent, i10.NzTheadComponent, i10.NzTrDirective, i10.NzTableCellDirective, i10.NzThMeasureDirective, i10.NzTbodyComponent, i11.NgForOf, i12.NzIconDirective, i10.NzTdAddOnComponent, i13.NzDropDownADirective, i13.NzDropDownDirective, i13.NzDropdownMenuComponent, i14.NzMenuDirective, i14.NzMenuItemDirective, i11.NgIf, i10.NzTrExpandDirective, i10.NzTableFixedRowComponent, i15.QuillViewComponent], pipes: [i16.LocalizationPipe, i11.DatePipe], styles: ["nz-select[_ngcontent-%COMP%]{margin-right:8px;width:220px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MainComponent, [{
        type: Component,
        args: [{
                selector: 'fs-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.less']
            }]
    }], function () { return [{ type: i1.PageService }, { type: i2.PostStateService }]; }, null); })();
//# sourceMappingURL=main.component.js.map