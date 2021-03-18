import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class BannersApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByBannerDefinitionGetList = (BannerDefinitionGetList) => this.restService.request({
            method: 'GET',
            url: `/api/theme/banners/banner-definition`,
            params: { fields: BannerDefinitionGetList.fields, value: BannerDefinitionGetList.value, sorting: BannerDefinitionGetList.sorting, skipCount: BannerDefinitionGetList.skipCount, maxResultCount: BannerDefinitionGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByBannerGetList = (BannerGetList) => this.restService.request({
            method: 'GET',
            url: `/api/theme/banners/banner`,
            params: { fields: BannerGetList.fields, value: BannerGetList.value, sorting: BannerGetList.sorting, skipCount: BannerGetList.skipCount, maxResultCount: BannerGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/theme/banners`,
        }, { apiName: this.apiName });
    }
}
BannersApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BannersApiService_Factory() { return new BannersApiService(i0.ɵɵinject(i1.RestService)); }, token: BannersApiService, providedIn: "root" });
BannersApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
BannersApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=banners-api.service.js.map