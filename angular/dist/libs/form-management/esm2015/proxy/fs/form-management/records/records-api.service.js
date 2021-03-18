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
RecordsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RecordsApiService_Factory() { return new RecordsApiService(i0.ɵɵinject(i1.RestService)); }, token: RecordsApiService, providedIn: "root" });
RecordsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RecordsApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=records-api.service.js.map