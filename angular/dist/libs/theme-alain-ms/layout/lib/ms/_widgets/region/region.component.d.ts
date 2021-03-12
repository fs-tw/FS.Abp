import { ChangeDetectorRef, OnInit } from '@angular/core';
import { MSRegionItem, MSRegionService } from './region.service';
import * as i0 from "@angular/core";
export declare class MSRegionComponent implements OnInit {
    srv: MSRegionService;
    private cdr;
    inited: boolean;
    constructor(srv: MSRegionService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    selected(item: MSRegionItem): void;
    static ɵfac: i0.ɵɵFactoryDef<MSRegionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSRegionComponent, "ms-region", never, {}, {}, never, never>;
}
//# sourceMappingURL=region.component.d.ts.map