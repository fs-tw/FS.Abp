import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { SettingsService } from '@delon/theme';
//import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@delon/theme";
/**
 * 用于维护布局数据
 */
export class BrandService {
    // #endregion
    constructor(bm, settings) {
        this.settings = settings;
        this.notify$ = new BehaviorSubject(null);
        this._isMobile = false;
        /** 顶部高度，若变更需要同时重新指定 LESS 变量：`@alain-ms-topbar-height` 值 */
        this.topHeight = 50;
        this.hideNav = false;
        // fix layout data
        settings.setLayout(Object.assign(Object.assign({}, settings.layout), { hasTopbar: true, hasSidebar: false, hasFixed: false }));
        const mobileMedia = 'only screen and (max-width: 767.99px)';
        bm.observe(mobileMedia).subscribe((state) => this.checkMedia(state.matches));
        this.checkMedia(bm.isMatched(mobileMedia));
    }
    // #region fields
    get notify() {
        return this.notify$.asObservable();
    }
    get isMobile() {
        return this._isMobile;
    }
    get layout() {
        return this.settings.layout;
    }
    checkMedia(value) {
        this._isMobile = value;
        this.layout.collapsed = this._isMobile;
        this.notify$.next('mobile');
    }
    setLayout(name, value) {
        this.settings.setLayout(name, value);
        this.notify$.next('layout');
    }
    setTopbar(status) {
        this.setLayout('hasTopbar', status);
    }
    setSidebar(status) {
        this.setLayout('hasSidebar', status);
    }
    setFixed(status) {
        this.setLayout('hasFixed', status);
    }
    triggerNotify(type = 'custom') {
        this.notify$.next(type);
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
BrandService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BrandService_Factory() { return new BrandService(i0.ɵɵinject(i1.BreakpointObserver), i0.ɵɵinject(i2.SettingsService)); }, token: BrandService, providedIn: "root" });
BrandService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
BrandService.ctorParameters = () => [
    { type: BreakpointObserver },
    { type: SettingsService }
];
//# sourceMappingURL=ms.service.js.map