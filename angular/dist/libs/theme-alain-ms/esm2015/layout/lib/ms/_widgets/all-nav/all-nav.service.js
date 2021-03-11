import { Injectable } from '@angular/core';
// import { I18NService } from '@core';
import { _HttpClient } from '@delon/theme';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArrayService } from '@delon/util';
import { RoutesService, LocalizationPipe } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@delon/theme";
import * as i3 from "@delon/util/array";
/**
 * 顶部菜单所有菜单数据，几个注意点：
 * - 当前处理的数据源格式为 `./assets/tmp/all-nav-en-US.json`
 * - 最终处理数据以 `all-nav.interface.ts` 系列接口为准
 */
export class MSAllNavService {
    constructor(routesService, localizationPipe, http, arrSrv //  @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService
    ) {
        this.routesService = routesService;
        this.localizationPipe = localizationPipe;
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
            item.leftColumn = item.leftColumn || 2;
            const columns = new Array(item.leftColumn)
                .fill({})
                .map((_, idx) => ({
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
        return this.routesService.tree$.pipe(map((r) => {
            let result = {
                navBottom: [],
                bottomText: 'Further.',
                nav: [],
            };
            result.nav = r
                .filter((x) => !this.routesService.hide(x))
                .map((x) => {
                let allNav = {
                    text: this.localizationPipe.transform(x.name),
                    left: [],
                };
                x.children
                    .filter((y) => !this.routesService.hide(y))
                    .forEach((y) => {
                    var _a;
                    if (((_a = y === null || y === void 0 ? void 0 : y.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        allNav.left.push({
                            text: this.localizationPipe.transform(y.name),
                            list: y.children.map((z) => {
                                return {
                                    text: this.localizationPipe.transform(z.name),
                                    link: z.path,
                                };
                            }),
                        });
                    }
                    else {
                        result.navBottom.push({
                            text: this.localizationPipe.transform(y.name),
                            link: y.path,
                        });
                    }
                });
                return allNav;
            });
            this._data = this.fixData(result);
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
MSAllNavService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSAllNavService_Factory() { return new MSAllNavService(i0.ɵɵinject(i1.RoutesService), i0.ɵɵinject(i1.LocalizationPipe), i0.ɵɵinject(i2._HttpClient), i0.ɵɵinject(i3.ArrayService)); }, token: MSAllNavService, providedIn: "root" });
MSAllNavService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSAllNavService.ctorParameters = () => [
    { type: RoutesService },
    { type: LocalizationPipe },
    { type: _HttpClient },
    { type: ArrayService }
];
//# sourceMappingURL=all-nav.service.js.map