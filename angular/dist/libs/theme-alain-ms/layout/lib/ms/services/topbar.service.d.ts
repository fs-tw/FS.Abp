import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { MSLink } from '../../models/layout';
import * as i0 from "@angular/core";
export interface MSTopbar {
    [key: string]: any;
    messagess?: MSTopbarMessage[];
    navLinks?: {
        [key: string]: MSTopbarNavLink;
    };
}
export interface MSTopbarMessage extends MSLink {
    [key: string]: any;
    className?: string;
    title?: string;
    createdTime?: string;
}
export interface MSTopbarNavLink extends MSLink {
    [key: string]: any;
    id?: string;
    text?: string;
    className?: string;
    /** 二级菜单，只支持一层 */
    links?: MSTopbarNavLink[];
}
/**
 * 顶部菜单所有数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/topbar-en-US.json`
 * - 最终处理数据以 `topbar.interface.ts` 系列接口为准
 */
export declare class MSTopbarService {
    private http;
    private _data;
    get data(): MSTopbar;
    get messages(): MSTopbarMessage[];
    getData(): Observable<MSTopbar>;
    getNav(key: string): MSTopbarNavLink;
    constructor(http: _HttpClient);
    private getByHttp;
    static ɵfac: i0.ɵɵFactoryDef<MSTopbarService, never>;
    static ɵprov: i0.ɵɵInjectableDef<MSTopbarService>;
}
//# sourceMappingURL=topbar.service.d.ts.map