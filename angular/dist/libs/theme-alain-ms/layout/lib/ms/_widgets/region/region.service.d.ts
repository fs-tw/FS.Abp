import { _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface MSRegionDistrict {
    name?: string;
    list?: MSRegionItem[];
}
export interface MSRegionItem {
    id?: string;
    country?: string;
    name?: string;
    selected?: boolean;
}
export declare class MSRegionService {
    private http;
    private _data;
    private get platList();
    get item(): MSRegionItem;
    get list(): MSRegionDistrict[];
    constructor(http: _HttpClient);
    private getByHttp;
    getData(): Observable<NzSafeAny[] | null>;
    setSelected(item: MSRegionItem): void;
    static ɵfac: i0.ɵɵFactoryDef<MSRegionService, never>;
    static ɵprov: i0.ɵɵInjectableDef<MSRegionService>;
}
//# sourceMappingURL=region.service.d.ts.map