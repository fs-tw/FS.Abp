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
function AccountLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ms-topbar");
    i0.ɵɵelementStart(2, "div", 1);
    i0.ɵɵelement(3, "nz-spin", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3);
    i0.ɵɵelementStart(5, "service-layout", 4);
    i0.ɵɵelement(6, "router-outlet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const store_r1 = ctx.ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", !store_r1.isFetching);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("hidden", store_r1.isFetching);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("hasConsoleCss", false);
} }
export class AccountLayoutComponent {
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
AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) { return new (t || AccountLayoutComponent)(i0.ɵɵdirectiveInject(i1.LayoutStateService), i0.ɵɵdirectiveInject(i2.BreakpointObserver), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.NzMessageService), i0.ɵɵdirectiveInject(i5.ReuseTabService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BrandService), i0.ɵɵdirectiveInject(DOCUMENT)); };
AccountLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccountLayoutComponent, selectors: [["abp-account-layout"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"], [3, "hasConsoleCss"]], template: function AccountLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AccountLayoutComponent_ng_container_0_Template, 7, 3, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.store$));
    } }, directives: [i6.NgIf, i1.MSTopbarComponent, i7.NzSpinComponent, i1.MSServiceLayoutComponent, i3.RouterOutlet], pipes: [i6.AsyncPipe], styles: [".pri-btn[_ngcontent-%COMP%]{border:1px solid #ddd;color:#000;background:#fff;font-size:8px}.pri-btn[_ngcontent-%COMP%]:hover{border:1px solid #26d7eb;color:#26d7eb}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'abp-account-layout',
                templateUrl: './account-layout.component.html',
                styleUrls: ['./account-layout.component.less'],
            }]
    }], function () { return [{ type: i1.LayoutStateService }, { type: i2.BreakpointObserver }, { type: i2.MediaMatcher }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.NzMessageService }, { type: i5.ReuseTabService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.BrandService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=account-layout.component.js.map