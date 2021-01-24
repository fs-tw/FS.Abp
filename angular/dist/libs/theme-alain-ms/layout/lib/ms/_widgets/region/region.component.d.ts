import { ChangeDetectorRef, OnInit } from '@angular/core';
import { MSRegionItem, MSRegionService } from './region.service';
export declare class MSRegionComponent implements OnInit {
    srv: MSRegionService;
    private cdr;
    inited: boolean;
    constructor(srv: MSRegionService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    selected(item: MSRegionItem): void;
}
