import { _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
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
}
