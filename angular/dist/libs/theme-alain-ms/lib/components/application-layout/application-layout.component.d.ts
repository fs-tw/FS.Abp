import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { LayoutStateService } from '@fs-tw/theme-alain-ms/layout';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { BrandService } from '@fs-tw/theme-alain-ms/layout';
import { Layout } from '@fs-tw/theme-alain-ms/layout';
import * as i0 from "@angular/core";
export declare class ApplicationLayoutComponent implements OnInit, OnDestroy {
    layoutStateService: LayoutStateService;
    private router;
    private route;
    msg: NzMessageService;
    private el;
    private renderer;
    private srv;
    private doc;
    private notify$;
    private queryCls?;
    store$: Observable<Layout.State>;
    isFetching: boolean;
    get isMobile(): boolean;
    private get body();
    get isCurrentPath(): boolean;
    get parentPath(): string;
    constructor(layoutStateService: LayoutStateService, bm: BreakpointObserver, mediaMatcher: MediaMatcher, router: Router, route: ActivatedRoute, msg: NzMessageService, reuseTabSrv: ReuseTabService, el: ElementRef, renderer: Renderer2, srv: BrandService, doc: any);
    private scrollToTop;
    private setClass;
    private setBodyClass;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ApplicationLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ApplicationLayoutComponent, "abp-application-layout", never, {}, {}, never, never>;
}
//# sourceMappingURL=application-layout.component.d.ts.map