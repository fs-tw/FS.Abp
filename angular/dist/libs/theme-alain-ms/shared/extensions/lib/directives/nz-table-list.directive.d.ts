import { ListService, LocalizationService } from '@abp/ng.core';
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
import * as i0 from "@angular/core";
export declare class NzTableListDirective implements OnChanges, OnDestroy, OnInit {
    private table;
    private cdRef;
    private localizationService;
    private subscription;
    private querySubscription;
    private loadingSubscription;
    list: ListService;
    constructor(table: NzTableComponent, cdRef: ChangeDetectorRef, localizationService: LocalizationService);
    private setInitialValues;
    private subscribeToPage;
    private subscribeToLoading;
    private subscribeToQuery;
    ngOnChanges({ list }: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzTableListDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NzTableListDirective, "nz-table[list]", ["nzTableList"], { "list": "list"; }, {}, never>;
}
//# sourceMappingURL=nz-table-list.directive.d.ts.map