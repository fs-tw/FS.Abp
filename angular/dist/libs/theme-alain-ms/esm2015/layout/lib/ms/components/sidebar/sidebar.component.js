import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, } from '@angular/core';
import { LayoutStateService } from '../../../services/layout-state.service';
import { BrandService } from '../../ms.service';
import { MSProductService } from '../../services/product.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/layout-state.service";
import * as i2 from "../../ms.service";
import * as i3 from "../../services/product.service";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/anchor";
import * as i7 from "../../shared/link-to/link-to.directive";
const _c0 = ["categoryEl"];
function MSSidebarComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("click", function MSSidebarComponent_ng_container_0_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.showProduct = !ctx_r7.showProduct; });
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelement(2, "i", 19);
    i0.ɵɵelementStart(3, "span", 20);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 21);
    i0.ɵɵelement(6, "i", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.l.text);
} }
function MSSidebarComponent_ng_container_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵelementStart(1, "i", 24);
    i0.ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_li_4_Template_i_linkToChanged_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.showProduct = false; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "a", 25);
    i0.ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_li_4_Template_a_linkToChanged_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.showProduct = false; });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("alain-ms__sidebar-product-icon ", i_r9.icon, " ");
    i0.ɵɵproperty("link-to", i_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("link-to", i_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r9.name, " ");
} }
const _c1 = function (a0) { return { "alain-ms__products-category-item-active": a0 }; };
function MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 32);
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("linkToChanged", function MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template_a_linkToChanged_1_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(4); return ctx_r19.showProduct = false; });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, i_r18.shortcut));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("link-to", i_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r18.name);
} }
function MSSidebarComponent_ng_container_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "h3", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 30);
    i0.ɵɵtemplate(4, MSSidebarComponent_ng_container_0_div_14_div_1_li_4_Template, 3, 5, "li", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("id", "product-cat-", p_r16._id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", p_r16.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", p_r16.products);
} }
function MSSidebarComponent_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, MSSidebarComponent_ng_container_0_div_14_div_1_Template, 5, 3, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", c_r14);
} }
function MSSidebarComponent_ng_container_0_nz_link_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-link", 34);
} if (rf & 2) {
    const i_r21 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate1("nzHref", "#product-cat-", i_r21._id, "");
    i0.ɵɵproperty("nzTitle", i_r21.name);
} }
function MSSidebarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵtemplate(2, MSSidebarComponent_ng_container_0_div_2_Template, 7, 1, "div", 2);
    i0.ɵɵelementStart(3, "ul", 3);
    i0.ɵɵtemplate(4, MSSidebarComponent_ng_container_0_li_4_Template, 4, 6, "li", 4);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵlistener("click", function MSSidebarComponent_ng_container_0_Template_div_click_8_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.showProduct = false; });
    i0.ɵɵelement(9, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 9);
    i0.ɵɵelementStart(11, "div", 10, 11);
    i0.ɵɵelementStart(13, "div", 12);
    i0.ɵɵtemplate(14, MSSidebarComponent_ng_container_0_div_14_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 14);
    i0.ɵɵelementStart(16, "nz-anchor", 15);
    i0.ɵɵtemplate(17, MSSidebarComponent_ng_container_0_nz_link_17_Template, 1, 2, "nz-link", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const store_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", store_r1.sidebarConfig.hasProductNav);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 4, ctx_r0.shortcuts$));
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r0.searchList);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.searchCategories);
} }
export class MSSidebarComponent {
    constructor(layoutStateService, brand, srv, cdr) {
        this.layoutStateService = layoutStateService;
        this.brand = brand;
        this.srv = srv;
        this.cdr = cdr;
        this.showProduct = false;
        this.inited = false;
        this.q = '';
        this.searchCategories = [];
        brand.setSidebar(true);
    }
    get store$() {
        return this.layoutStateService.getStore$();
    }
    get shortcuts$() {
        return this.layoutStateService.getShortcuts$();
    }
    get l() {
        return this.srv.i18n;
    }
    search(scroll = true) {
        const res = this.srv.search(this.q);
        this.searchList = res.list;
        this.searchCategories = res.categories;
        this.cdr.detectChanges();
        if (scroll) {
            // wait angular render
            setTimeout(() => {
                // 滚动至顶部
                this.categoryEl.nativeElement.scrollTop = 0;
            });
        }
    }
    ngAfterViewInit() {
        this.srv.getData().subscribe((x) => {
            this.inited = true;
            this.search();
        });
    }
    ngOnDestroy() {
        this.brand.setSidebar(false);
    }
}
MSSidebarComponent.ɵfac = function MSSidebarComponent_Factory(t) { return new (t || MSSidebarComponent)(i0.ɵɵdirectiveInject(i1.LayoutStateService), i0.ɵɵdirectiveInject(i2.BrandService), i0.ɵɵdirectiveInject(i3.MSProductService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MSSidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSSidebarComponent, selectors: [["ms-sidebar"]], viewQuery: function MSSidebarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.categoryEl = _t.first);
    } }, hostVars: 4, hostBindings: function MSSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-ms__sidebar", true)("alain-ms__sidebar-showproduct", ctx.showProduct);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "alain-ms__sidebar-wrap"], ["class", "alain-ms__sidebar-product-all", 3, "click", 4, "ngIf"], [1, "alain-ms__sidebar-product-quick"], ["class", "alain-ms__sidebar-product", 4, "ngFor", "ngForOf"], [1, "alain-ms__sidebar-products"], [1, "alain-ms__products"], [1, "alain-ms__products-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [1, "alain-ms__products-left"], [1, "alain-ms__products-category-wrap"], ["categoryEl", ""], [1, "d-flex"], ["class", "alain-ms__products-category-column", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-right"], ["nzAffix", "false", "nzContainer", ".alain-ms__products-category-wrap", "nzOffsetTop", "150", "nzShowInkInFixed", "false"], [3, "nzHref", "nzTitle", 4, "ngFor", "ngForOf"], [1, "alain-ms__sidebar-product-all", 3, "click"], [1, "alain-ms__sidebar-product", "alain-ms__sidebar-product-all-wrap"], ["nz-icon", "", "nzType", "appstore", 1, "alain-ms__sidebar-product-icon"], [1, "alain-ms__sidebar-product-name"], [1, "alain-ms__sidebar-product-toolbar"], ["nz-icon", "", "nzType", "right"], [1, "alain-ms__sidebar-product"], [3, "link-to", "linkToChanged"], [1, "alain-ms__sidebar-product-name", 3, "link-to", "linkToChanged"], [1, "alain-ms__products-category-column"], ["class", "alain-ms__products-category", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-category"], [1, "alain-ms__products-category-title", 3, "id"], [1, "list-unstyled"], ["class", "alain-ms__products-category-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "alain-ms__products-category-item", 3, "ngClass"], [1, "alain-ms__products-category-item-link", 3, "link-to", "linkToChanged"], [3, "nzHref", "nzTitle"]], template: function MSSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MSSidebarComponent_ng_container_0_Template, 18, 6, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [i4.NgIf, i4.NgForOf, i5.NzIconDirective, i6.NzAnchorComponent, i7.MSLinkToDirective, i4.NgClass, i6.NzAnchorLinkComponent], pipes: [i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSSidebarComponent, [{
        type: Component,
        args: [{
                selector: 'ms-sidebar',
                templateUrl: './sidebar.component.html',
                host: {
                    '[class.alain-ms__sidebar]': 'true',
                    '[class.alain-ms__sidebar-showproduct]': 'showProduct',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.LayoutStateService }, { type: i2.BrandService }, { type: i3.MSProductService }, { type: i0.ChangeDetectorRef }]; }, { categoryEl: [{
            type: ViewChild,
            args: ['categoryEl', { static: false }]
        }] }); })();
//# sourceMappingURL=sidebar.component.js.map