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
SampleService.ɵfac = function SampleService_Factory(t) { return new (t || SampleService)(i0.ɵɵinject(i1.RestService)); };
SampleService.ɵprov = i0.ɵɵdefineInjectable({ token: SampleService, factory: SampleService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SampleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=sample.service.js.map