import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class AccountService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpAccount';
    }
    findTenant(tenantName) {
        const request = {
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${tenantName}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    register(body) {
        const request = {
            method: 'POST',
            url: '/api/account/register',
            body,
        };
        return this.rest.request(request, {
            skipHandleError: true,
            apiName: this.apiName,
        });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(i0.ɵɵinject(i1.RestService)); };
AccountService.ɵprov = i0.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=account.service.js.map