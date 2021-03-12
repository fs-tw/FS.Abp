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
LayoutStateService.ɵfac = function LayoutStateService_Factory(t) { return new (t || LayoutStateService)(i0.ɵɵinject(i1.DomInsertionService)); };
LayoutStateService.ɵprov = i0.ɵɵdefineInjectable({ token: LayoutStateService, factory: LayoutStateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.DomInsertionService }]; }, null); })();
//# sourceMappingURL=layout-state.service.js.map