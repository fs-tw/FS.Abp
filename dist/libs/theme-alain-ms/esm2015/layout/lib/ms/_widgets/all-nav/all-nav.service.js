import { Injectable } from '@angular/core';
// import { I18NService } from '@core';
import { _HttpClient } from '@delon/theme';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArrayService } from '@delon/util';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@delon/util";
/**
 * 顶部菜单所有菜单数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/all-nav-en-US.json`
 * - 最终处理数据以 `all-nav.interface.ts` 系列接口为准
 */
export class MSAllNavService {
    constructor(http, arrSrv) {
        this.http = http;
        this.arrSrv = arrSrv;
    }
    get allL2() {
        return this._data.nav.filter((w) => w.children && w.children.length > 0);
    }
    get allPanel() {
        return this._data.nav.reduce((p, c) => (p = p.concat(c.children ? c.children : c)), []);
    }
    getData() {
        return this._data ? of(this._data) : this.getByHttp();
    }
    fixData(data) {
        const splitColumn = (item) => {
            if (!item.left) {
                return;
            }
            item.leftColumn = item.leftColumn || 4;
            const columns = new Array(item.leftColumn).fill({}).map((_, idx) => ({
                list: [],
                count: 0,
                idx,
            }));
            item.left
                .filter((w) => w.list)
                .forEach((category) => {
                const idx = [...columns].sort((a, b) => a.count - b.count)[0].idx;
                columns[idx].list.push(category);
                columns[idx].count += category.list.length;
            });
            item._left = columns;
        };
        data.nav.forEach((p1) => {
            p1.level = 1;
            if (p1.children) {
                p1.children.forEach((p2) => {
                    p2.parent = p1;
                    p2.level = 2;
                    splitColumn(p2);
                });
            }
            else {
                splitColumn(p1);
            }
        });
        return data;
    }
    getByHttp() {
        return this.http.get(`./assets/tmp/all-nav-zh-TW.json`).pipe(map((res) => {
            this._data = this.fixData(res);
            return this._data;
        }));
    }
    refreshActive(i) {
        this.arrSrv.visitTree(this._data.nav, (item) => {
            item.active = false;
        });
        while (i) {
            i.active = true;
            i = i.parent;
        }
    }
}
MSAllNavService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSAllNavService_Factory() { return new MSAllNavService(i0.ɵɵinject(i1._HttpClient), i0.ɵɵinject(i2.ArrayService)); }, token: MSAllNavService, providedIn: "root" });
MSAllNavService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSAllNavService.ctorParameters = () => [
    { type: _HttpClient },
    { type: ArrayService }
];
//# sourceMappingURL=all-nav.service.js.map