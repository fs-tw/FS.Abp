import { Injectable } from '@angular/core';
import { deepCopy } from '@delon/util';
import { tap } from 'rxjs/operators';
import { LayoutStateService } from '../../services/layout-state.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/layout-state.service";
export class MSProductService {
    constructor(layoutSateService) {
        this.layoutSateService = layoutSateService;
    }
    get data() {
        return this._data;
    }
    get i18n() {
        return {
            showAll: true,
            keywords: '請輸入關鍵詞',
            allProduct: '查詢全部産品',
            show: true,
            hasResult: '以下是與“<strong>{filterTxt}</strong>”相關的産品：',
            noResult: '未找到與“<strong>{filterTxt}</strong>”相關的産品。',
            text: '産品與服務',
            recent: '最近訪問',
        };
    }
    getData() {
        return this.layoutSateService.getCategories$().pipe(tap((x) => {
            this._data = x;
        }));
    }
    search(q) {
        const column = 3;
        const list = [[], [], []];
        // Process search key
        let oldList = deepCopy(this._data);
        if (q) {
            oldList = oldList.map((p) => {
                var _a;
                p.products = (_a = p.products) === null || _a === void 0 ? void 0 : _a.filter((w) => {
                    return w.name.includes(q) || w.id.includes(q);
                });
                return p;
            });
        }
        // Clean empty children category
        const categories = [];
        let MockID = 0;
        oldList
            .filter((w) => w.products.length > 0)
            .forEach((i, idx) => {
            i._id = ++MockID;
            list[idx % column].push(i);
            // Collecting category data
            if (categories.findIndex((w) => w.name === i.name) === -1) {
                categories.push({ _id: i._id, name: i.name });
            }
        });
        return { list, categories };
    }
}
MSProductService.ɵfac = function MSProductService_Factory(t) { return new (t || MSProductService)(i0.ɵɵinject(i1.LayoutStateService)); };
MSProductService.ɵprov = i0.ɵɵdefineInjectable({ token: MSProductService, factory: MSProductService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MSProductService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.LayoutStateService }]; }, null); })();
//# sourceMappingURL=product.service.js.map