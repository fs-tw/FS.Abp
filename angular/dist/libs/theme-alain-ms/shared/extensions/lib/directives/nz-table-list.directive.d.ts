import { ListService, LocalizationService } from '@abp/ng.core';
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd/table';
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
}
