import { Injectable } from '@angular/core';
import { DomInsertionService } from '@abp/ng.core';
import { InternalStore } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class LayoutStateService {
    // getSkin() {
    //   return this.store.state.skin;
    // }
    // getSkin$() {
    //   return this.store.sliceState(state => state.skin);
    // }
    constructor(domInsertionService) {
        this.domInsertionService = domInsertionService;
        this.store = new InternalStore({});
    }
    getThemeSettings() {
        return this.store.state.themeSettings;
    }
    getThemeSettings$() {
        return this.store.sliceState(state => state.themeSettings);
    }
}
LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(i0.ɵɵinject(i1.DomInsertionService)); }, token: LayoutStateService, providedIn: "root" });
LayoutStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LayoutStateService.ctorParameters = () => [
    { type: DomInsertionService }
];
//# sourceMappingURL=layout-state.service.js.map