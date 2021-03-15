import { Injectable } from '@angular/core';
// import { I18NService } from '@core';
import { _HttpClient } from '@delon/theme';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
export class MSRegionService {
    constructor(http) {
        this.http = http;
    }
    get platList() {
        return this._data.reduce((p, c) => p.concat(c.list), []);
    }
    get item() {
        return this.platList.find((w) => w.selected);
    }
    get list() {
        return this._data;
    }
    getByHttp() {
        return this.http.get(`/region`).pipe(tap((list) => {
            //const zone = this.i18nSrv.zone;
            //const key = `${list[0][`${zone}Name`] ? zone : 'cn'}Name`;
            // const res = list.reduce((p: MSRegionDistrict[], c) => {
            //   const districtName = `district_${key}`;
            //   let item = p.find((w) => w.name === c[districtName]);
            //   if (!item) {
            //     item = { name: c[districtName], list: [] };
            //     p.push(item);
            //   }
            //   item.list?.push({ id: c.id, country: c.country, name: c[key], selected: c.id === 'cn-shanghai' });
            //   return p;
            // }, []);
            // this._data = res;
        }));
    }
    getData() {
        return this._data ? of(null) : this.getByHttp();
    }
    setSelected(item) {
        this.platList.find((w) => w.selected).selected = false;
        item.selected = true;
    }
}
MSRegionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MSRegionService_Factory() { return new MSRegionService(i0.ɵɵinject(i1._HttpClient)); }, token: MSRegionService, providedIn: "root" });
MSRegionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MSRegionService.ctorParameters = () => [
    { type: _HttpClient }
];
//# sourceMappingURL=region.service.js.map