import { Injectable, Injector } from '@angular/core';
import { InternalStore, LocalizationPipe } from '@abp/ng.core';
import { map } from 'rxjs/operators';
import { RoutesProcessor } from './routes.processor';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class LayoutStateService {
    constructor(injector, localizationPipe) {
        this.injector = injector;
        this.localizationPipe = localizationPipe;
        this.store = new InternalStore({
            routerState: null,
            isFetching: false,
            hasSidebar: true,
            hasAllNav: false,
            categories: [],
            navConfig: {
                nav: '',
                title: '系統管理',
                doc: '系統管理',
            },
            hasPageNav: true,
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
    fetchPageNavs(routerState) {
        //this.store.patch({ routerState });
        this.routesProcessor.RouterState = routerState;
        let navConfig = this.routesProcessor.CurrentNavConfig;
        this.store.patch({ navConfig });
        let pageNavs = this.routesProcessor.GetPageNavs(routerState, navConfig);
        this.store.patch({ pageNavs });
    }
    listenRoutes() {
        this.routesProcessor.Category$.subscribe((categories) => {
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