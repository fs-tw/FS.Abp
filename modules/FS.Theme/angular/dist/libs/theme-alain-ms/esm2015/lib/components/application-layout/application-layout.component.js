import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, RouteConfigLoadStart, Router, } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { LayoutStateService, } from '@fs-tw/theme-alain-ms/layout';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { updateHostClass } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BrandService } from '@fs-tw/theme-alain-ms/layout';
export class ApplicationLayoutComponent {
    constructor(layoutStateService, bm, mediaMatcher, router, route, msg, reuseTabSrv, el, renderer, srv, doc) {
        this.layoutStateService = layoutStateService;
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
ApplicationLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-application-layout',
                template: "<ng-container *ngIf=\"store$ | async as store\">\n  <ms-topbar [allNav]=\"store.hasAllNav\"></ms-topbar>\n  <ms-sidebar *ngIf=\"store.hasSidebar\"></ms-sidebar>\n  <div class=\"brand-page-loading\" [hidden]=\"!store.isFetching\">\n    <nz-spin nzSpinning></nz-spin>\n  </div>\n  <div class=\"alain-ms__body\" [hidden]=\"store.isFetching\">\n    <service-layout\n      *ngIf=\"store.pageNavs.length > 0\"\n      [nav]=\"store.hasPageNav\"\n      [navConfig]=\"store.navConfig\"\n      [navList]=\"store.pageNavs\"\n    >\n      <page-bar [subTitle]=\"subTitleTpl\" [title]=\"titleTpl\">\n        <ng-template #titleTpl> {{ store.navConfig.doc }} </ng-template>\n        <ng-template #subTitleTpl>\n          <div class=\"text-orange\">\n            \u4EE5\u4E0B\u53EA\u5C55\u793A\u90E8\u5206\u7EC4\u4EF6\uFF0C\u66F4\u591A\u7EC4\u4EF6<a\n              href=\"https://ng.ant.design\"\n              target=\"_blank\"\n              >ng.ant.design</a\n            >\n          </div>\n        </ng-template>\n        <!-- <button (click)=\"msg.success('clean')\" nz-button >\u6E05\u7406</button>\n      <button (click)=\"msg.success('remove')\" nz-button nzDanger >\u79FB\u9664</button>\n      <button (click)=\"msg.success('add')\" nz-button nzType=\"primary\">\u65B0\u589E</button> -->\n      </page-bar>\n      <router-outlet></router-outlet>\n    </service-layout>\n  </div>\n</ng-container>\n"
            },] }
];
ApplicationLayoutComponent.ctorParameters = () => [
    { type: LayoutStateService },
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
//# sourceMappingURL=application-layout.component.js.map