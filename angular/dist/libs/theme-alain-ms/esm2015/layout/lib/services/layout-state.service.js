import { Injectable, Injector } from '@angular/core';
import { InternalStore, LocalizationPipe } from '@abp/ng.core';
import { Layout, } from '../models';
import { map } from 'rxjs/operators';
import { RoutesProcessor } from './routes.processor';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class LayoutStateService {
    constructor(injector, localizationPipe) {
        this.injector = injector;
        this.localizationPipe = localizationPipe;
        this.store = new InternalStore({
            isFetching: false,
            categories: [],
            navConfig: Layout.defaultNavConfig,
            sidebarConfig: Layout.defaultSidebarConfig,
            pageNavs: [],
        });
        this.routesProcessor = new RoutesProcessor(this.injector);
        this.listenRoutes();
    }
    getStore$() {
        return this.store.sliceState((state) => state);
    }
    getFetching$() {
        return this.store.sliceState(({ isFetching }) => isFetching);
    }
    getCategories() {
        return this.store.state.categories;
    }
    getCategories$() {
        return this.store.sliceState((state) => state.categories);
    }
    getShortcuts() {
        const categories = this.getCategories();
        const result = [];
        categories.forEach((p) => {
            result.push(p);
        });
        return result;
    }
    getShortcuts$() {
        return this.getCategories$().pipe(map((x) => {
            const result = [];
            x.forEach((p) => {
                result.push(p);
            });
            return result;
        }));
    }
    getNavConfig() {
        return this.store.state.navConfig;
    }
    getNavConfig$() {
        return this.store.sliceState((state) => state.navConfig);
    }
    getPageNavs$() {
        return this.store.sliceState((state) => state.pageNavs);
    }
    getPageNavs() {
        return this.store.state.pageNavs;
    }
    setStore(state) {
        this.store.patch(Object.assign({}, state));
    }
    setFetching(isFetching) {
        this.store.patch({ isFetching });
    }
    setNavConfig(navConfig) {
        this.store.patch({ navConfig });
        let pageNavs;
        if (navConfig.name !== "AbpUiNavigation::Menu:Administration" /* Administration */) {
            pageNavs = this.routesProcessor.GetPageNavs(this.routesProcessor.RouterState, navConfig);
            this.store.state.sidebarConfig.hasPageNav = true;
        }
        else {
            this.store.state.sidebarConfig.hasPageNav = false;
        }
        this.store.patch({
            pageNavs,
            sidebarConfig: this.store.state.sidebarConfig,
        });
    }
    fetchPageNavs(routerState) {
        var _a, _b;
        this.routesProcessor.RouterState = routerState;
        let navConfig = this.routesProcessor.MergeRouteData('navConfig', Object.assign(Object.assign({}, Layout.defaultNavConfig), { name: (_b = (_a = this.routesProcessor.CurrentRoute) === null || _a === void 0 ? void 0 : _a.parentName) !== null && _b !== void 0 ? _b : "" //eTicketRouteNames.Ticket//
         }));
        let sidebarConfig = this.routesProcessor.MergeRouteData('sidebarConfig', Layout.defaultSidebarConfig);
        this.setStore({
            sidebarConfig,
        });
        this.setNavConfig(navConfig);
    }
    listenRoutes() {
        this.routesProcessor.Category$.subscribe((categories) => {
            if (!!this.routesProcessor.RouterState) {
                this.fetchPageNavs(this.routesProcessor.RouterState);
            }
            this.store.patch({
                categories,
            });
        });
    }
}
LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.LocalizationPipe)); }, token: LayoutStateService, providedIn: "root" });
LayoutStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LayoutStateService.ctorParameters = () => [
    { type: Injector },
    { type: LocalizationPipe }
];
//# sourceMappingURL=layout-state.service.js.map