import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { ArrayService } from '@delon/util';
import { MSLink } from '../../../models/layout';
import { RoutesService, LocalizationPipe } from '@abp/ng.core';
export interface MSAllNavData {
    nav?: MSAllNav[];
    navBottom?: MSAllNavItem[];
    bottomText?: string;
}
export interface MSAllNav extends MSAllNavItem {
    /**
     * 二级菜单
     * - 若指定则 `left`、`right` 失效
     * - 最多只支持一层
     */
    children?: MSAllNav[];
    /**
     * 左边分类
     */
    left?: MSAllNavCategory[];
    /**
     * 左边分类栏数，默认：`4`
     */
    leftColumn?: number;
    /**
     * 分栏后的左边分类，用于渲染
     */
    _left?: MSAllNavCategoryColumn[];
    /**
     * 右边分类
     */
    right?: MSAllNavCategory[];
    level?: number;
    parent?: MSAllNav;
    active?: boolean;
}
export interface MSAllNavCategory {
    text: string;
    list?: MSAllNavItem[];
}
export interface MSAllNavCategoryColumn {
    list: MSAllNavCategory[];
    count: number;
    idx: number;
}
export interface MSAllNavItem extends MSLink {
    /** 提醒标识，红色字眼，例如：HOT,NEW */
    tip?: string;
}
/**
 * 顶部菜单所有菜单数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/all-nav-en-US.json`
 * - 最终处理数据以 `all-nav.interface.ts` 系列接口为准
 */
export declare class MSAllNavService {
    private routesService;
    private localizationPipe;
    private http;
    private arrSrv;
    private _data;
    get allL2(): MSAllNav[];
    get allPanel(): MSAllNav[];
    getData(): Observable<MSAllNavData>;
    constructor(routesService: RoutesService, localizationPipe: LocalizationPipe, http: _HttpClient, arrSrv: ArrayService);
    private fixData;
    private getByHttp;
    refreshActive(i: MSAllNav): void;
}
