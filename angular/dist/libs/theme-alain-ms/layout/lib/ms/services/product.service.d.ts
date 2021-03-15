import { Observable } from 'rxjs';
import { MSProductCategory, MSProductI18n } from '../../models';
import { LayoutStateService } from '../../services/layout-state.service';
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
}
