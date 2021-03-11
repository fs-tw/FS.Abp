import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { updateHostClass } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BrandService } from './ms.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/router";
import * as i3 from "ng-zorro-antd/message";
import * as i4 from "@delon/abc/reuse-tab";
import * as i5 from "./ms.service";
import * as i6 from "./components/topbar/topbar.component";
import * as i7 from "@angular/common";
import * as i8 from "ng-zorro-antd/spin";
import * as i9 from "./components/sidebar/sidebar.component";
function MSLayoutComponent_ms_sidebar_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ms-sidebar");
} }
export class MSLayoutComponent {
    constructor(bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.doc = doc;
        this.isFetching = false;
        // 是否单页，单页不显示侧边栏
        this.hasAllNav = false;
        this.hasSidebar = true;
        const routerData = Object.assign({ hasAllNav: false, hasSidebar: true }, route.snapshot.data);
        this.hasAllNav = routerData.hasAllNav === true;
        this.hasSidebar = routerData.hasSidebar === true;
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
MSLayoutComponent.ɵfac = function MSLayoutComponent_Factory(t) { return new (t || MSLayoutComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver), i0.ɵɵdirectiveInject(i1.MediaMatcher), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.NzMessageService), i0.ɵɵdirectiveInject(i4.ReuseTabService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i5.BrandService), i0.ɵɵdirectiveInject(DOCUMENT)); };
MSLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MSLayoutComponent, selectors: [["layout-ms"]], decls: 6, vars: 4, consts: [[3, "allNav"], [4, "ngIf"], [1, "brand-page-loading", 3, "hidden"], ["nzSpinning", ""], [1, "alain-ms__body", 3, "hidden"]], template: function MSLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ms-topbar", 0);
        i0.ɵɵtemplate(1, MSLayoutComponent_ms_sidebar_1_Template, 1, 0, "ms-sidebar", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelement(3, "nz-spin", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "router-outlet");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("allNav", ctx.hasAllNav);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasSidebar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.isFetching);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", ctx.isFetching);
    } }, directives: [i6.MSTopbarComponent, i7.NgIf, i8.NzSpinComponent, i2.RouterOutlet, i9.MSSidebarComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'layout-ms',
                templateUrl: './ms.component.html',
            }]
    }], function () { return [{ type: i1.BreakpointObserver }, { type: i1.MediaMatcher }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.NzMessageService }, { type: i4.ReuseTabService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i5.BrandService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=ms.component.js.map