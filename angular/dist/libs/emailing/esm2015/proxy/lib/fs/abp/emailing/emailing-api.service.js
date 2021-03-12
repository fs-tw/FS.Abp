import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class EmailingApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getByEmailSettingsGet = (EmailSettingsGet) => this.restService.request({
            method: 'GET',
            url: `/api/abp/emailing/email-settings`,
            params: { providerName: EmailSettingsGet.providerName, providerKey: EmailSettingsGet.providerKey },
        }, { apiName: this.apiName });
        this.updateByEmailSettingsAndProviderNameAndProviderKey = (EmailSettings, providerName, providerKey) => this.restService.request({
            method: 'PUT',
            url: `/api/abp/emailing/email-settings`,
            params: { providerName: providerName, providerKey: providerKey },
            body: EmailSettings,
        }, { apiName: this.apiName });
    }
}
EmailingApiService.ɵfac = function EmailingApiService_Factory(t) { return new (t || EmailingApiService)(i0.ɵɵinject(i1.RestService)); };
EmailingApiService.ɵprov = i0.ɵɵdefineInjectable({ token: EmailingApiService, factory: EmailingApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailingApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=emailing-api.service.js.map