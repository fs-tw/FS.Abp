import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { MSTopbarNavLink, MSTopbarService } from '../../services/topbar.service';
import * as i0 from "@angular/core";
export declare class MSSearchComponent implements OnDestroy {
    private srv;
    private cdr;
    private ipt;
    show: boolean;
    q: string;
    search$: Subject<string>;
    list: any[];
    get l(): MSTopbarNavLink;
    constructor(http: _HttpClient, srv: MSTopbarService, cdr: ChangeDetectorRef);
    _click(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MSSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSSearchComponent, "ms-search", never, {}, {}, never, never>;
}
//# sourceMappingURL=search.component.d.ts.map