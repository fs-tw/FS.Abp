import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BrandService } from '../../ms.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<MSPageSingleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MSPageSingleComponent, "page-single", never, { "wide": "wide"; "fixed": "fixed"; "title": "title"; "subTitle": "subTitle"; "extra": "extra"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=page-single.component.d.ts.map