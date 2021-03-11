import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, RouteConfigLoadStart, Router, } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { LayoutStateService, } from '@fs-tw/theme-alain-ms/layout';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { updateHostClass } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BrandService } from '@fs-tw/theme-alain-ms/layout';
import * as i0 from "@angular/core";
import * as i1 from "@fs-tw/theme-alain-ms/layout";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/router";
import * as i4 from "ng-zorro-antd/message";
import * as i5 from "@delon/abc/reuse-tab";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/spin";
import * as i8 from "@abp/ng.core";
function ApplicationLayoutComponent_ng_container_0_ms_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ms-sidebar");
} }
function ApplicationLayoutComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function ApplicationLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ms-topbar", 2);
    i0.ɵɵtemplate(2, ApplicationLayoutComponent_ng_container_0_ms_sidebar_2_Template, 1, 0, "ms-sidebar", 0);
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "nz-spin", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "service-layout", 6);
    i0.ɵɵtemplate(7, ApplicationLayoutComponent_ng_container_0_div_7_Template, 1, 0, "div", 7);
    i0.ɵɵelement(8, "router-outlet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const store_r3 = ctx.ngIf;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("allNav", store_r3.sidebarConfig.hasAllNav);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", store_r3.sidebarConfig.hasSidebar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hidden", !store_r3.isFetching);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", store_r3.isFetching);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nav", store_r3.sidebarConfig.hasPageNav)("navConfig", store_r3.navConfig)("navList", store_r3.pageNavs);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
} }
const _c0 = function (a0) { return [a0]; };
function ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtext(1, "\u8FD4\u56DE");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, ctx_r11.parentPath));
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_button_1_Template, 2, 3, "button", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.isCurrentPath);
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ApplicationLayoutComponent_ng_template_2_ng_template_1_span_0_Template, 2, 1, "span", 0);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r7.layoutStateService == null ? null : ctx_r7.layoutStateService.routesProcessor == null ? null : ctx_r7.layoutStateService.routesProcessor.RouterState);
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r12.layoutStateService == null ? null : ctx_r12.layoutStateService.routesProcessor == null ? null : ctx_r12.layoutStateService.routesProcessor.CurrentRoute == null ? null : ctx_r12.layoutStateService.routesProcessor.CurrentRoute.name), " ");
} }
function ApplicationLayoutComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ApplicationLayoutComponent_ng_template_2_ng_template_3_span_0_Template, 3, 3, "span", 0);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r9.layoutStateService == null ? null : ctx_r9.layoutStateService.routesProcessor == null ? null : ctx_r9.layoutStateService.routesProcessor.RouterState);
} }
function ApplicationLayoutComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "page-bar", 8);
    i0.ɵɵtemplate(1, ApplicationLayoutComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, ApplicationLayoutComponent_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(2);
    const _r8 = i0.ɵɵreference(4);
    i0.ɵɵproperty("subTitle", _r6)("title", _r8);
} }
export class ApplicationLayoutComponent {
    constructor(layoutStateService, bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.layoutStateService = layoutStateService;
        this.router = router;
        this.route = route;
        this.msg = msg;
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.doc = doc;
        //hasAllNav = false;
        //hasSidebar = true;
        this.isFetching = false;
        this.store$ = this.layoutStateService.getStore$();
        const routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
        //this.hasAllNav = routerData.hasAllNav === true;
        //this.hasSidebar = routerData.hasSidebar === true;
        // scroll to top in change page
        router.events.subscribe((evt) => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
                this.scrollToTop();
            }
            if (evt instanceof NavigationError) {
                this.isFetching = false;
                msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.isFetching = false;
            // If have already cached router, should be don't need scroll to top
            if (reuseTabSrv.exists(evt.url)) {
                return;
            }
            this.scrollToTop();
        });
        // media
        const query = {
            'screen-xs': '(max-width: 575px)',
            'screen-sm': '(min-width: 576px) and (max-width: 767px)',
            'screen-md': '(min-width: 768px) and (max-width: 991px)',
            'screen-lg': '(min-width: 992px) and (max-width: 1199px)',
            'screen-xl': '(min-width: 1200px)',
        };
        bm.observe([
            '(min-width: 1200px)',
            '(min-width: 992px) and (max-width: 1199px)',
            '(min-width: 768px) and (max-width: 991px)',
            '(min-width: 576px) and (max-width: 767px)',
            '(max-width: 575px)',
        ]).subscribe(() => {
            this.queryCls = Object.keys(query).find((key) => mediaMatcher.matchMedia(query[key]).matches);
            this.setClass();
        });
    }
    get isMobile() {
        return this.srv.isMobile;
    }
    get body() {
        return this.doc.body;
    }
    get isCurrentPath() {
        return this.router.createUrlTree(['./'], { relativeTo: this.route }).toString() === this.router.routerState.snapshot.url.toString();
    }
    get parentPath() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var parentPath = (_e = (_d = (_c = (_b = (_a = this.layoutStateService) === null || _a === void 0 ? void 0 : _a.routesProcessor) === null || _b === void 0 ? void 0 : _b.CurrentRoute) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.path) !== null && _e !== void 0 ? _e : "/";
        var parentPathLength = parentPath.split("/").length;
        var url = (_h = (_g = (_f = this.layoutStateService) === null || _f === void 0 ? void 0 : _f.routesProcessor) === null || _g === void 0 ? void 0 : _g.CurrentUrl) !== null && _h !== void 0 ? _h : "/";
        var urlArray = url.split("/").filter((x, i) => i < parentPathLength);
        return urlArray.toString().replace(/,/g, "/");
    }
    scrollToTop() {
        const el = this.doc.querySelector('.alain-ms__product-body');
        if (!el) {
            return;
        }
        el.scrollTop = 0;
    }
    setClass() {
        const { el, renderer, queryCls } = this;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-ms']: true,
            [queryCls]: true,
        }, true);
    }
    setBodyClass() {
        const { hasTopbar, hasSidebar, hasFixed, colorWeak } = this.srv.layout;
        updateHostClass(this.body, this.renderer, {
            'color-weak': colorWeak,
            ['alain-ms__has-topbar']: hasTopbar,
            ['alain-ms__has-sidebar']: hasSidebar,
            ['alain-ms__has-fixed']: hasFixed,
        });
    }
    ngOnInit() {
        this.notify$ = this.srv.notify.subscribe(() => {
            this.setClass();
            this.setBodyClass();
        });
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
        this.body.classList.remove('alain-ms__has-topbar', 'alain-ms__has-sidebar', 'alain-ms__has-fixed');
    }
}
ApplicationLayoutComponent.ɵfac = function ApplicationLayoutComponent_Factory(t) { return new (t || ApplicationLayoutComponent)(i0.ɵɵdirectiveInject(i1.LayoutStateService), i0.ɵɵdirectiveInject(i2.BreakpointObserver), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.NzMessageService), i0.ɵɵdirectiveInject(i5.ReuseTabService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BrandService), i0.ɵɵdirectiveInject(DOCUMENT)); };
ApplicationLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ApplicationLayoutComponent, selectors: [["abp-application-layout"]], decls: 4, vars: 3, consts: [[4, "ngIf"], ["FsPageBar", ""], [3, "allNav"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"], [3, "nav", "navConfig", "navList"], [4, "ngTemplateOutlet"], [3, "subTitle", "title"], ["subTitleTpl", ""], ["titleTpl", ""], ["type", "button", "class", "pri-btn", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "pri-btn", 3, "routerLink"]], template: function ApplicationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ApplicationLayoutComponent_ng_container_0_Template, 9, 8, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ApplicationLayoutComponent_ng_template_2_Template, 5, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [i6.NgIf, i1.MSTopbarComponent, i7.NzSpinComponent, i1.MSServiceLayoutComponent, i6.NgTemplateOutlet, i3.RouterOutlet, i1.MSSidebarComponent, i1.MSPageBarComponent, i3.RouterLink], pipes: [i6.AsyncPipe, i8.LocalizationPipe], styles: [".pri-btn[_ngcontent-%COMP%]{border:1px solid #ddd;color:#000;background:#fff;font-size:8px}.pri-btn[_ngcontent-%COMP%]:hover{border:1px solid #26d7eb;color:#26d7eb}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'abp-application-layout',
                templateUrl: './application-layout.component.html',
                styleUrls: ['./application-layout.component.less'],
            }]
    }], function () { return [{ type: i1.LayoutStateService }, { type: i2.BreakpointObserver }, { type: i2.MediaMatcher }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.NzMessageService }, { type: i5.ReuseTabService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.BrandService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=application-layout.component.js.map