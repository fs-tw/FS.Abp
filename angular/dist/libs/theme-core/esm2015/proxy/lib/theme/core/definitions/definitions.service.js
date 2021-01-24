import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class DefinitionsService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createThemeBannerByThemeNoAndInput = (themeNo, input) => this.restService.request({
            method: 'POST',
            url: `/api/theme-core/banner/${themeNo}`,
            body: input,
        }, { apiName: this.apiName });
        this.createThemeMenuByThemeNoAndInput = (themeNo, input) => this.restService.request({
            method: 'POST',
            url: `/api/theme-core/menu/${themeNo}`,
            body: input,
        }, { apiName: this.apiName });
        this.deleteThemeCodeById = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/theme-core/${id}`,
        }, { apiName: this.apiName });
        this.getThemeByThemeNo = (themeNo) => this.restService.request({
            method: 'GET',
            url: `/api/theme-core/${themeNo}`,
        }, { apiName: this.apiName });
        this.getThemeDefinitionChildren = () => this.restService.request({
            method: 'GET',
            url: `/api/theme-core/themeNos`,
        }, { apiName: this.apiName });
        this.putBannersForSortByThemeNoAndInput = (themeNo, input) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/banners-for-sort/${themeNo}`,
            body: input,
        }, { apiName: this.apiName });
        this.putThemeMenuByThemeNoAndInput = (themeNo, input) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/menu/${themeNo}`,
            body: input,
        }, { apiName: this.apiName });
        this.putThemeSettingByThemeNoAndInput = (themeNo, input) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/theme-setting/${themeNo}`,
            body: input,
        }, { apiName: this.apiName });
    }
}
DefinitionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefinitionsService_Factory() { return new DefinitionsService(i0.ɵɵinject(i1.RestService)); }, token: DefinitionsService, providedIn: "root" });
DefinitionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DefinitionsService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=definitions.service.js.map