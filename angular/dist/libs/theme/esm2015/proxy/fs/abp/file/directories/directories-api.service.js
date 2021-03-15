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
DirectoriesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectoriesApiService_Factory() { return new DirectoriesApiService(i0.ɵɵinject(i1.RestService)); }, token: DirectoriesApiService, providedIn: "root" });
DirectoriesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DirectoriesApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=directories-api.service.js.map