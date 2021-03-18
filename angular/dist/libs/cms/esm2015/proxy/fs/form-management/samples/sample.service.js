import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class SampleService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.get = () => this.restService.request({
            method: 'GET',
            url: `/api/FormManagement/sample`,
        }, { apiName: this.apiName });
        this.getAuthorized = () => this.restService.request({
            method: 'GET',
            url: `/api/FormManagement/sample/authorized`,
        }, { apiName: this.apiName });
    }
}
SampleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SampleService_Factory() { return new SampleService(i0.ɵɵinject(i1.RestService)); }, token: SampleService, providedIn: "root" });
SampleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SampleService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=sample.service.js.map