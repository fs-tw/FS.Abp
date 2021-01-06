import { BreakpointObserver } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core';
import { Layout, SettingsService } from '@delon/theme';
import { Observable } from 'rxjs';
import { MSLayout } from '../models/layout';
/**
 * 用于维护布局数据
 */
export declare class BrandService implements OnDestroy {
    private settings;
    private notify$;
    private _isMobile;
    /** 顶部高度，若变更需要同时重新指定 LESS 变量：`@alain-ms-topbar-height` 值 */
    readonly topHeight = 50;
    get notify(): Observable<string | null>;
    get isMobile(): boolean;
    get layout(): MSLayout;
    hideNav: boolean;
    constructor(bm: BreakpointObserver, settings: SettingsService);
    private checkMedia;
    setLayout(name: string | Layout, value?: any): void;
    setTopbar(status: boolean): void;
    setSidebar(status: boolean): void;
    setFixed(status: boolean): void;
    triggerNotify(type?: string): void;
    ngOnDestroy(): void;
}
