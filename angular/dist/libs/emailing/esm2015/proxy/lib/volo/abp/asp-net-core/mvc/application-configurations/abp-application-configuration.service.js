import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class AbpApplicationConfigurationService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.get = () => this.restService.request({
            method: 'GET',
            url: `/api/abp/application-configuration`,
        }, { apiName: this.apiName });
    }
}
AbpApplicationConfigurationService.ɵfac = function AbpApplicationConfigurationService_Factory(t) { return new (t || AbpApplicationConfigurationService)(i0.ɵɵinject(i1.RestService)); };
AbpApplicationConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ token: AbpApplicationConfigurationService, factory: AbpApplicationConfigurationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbpApplicationConfigurationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=abp-application-configuration.service.js.map