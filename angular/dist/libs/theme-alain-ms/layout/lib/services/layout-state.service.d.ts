import { Injector } from '@angular/core';
import { LocalizationPipe } from '@abp/ng.core';
import { Layout, MSProduct, MSServiceNavConfig } from '../models';
import { RouterStateSnapshot } from '@angular/router';
import { RoutesProcessor } from './routes.processor';
import * as i0 from "@angular/core";
export declare class LayoutStateService {
    private injector;
    localizationPipe: LocalizationPipe;
    private store;
    routesProcessor: RoutesProcessor;
    getStore$(): import("rxjs").Observable<Layout.State>;
    getFetching$(): import("rxjs").Observable<boolean>;
    getCategories(): import("../models").MSProductCategory[];
    getCategories$(): import("rxjs").Observable<import("../models").MSProductCategory[]>;
    getShortcuts(): MSProduct[];
    getShortcuts$(): import("rxjs").Observable<MSProduct[]>;
    getNavConfig(): MSServiceNavConfig;
    getNavConfig$(): import("rxjs").Observable<MSServiceNavConfig>;
    getPageNavs$(): import("rxjs").Observable<import("../models").MSMenu[]>;
    getPageNavs(): import("../models").MSMenu[];
    constructor(injector: Injector, localizationPipe: LocalizationPipe);
    setStore(state: Partial<Layout.State>): void;
    setFetching(isFetching: boolean): void;
    setNavConfig(navConfig: MSServiceNavConfig): void;
    fetchPageNavs(routerState: RouterStateSnapshot): void;
    private listenRoutes;
    static ɵfac: i0.ɵɵFactoryDef<LayoutStateService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LayoutStateService>;
}
//# sourceMappingURL=layout-state.service.d.ts.map