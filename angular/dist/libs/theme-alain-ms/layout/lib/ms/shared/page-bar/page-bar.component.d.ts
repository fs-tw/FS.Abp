import { AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '@delon/theme';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
export declare class MSPageBarComponent implements AfterViewInit, OnDestroy {
    private router;
    private srv;
    private menuSrv;
    private cdr;
    private router$;
    private _menus;
    private get menus();
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     */
    autoTitle: boolean;
    recursiveBreadcrumb: boolean;
    title?: string;
    subTitle?: string;
    constructor(router: Router, srv: BrandService, menuSrv: MenuService, cdr: ChangeDetectorRef);
    private setTitle;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MSPageBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSPageBarComponent, "page-bar", never, { "autoTitle": "autoTitle"; "recursiveBreadcrumb": "recursiveBreadcrumb"; "title": "title"; "subTitle": "subTitle"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=page-bar.component.d.ts.map