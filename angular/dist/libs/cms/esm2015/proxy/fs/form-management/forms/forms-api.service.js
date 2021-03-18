import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class FormsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByFormalGetList = (FormalGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/forms/formal`,
            params: { fields: FormalGetList.fields, value: FormalGetList.value, sorting: FormalGetList.sorting, skipCount: FormalGetList.skipCount, maxResultCount: FormalGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByGroupGetList = (GroupGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/forms/group`,
            params: { fields: GroupGetList.fields, value: GroupGetList.value, sorting: GroupGetList.sorting, skipCount: GroupGetList.skipCount, maxResultCount: GroupGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByItemGetList = (ItemGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/forms/item`,
            params: { fields: ItemGetList.fields, value: ItemGetList.value, sorting: ItemGetList.sorting, skipCount: ItemGetList.skipCount, maxResultCount: ItemGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/form-management/forms`,
        }, { apiName: this.apiName });
    }
}
FormsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FormsApiService_Factory() { return new FormsApiService(i0.ɵɵinject(i1.RestService)); }, token: FormsApiService, providedIn: "root" });
FormsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FormsApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=forms-api.service.js.map