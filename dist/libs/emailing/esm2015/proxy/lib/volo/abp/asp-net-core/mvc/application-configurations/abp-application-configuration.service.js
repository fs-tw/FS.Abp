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
AbpApplicationConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AbpApplicationConfigurationService_Factory() { return new AbpApplicationConfigurationService(i0.ɵɵinject(i1.RestService)); }, token: AbpApplicationConfigurationService, providedIn: "root" });
AbpApplicationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AbpApplicationConfigurationService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=abp-application-configuration.service.js.map