import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { updateHostClass } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BrandService } from './ms.service';
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
MSLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-ms',
                template: "<ms-topbar [allNav]=\"hasAllNav\"></ms-topbar>\r\n<ms-sidebar *ngIf=\"hasSidebar\"></ms-sidebar>\r\n<div class=\"brand-page-loading\" [hidden]=\"!isFetching\">\r\n  <nz-spin nzSpinning></nz-spin>\r\n</div>\r\n<div class=\"alain-ms__body\" [hidden]=\"isFetching\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<help></help>\r\n<theme-btn></theme-btn>\r\n"
            },] }
];
MSLayoutComponent.ctorParameters = () => [
    { type: BreakpointObserver },
    { type: MediaMatcher },
    { type: Router },
    { type: ActivatedRoute },
    { type: NzMessageService },
    { type: ReuseTabService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: BrandService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=ms.component.js.map