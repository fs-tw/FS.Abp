import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class RecordsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByRecordGetList = (RecordGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/records/record`,
            params: { fields: RecordGetList.fields, value: RecordGetList.value, sorting: RecordGetList.sorting, skipCount: RecordGetList.skipCount, maxResultCount: RecordGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByRecordItemGetList = (RecordItemGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/records/record-item`,
            params: { fields: RecordItemGetList.fields, value: RecordItemGetList.value, sorting: RecordItemGetList.sorting, skipCount: RecordItemGetList.skipCount, maxResultCount: RecordItemGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/form-management/records`,
        }, { apiName: this.apiName });
    }
}
RecordsApiService.ɵfac = function RecordsApiService_Factory(t) { return new (t || RecordsApiService)(i0.ɵɵinject(i1.RestService)); };
RecordsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: RecordsApiService, factory: RecordsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=records-api.service.js.map