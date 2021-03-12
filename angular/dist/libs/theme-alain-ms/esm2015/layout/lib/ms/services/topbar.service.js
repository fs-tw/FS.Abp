import { Injectable } from '@angular/core';
// import { I18NService } from '@core';
import { _HttpClient } from '@delon/theme';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
/**
 * 顶部菜单所有数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/topbar-en-US.json`
 * - 最终处理数据以 `topbar.interface.ts` 系列接口为准
 */
export class MSTopbarService {
    constructor(http) {
        this.http = http;
    }
    get data() {
        return this._data;
    }
    get messages() {
        return this._data.messagess;
    }
    getData() {
        return this._data ? of(this._data) : this.getByHttp();
    }
    getNav(key) {
        return this._data.navLinks[key] || {};
    }
    getByHttp() {
        return this.http.get(`./assets/tmp/topbar-zh-TW.json`).pipe(tap((res) => {
            this._data = res;
        }));
    }
}
MSTopbarService.ɵfac = function MSTopbarService_Factory(t) { return new (t || MSTopbarService)(i0.ɵɵinject(i1._HttpClient)); };
MSTopbarService.ɵprov = i0.ɵɵdefineInjectable({ token: MSTopbarService, factory: MSTopbarService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSTopbarService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1._HttpClient }]; }, null); })();
//# sourceMappingURL=topbar.service.js.map