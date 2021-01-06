import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BrandService } from '../../ms.service';
export declare class MSPageSingleComponent implements OnInit, OnChanges, OnDestroy {
    private brand;
    wide: boolean;
    fixed: boolean;
    title?: string | TemplateRef<void>;
    subTitle?: string | TemplateRef<void>;
    extra?: string | TemplateRef<void>;
    constructor(brand: BrandService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
