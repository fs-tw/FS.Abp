import { AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout, MSProduct, MSProductCategory, MSProductI18n } from '../../../models';
import { LayoutStateService } from '../../../services/layout-state.service';
import { BrandService } from '../../ms.service';
import { MSProductService } from '../../services/product.service';
import * as i0 from "@angular/core";
export declare class MSSidebarComponent implements AfterViewInit, OnDestroy {
    private layoutStateService;
    private brand;
    private srv;
    private cdr;
    private categoryEl;
    showProduct: boolean;
    inited: boolean;
    get store$(): Observable<Layout.State>;
    get shortcuts$(): Observable<MSProduct[]>;
    get l(): MSProductI18n;
    q: string;
    searchList?: MSProductCategory[][];
    searchCategories: MSProductCategory[];
    constructor(layoutStateService: LayoutStateService, brand: BrandService, srv: MSProductService, cdr: ChangeDetectorRef);
    search(scroll?: boolean): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MSSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSSidebarComponent, "ms-sidebar", never, {}, {}, never, never>;
}
//# sourceMappingURL=sidebar.component.d.ts.map