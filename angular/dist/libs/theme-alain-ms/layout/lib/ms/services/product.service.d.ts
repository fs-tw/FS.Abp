import { Observable } from 'rxjs';
import { MSProductCategory, MSProductI18n } from '../../models';
import { LayoutStateService } from '../../services/layout-state.service';
import * as i0 from "@angular/core";
export declare class MSProductService {
    private layoutSateService;
    private _data;
    get data(): MSProductCategory[];
    get i18n(): MSProductI18n;
    getData(): Observable<MSProductCategory[]>;
    constructor(layoutSateService: LayoutStateService);
    search(q: string): {
        list: MSProductCategory[][];
        categories: MSProductCategory[];
    };
    static ɵfac: i0.ɵɵFactoryDef<MSProductService, never>;
    static ɵprov: i0.ɵɵInjectableDef<MSProductService>;
}
//# sourceMappingURL=product.service.d.ts.map