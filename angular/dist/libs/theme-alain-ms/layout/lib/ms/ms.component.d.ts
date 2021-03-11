import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BrandService } from './ms.service';
export declare class MSLayoutComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    private srv;
    private doc;
    private notify$;
    private queryCls?;
    isFetching: boolean;
    hasAllNav: boolean;
    hasSidebar: boolean;
    get isMobile(): boolean;
    private get body();
    constructor(bm: BreakpointObserver, mediaMatcher: MediaMatcher, router: Router, route: ActivatedRoute, msg: NzMessageService, reuseTabSrv: ReuseTabService, el: ElementRef, renderer: Renderer2, srv: BrandService, doc: any);
    private scrollToTop;
    private setClass;
    private setBodyClass;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
