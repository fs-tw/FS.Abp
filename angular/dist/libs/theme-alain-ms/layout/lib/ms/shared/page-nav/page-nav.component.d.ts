import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, TitleService } from '@delon/theme';
import { MSMenu, MSServiceNavConfig } from '../../../models/layout';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
export declare class MSPageNavComponent implements OnChanges {
    private srv;
    private router;
    private titSrv;
    private menuSrv;
    private cdr;
    private _config;
    set config(val: MSServiceNavConfig);
    get config(): MSServiceNavConfig;
    private _menus;
    set list(list: MSMenu[]);
    get list(): MSMenu[];
    constructor(srv: BrandService, router: Router, titSrv: TitleService, menuSrv: MenuService, cdr: ChangeDetectorRef);
    to(url: string, e: MouseEvent): void;
    toggle(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<MSPageNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSPageNavComponent, "page-nav", never, { "config": "config"; "list": "list"; }, {}, never, never>;
}
//# sourceMappingURL=page-nav.component.d.ts.map