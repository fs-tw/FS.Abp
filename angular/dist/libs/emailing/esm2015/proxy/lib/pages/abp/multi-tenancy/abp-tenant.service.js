import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class AbpTenantService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.findTenantByIdById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-id/${id}`,
        }, { apiName: this.apiName });
        this.findTenantByNameByName = (name) => this.restService.request({
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${name}`,
        }, { apiName: this.apiName });
    }
}
AbpTenantService.ɵfac = function AbpTenantService_Factory(t) { return new (t || AbpTenantService)(i0.ɵɵinject(i1.RestService)); };
AbpTenantService.ɵprov = i0.ɵɵdefineInjectable({ token: AbpTenantService, factory: AbpTenantService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbpTenantService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=abp-tenant.service.js.map