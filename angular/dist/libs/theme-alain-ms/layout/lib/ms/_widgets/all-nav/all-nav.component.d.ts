import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BrandService } from '../../ms.service';
import { MSAllNav, MSAllNavData, MSAllNavService } from './all-nav.service';
import * as i0 from "@angular/core";
/**
 * 顶部所有菜单组件，当单页布局模式时渲染
 */
export declare class MSAllNavComponent implements OnInit, OnDestroy {
    private srv;
    private brandSrv;
    private cdr;
    private doc?;
    private unsubscribe$;
    private dropdownEl;
    private loading;
    $mouse: Subject<{
        i: MSAllNav;
        status: boolean;
    }>;
    open: boolean;
    data: MSAllNavData;
    get allL2(): MSAllNav[];
    get allPanel(): MSAllNav[];
    get validOpen(): boolean;
    constructor(srv: MSAllNavService, brandSrv: BrandService, cdr: ChangeDetectorRef, doc?: any);
    private handleOpen;
    private load;
    private updateHeight;
    _enter(): void;
    _leave(): void;
    mouseHandle(i: MSAllNav, status: boolean): void;
    private handleMouse;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MSAllNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSAllNavComponent, "ms-all-nav", never, {}, {}, never, never>;
}
//# sourceMappingURL=all-nav.component.d.ts.map