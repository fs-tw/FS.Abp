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
AbpTenantService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AbpTenantService_Factory() { return new AbpTenantService(i0.ɵɵinject(i1.RestService)); }, token: AbpTenantService, providedIn: "root" });
AbpTenantService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AbpTenantService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=abp-tenant.service.js.map