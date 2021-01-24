import { RestService } from '@abp/ng.core';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';

class FileService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.delete = (name) => this.restService.request({
            method: 'DELETE',
            url: `/api/theme-core/file/${name}`,
        }, { apiName: this.apiName });
        this.getBase64ByName = (name) => this.restService.request({
            method: 'GET',
            url: `/api/theme-core/file/base64/${name}`,
        }, { apiName: this.apiName });
        this.getByName = (name) => this.restService.request({
            method: 'GET',
            url: `/api/theme-core/file/${name}`,
        }, { apiName: this.apiName });
        this.put = (body) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/file`,
            body
        }, { apiName: this.apiName });
        this.putByNameAndBase64 = (name, base64) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/file/${name}`,
            body: base64,
        }, { apiName: this.apiName });
    }
}
FileService.ɵprov = ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(ɵɵinject(RestService)); }, token: FileService, providedIn: "root" });
FileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FileService.ctorParameters = () => [
    { type: RestService }
];

class DefinitionsService {
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
DefinitionsService.ɵprov = ɵɵdefineInjectable({ factory: function DefinitionsService_Factory() { return new DefinitionsService(ɵɵinject(RestService)); }, token: DefinitionsService, providedIn: "root" });
DefinitionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DefinitionsService.ctorParameters = () => [
    { type: RestService }
];

// export * as CodeSettings from './code-settings';

/**
 * Generated bundle index. Do not edit.
 */

export { DefinitionsService, FileService };
//# sourceMappingURL=fs-tw-theme-core-proxy.js.map
