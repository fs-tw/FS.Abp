import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class WebSitesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByWebSiteDefinitionGetList = (WebSiteDefinitionGetList) => this.restService.request({
            method: 'GET',
            url: `/api/theme/web-sites/web-site-definition`,
            params: { fields: WebSiteDefinitionGetList.fields, value: WebSiteDefinitionGetList.value, sorting: WebSiteDefinitionGetList.sorting, skipCount: WebSiteDefinitionGetList.skipCount, maxResultCount: WebSiteDefinitionGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/theme/web-sites`,
        }, { apiName: this.apiName });
    }
}
WebSitesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function WebSitesApiService_Factory() { return new WebSitesApiService(i0.ɵɵinject(i1.RestService)); }, token: WebSitesApiService, providedIn: "root" });
WebSitesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
WebSitesApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=web-sites-api.service.js.map