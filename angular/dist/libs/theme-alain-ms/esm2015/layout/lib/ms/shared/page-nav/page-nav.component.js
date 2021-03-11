import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, TitleService } from '@delon/theme';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
import * as i1 from "../../ms.service";
import * as i2 from "@angular/router";
import * as i3 from "@delon/theme";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "@abp/ng.core";
function MSPageNavComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "span", 20);
    i0.ɵɵelementStart(2, "span", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_span_4_Template, 2, 1, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate("routerLink", i_r7.link);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r7.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵelement(1, "span", 20);
    i0.ɵɵelementStart(2, "span", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_span_4_Template, 2, 1, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("href", i_r7.externalLink, i0.ɵɵsanitizeUrl)("target", i_r7.target);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r7.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r7.badge);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, MSPageNavComponent_ng_template_9_li_0_ng_container_1_div_1_Template, 5, 3, "div", 17);
    i0.ɵɵtemplate(2, MSPageNavComponent_ng_template_9_li_0_ng_container_1_a_2_Template, 5, 4, "a", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r7.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !i_r7.link);
} }
function MSPageNavComponent_ng_template_9_li_0_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
const _c1 = function (a0, a1) { return { $implicit: a0, level: a1 }; };
function MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵlistener("click", function MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r22); const i_r7 = i0.ɵɵnextContext().$implicit; return i_r7.active = !i_r7.active; });
    i0.ɵɵelementStart(2, "span", 20);
    i0.ɵɵelement(3, "i", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 27);
    i0.ɵɵtemplate(7, MSPageNavComponent_ng_template_9_li_0_ng_container_2_ng_container_7_Template, 1, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r7 = i0.ɵɵnextContext().$implicit;
    const level_r5 = i0.ɵɵnextContext().level;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(10);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzType", i_r7.active ? "caret-down" : "caret-right");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r7.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0, !i_r7.active));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction2(7, _c1, i_r7.children, level_r5 + 1));
} }
function MSPageNavComponent_ng_template_9_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, MSPageNavComponent_ng_template_9_li_0_ng_container_1_Template, 3, 2, "ng-container", 16);
    i0.ɵɵtemplate(2, MSPageNavComponent_ng_template_9_li_0_ng_container_2_Template, 8, 10, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r7.children.length == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r7.children.length > 0);
} }
function MSPageNavComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MSPageNavComponent_ng_template_9_li_0_Template, 3, 2, "li", 15);
} if (rf & 2) {
    const ls_r4 = ctx.$implicit;
    i0.ɵɵproperty("ngForOf", ls_r4);
} }
function MSPageNavComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0) { return { "ms-page-nav__back": a0 }; };
const _c3 = function (a0) { return { $implicit: a0, level: 1 }; };
export class MSPageNavComponent {
    constructor(srv, router, titSrv, menuSrv, 
    //@Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    cdr) {
        this.srv = srv;
        this.router = router;
        this.titSrv = titSrv;
        this.menuSrv = menuSrv;
        this.cdr = cdr;
        this._config = {};
        this._menus = [];
    }
    set config(val) {
        const { title, titleI18n, backHref, doc, docI18n } = val;
        // this.titSrv.setTitle(docI18n ? this.i18n.fanyi(docI18n) : doc);
        // this._config.title = titleI18n ? this.i18n.fanyi(titleI18n) : title;
        this._config.title = title;
        this._config.backHref = backHref || '';
    }
    get config() {
        return this._config;
    }
    set list(list) {
        this.menuSrv.add(list);
        this.menuSrv.visit(list, (i) => (i.active = true));
        this._menus = this.menuSrv.menus;
    }
    get list() {
        return this._menus;
    }
    to(url, e) {
        e.preventDefault();
        if (!url) {
            return;
        }
        this.router.navigateByUrl(url);
    }
    toggle() {
        this.srv.hideNav = !this.srv.hideNav;
        this.srv.triggerNotify('page-nav');
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
MSPageNavComponent.ɵfac = function MSPageNavComponent_Factory(t) { return new (t || MSPageNavComponent)(i0.ɵɵdirectiveInject(i1.BrandService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.TitleService), i0.ɵɵdirectiveInject(i3.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
MSPageNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSPageNavComponent, selectors: [["page-nav"]], inputs: { config: "config", list: "list" }, features: [i0.ɵɵNgOnChangesFeature], decls: 18, vars: 14, consts: [[1, "ms-page-nav__body"], [1, "ms-page-nav__stage"], [1, "ms-page-nav__scene", "ms-page-nav__scene-main"], [1, "ms-page-nav__title", 3, "ngClass", "title", "click"], ["nz-icon", "", "nzType", "left", 4, "ngIf"], [1, "ms-page-nav__list", "scrollbar"], ["treeTpl", ""], ["role", "tree", 1, "list-unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ms-page-nav__control", 3, "click"], [1, "ms-page-nav__control-wrap"], [1, "ms-page-nav__control-bg"], [1, "ms-page-nav__control-btn"], ["nz-icon", "", "nzType", "menu-fold"], ["nz-icon", "", "nzType", "left"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ms-page-nav__item", "role", "treeitem", "routerLinkActive", "ms-page-nav__item-active", 3, "routerLink", 4, "ngIf"], ["class", "ms-page-nav__item", "role", "treeitem", 3, "href", "target", 4, "ngIf"], ["role", "treeitem", "routerLinkActive", "ms-page-nav__item-active", 1, "ms-page-nav__item", 3, "routerLink"], [1, "ms-page-nav__item-icon"], [1, "ms-page-nav__item-tit"], ["class", "ms-page-nav__item-badge", 4, "ngIf"], [1, "ms-page-nav__item-badge"], ["role", "treeitem", 1, "ms-page-nav__item", 3, "href", "target"], ["role", "treeitem", 1, "ms-page-nav__item", 3, "click"], ["nz-icon", "", 3, "nzType"], ["role", "tree", 1, "list-unstyled", 3, "ngClass"]], template: function MSPageNavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵlistener("click", function MSPageNavComponent_Template_div_click_3_listener($event) { return ctx.to(ctx.config.backHref, $event); });
        i0.ɵɵpipe(4, "i18n");
        i0.ɵɵtemplate(5, MSPageNavComponent_i_5_Template, 1, 0, "i", 4);
        i0.ɵɵtext(6);
        i0.ɵɵpipe(7, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵtemplate(9, MSPageNavComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(11, "ul", 7);
        i0.ɵɵtemplate(12, MSPageNavComponent_ng_container_12_Template, 1, 0, "ng-container", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵlistener("click", function MSPageNavComponent_Template_div_click_13_listener() { return ctx.toggle(); });
        i0.ɵɵelementStart(14, "div", 10);
        i0.ɵɵelement(15, "div", 11);
        i0.ɵɵelementStart(16, "div", 12);
        i0.ɵɵelement(17, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(10);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c2, ctx.config.backHref))("title", ctx.config.backHref ? i0.ɵɵpipeBind1(4, 6, "ms.page-nav.back") : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.config.backHref);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 8, ctx.config.title), " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(12, _c3, ctx.list));
    } }, directives: [i4.NgClass, i4.NgIf, i4.NgTemplateOutlet, i5.NzIconDirective, i4.NgForOf, i2.RouterLinkActive, i2.RouterLink], pipes: [i3.ɵa, i6.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSPageNavComponent, [{
        type: Component,
        args: [{
                selector: 'page-nav',
                templateUrl: './page-nav.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.BrandService }, { type: i2.Router }, { type: i3.TitleService }, { type: i3.MenuService }, { type: i0.ChangeDetectorRef }]; }, { config: [{
            type: Input
        }], list: [{
            type: Input
        }] }); })();
//# sourceMappingURL=page-nav.component.js.map