import { ListService, LocalizationService } from '@abp/ng.core';
import { ChangeDetectorRef, Directive, Input, } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzTableComponent } from 'ng-zorro-antd/table';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/table";
import * as i2 from "@abp/ng.core";
export class NzTableListDirective {
    constructor(
    //private body:NzTbodyComponent,
    table, cdRef, localizationService) {
        this.table = table;
        this.cdRef = cdRef;
        this.localizationService = localizationService;
        this.subscription = new Subscription();
        this.querySubscription = new Subscription();
        this.loadingSubscription = new Subscription();
        this.setInitialValues();
    }
    setInitialValues() {
        this.table.nzSize = 'small';
        this.table.nzFrontPagination = false;
        this.table.nzBordered = true;
        this.table.nzShowSizeChanger = true;
    }
    subscribeToPage() {
        const sub = this.table.nzQueryParams.subscribe((params) => {
            var self = this;
            var sort = params.sort
                .filter((x) => !!x.value)
                .map((x) => {
                return { key: x.key, order: x.value === 'ascend' ? 'asc' : 'desc' };
            })[0];
            var sortChanged = isParamsChange();
            if (!!sort) {
                this.list.sortKey = sort.key;
                this.list.sortOrder = sort.order;
            }
            else {
                this.list.sortKey = '';
                this.list.sortOrder = '';
            }
            this.list.maxResultCount = params.pageSize;
            if (sortChanged) {
                this.list.page = 0;
            }
            else {
                this.list.page = params.pageIndex - 1;
            }
            this.cdRef.detectChanges();
            function isParamsChange() {
                var currentSortKey = `${self.list.sortKey}-${self.list.sortOrder}-${self.list.maxResultCount}`;
                var changeSortKey = `--${params.pageSize}`;
                if (!!sort) {
                    changeSortKey = `${sort.key}-${sort.order}-${params.pageSize}`;
                }
                return currentSortKey !== changeSortKey;
            }
        });
        this.subscription.add(sub);
    }
    subscribeToLoading() {
        if (!this.loadingSubscription.closed)
            this.loadingSubscription.unsubscribe();
        this.loadingSubscription = this.list.isLoading$.subscribe((x) => {
            this.table.nzLoading = x;
        });
    }
    subscribeToQuery() {
        if (!this.querySubscription.closed)
            this.querySubscription.unsubscribe();
        this.querySubscription = this.list.query$.subscribe((q) => {
            this.table.onPageIndexChange(this.list.page + 1);
            this.table.onPageSizeChange(this.list.maxResultCount);
        });
    }
    ngOnChanges({ list }) {
        //console.log(list.currentValue);
        this.subscribeToQuery();
        if (!list.firstChange)
            return;
        const { maxResultCount, page } = list.currentValue;
        //this.table.nzPageSize = maxResultCount;
        this.table.onPageSizeChange(maxResultCount);
        this.table.onPageIndexChange(page + 1);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToPage();
        this.subscribeToLoading();
    }
}
NzTableListDirective.ɵfac = function NzTableListDirective_Factory(t) { return new (t || NzTableListDirective)(i0.ɵɵdirectiveInject(i1.NzTableComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.LocalizationService)); };
NzTableListDirective.ɵdir = i0.ɵɵdefineDirective({ type: NzTableListDirective, selectors: [["nz-table", "list", ""]], inputs: { list: "list" }, exportAs: ["nzTableList"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTableListDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line
                selector: 'nz-table[list]',
                exportAs: 'nzTableList',
            }]
    }], function () { return [{ type: i1.NzTableComponent }, { type: i0.ChangeDetectorRef }, { type: i2.LocalizationService }]; }, { list: [{
            type: Input
        }] }); })();
//# sourceMappingURL=nz-table-list.directive.js.map