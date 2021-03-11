import { Component } from '@angular/core';
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../providers/page.service";
import * as i2 from "../../../providers/post-state.service";
import * as i3 from "../../modal/create/create.component";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/table";
import * as i8 from "@angular/common";
import * as i9 from "ng-zorro-antd/dropdown";
import * as i10 from "ng-zorro-antd/icon";
import * as i11 from "ng-zorro-antd/menu";
import * as i12 from "@abp/ng.core";
function ListComponent_tr_15_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵelementStart(1, "a", 17);
    i0.ɵɵlistener("click", function ListComponent_tr_15_li_11_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7); const data_r2 = i0.ɵɵnextContext().$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.deleteBlog(data_r2); });
    i0.ɵɵtext(2, "\u522A\u9664");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { listSelected: a0 }; };
function ListComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 7);
    i0.ɵɵelementStart(1, "td", 8);
    i0.ɵɵelementStart(2, "a", 9);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelement(5, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nz-dropdown-menu", null, 11);
    i0.ɵɵelementStart(8, "ul", 12);
    i0.ɵɵelementStart(9, "li", 13);
    i0.ɵɵelementStart(10, "fs-create", 14);
    i0.ɵɵlistener("onSave", function ListComponent_tr_15_Template_fs_create_onSave_10_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.reload(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, ListComponent_tr_15_li_11_Template, 3, 0, "li", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 16);
    i0.ɵɵlistener("click", function ListComponent_tr_15_Template_td_click_12_listener() { i0.ɵɵrestoreView(_r9); const data_r2 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.showDetail(data_r2); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 16);
    i0.ɵɵlistener("click", function ListComponent_tr_15_Template_td_click_14_listener() { i0.ɵɵrestoreView(_r9); const data_r2 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.showDetail(data_r2); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r3 = i0.ɵɵreference(7);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0, data_r2.id == ctx_r1.selectBlogCodeId));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzDropdownMenu", _r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 7, "AbpIdentity::Actions"), " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("blogId", data_r2.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r2.no != "CmsBlogNotClassified");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r2.displayName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r2.disable ? "\u95DC\u9589" : "\u555F\u7528", " ");
} }
// import { BlogDto } from '@fs-tw/cms/proxy';
// import { CodesDto, CodingWithSettingTreeModel } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { PageService } from '../../../providers/page.service';
// import { PostState } from '../../../providers/post/post.state';
// import { PostsStateService } from '../../../providers/post/poststate.service';
export class ListComponent {
    constructor(pageService, postStateService) {
        this.pageService = pageService;
        this.postStateService = postStateService;
        // @Select(PostState.getPostsTotalCount)
        // totalCount$: Observable<number>;
        // blogDatas: BlogDto[] = [];
        // news: CodingWithSettingTreeModel;
        // subscription: Subscription;
        // parentCode: CodesDto;
        this.blogDatas = [];
        this.selectBlogCodeId = "";
        this.loading = false;
    }
    ngOnInit() {
        this.reload();
    }
    reload() {
        let input = {
            skipCount: 0,
            maxResultCount: 999,
            sorting: 'sequence'
        };
        this.loading = true;
        this.pageService.getBlogs(input).subscribe((x) => {
            this.blogDatas = x.items;
            this.loading = false;
        }, (error) => {
            this.loading = false;
        });
    }
    showDetail(blog) {
        if (blog == null) {
            this.selectBlogCodeId = null;
            return;
        }
        this.selectBlogCodeId = blog.id;
        this.postStateService.setBlog(blog);
    }
    deleteBlog(blog) {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1.PageService), i0.ɵɵdirectiveInject(i2.PostStateService)); };
ListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["fs-list"]], decls: 16, vars: 4, consts: [[1, "mb-md"], [2, "margin-right", "10px", 3, "onSave"], ["nz-button", "", 3, "nzType", "click"], ["nzSize", "small", "nzBordered", "", 3, "nzData", "nzLoading"], ["basicTable", ""], ["nzWidth", "75px"], ["style", "cursor: pointer;", "class", "bg-white listColor", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "bg-white", "listColor", 2, "cursor", "pointer", 3, "ngClass"], ["nzWidth", "75px", "nzAlign", "center"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], [3, "blogId", "onSave"], ["nz-menu-item", "", 4, "ngIf"], [3, "click"], [1, "text-red", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "fs-create", 1);
        i0.ɵɵlistener("onSave", function ListComponent_Template_fs_create_onSave_2_listener() { return ctx.reload(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function ListComponent_Template_button_click_3_listener() { return ctx.showDetail(null); });
        i0.ɵɵtext(4, " \u5168\u90E8 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nz-table", 3, 4);
        i0.ɵɵelementStart(7, "thead");
        i0.ɵɵelementStart(8, "tr");
        i0.ɵɵelement(9, "th", 5);
        i0.ɵɵelementStart(10, "th");
        i0.ɵɵtext(11, "\u540D\u7A31");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "th");
        i0.ɵɵtext(13, "\u72C0\u614B");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "tbody");
        i0.ɵɵtemplate(15, ListComponent_tr_15_Template, 16, 11, "tr", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzType", "primary");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzData", ctx.blogDatas)("nzLoading", ctx.loading);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngForOf", _r0.data);
    } }, directives: [i3.CreateComponent, i4.NzButtonComponent, i5.NzWaveDirective, i6.ɵNzTransitionPatchDirective, i7.NzTableComponent, i7.NzTheadComponent, i7.NzTrDirective, i7.NzTableCellDirective, i7.NzThMeasureDirective, i7.NzTbodyComponent, i8.NgForOf, i8.NgClass, i7.NzCellAlignDirective, i9.NzDropDownADirective, i9.NzDropDownDirective, i10.NzIconDirective, i9.NzDropdownMenuComponent, i11.NzMenuDirective, i11.NzMenuItemDirective, i8.NgIf], pipes: [i12.LocalizationPipe], styles: [".listSelected[_ngcontent-%COMP%]{background-color:#e6f2ff!important}nz-list-item[_ngcontent-%COMP%]{font-size:15px}.bg-white[_ngcontent-%COMP%]{background-color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{
                selector: 'fs-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: i1.PageService }, { type: i2.PostStateService }]; }, null); })();
//# sourceMappingURL=list.component.js.map