import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class DirectoriesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.findByProviderByKeyAndGroup = (key, group) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/provider/${key}`,
            params: { group: group },
        }, { apiName: this.apiName });
        this.getDefinitions = () => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/definitions`,
        }, { apiName: this.apiName });
    }
}
DirectoriesApiService.ɵfac = function DirectoriesApiService_Factory(t) { return new (t || DirectoriesApiService)(i0.ɵɵinject(i1.RestService)); };
DirectoriesApiService.ɵprov = i0.ɵɵdefineInjectable({ token: DirectoriesApiService, factory: DirectoriesApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectoriesApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=directories-api.service.js.map