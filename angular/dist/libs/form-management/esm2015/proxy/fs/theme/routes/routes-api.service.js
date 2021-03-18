import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class RoutesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByRouteDefinitionGetList = (RouteDefinitionGetList) => this.restService.request({
            method: 'GET',
            url: `/api/theme/routes/route-definition`,
            params: { fields: RouteDefinitionGetList.fields, value: RouteDefinitionGetList.value, sorting: RouteDefinitionGetList.sorting, skipCount: RouteDefinitionGetList.skipCount, maxResultCount: RouteDefinitionGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByRouteGetList = (RouteGetList) => this.restService.request({
            method: 'GET',
            url: `/api/theme/routes/route`,
            params: { fields: RouteGetList.fields, value: RouteGetList.value, sorting: RouteGetList.sorting, skipCount: RouteGetList.skipCount, maxResultCount: RouteGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/theme/routes`,
        }, { apiName: this.apiName });
    }
}
RoutesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesApiService_Factory() { return new RoutesApiService(i0.ɵɵinject(i1.RestService)); }, token: RoutesApiService, providedIn: "root" });
RoutesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RoutesApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=routes-api.service.js.map