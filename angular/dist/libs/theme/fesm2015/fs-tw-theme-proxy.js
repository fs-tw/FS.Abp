import { RestService, mapEnumToOptions } from '@abp/ng.core';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';

var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index
});

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class DirectoriesApiService {
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
DirectoriesApiService.ɵprov = ɵɵdefineInjectable({ factory: function DirectoriesApiService_Factory() { return new DirectoriesApiService(ɵɵinject(RestService)); }, token: DirectoriesApiService, providedIn: "root" });
DirectoriesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DirectoriesApiService.ctorParameters = () => [
    { type: RestService }
];

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$2,
    DirectoriesApiService: DirectoriesApiService
});

class FilesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getContentById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/file-content`,
            params: { id: id },
        }, { apiName: this.apiName });
    }
}
FilesApiService.ɵprov = ɵɵdefineInjectable({ factory: function FilesApiService_Factory() { return new FilesApiService(ɵɵinject(RestService)); }, token: FilesApiService, providedIn: "root" });
FilesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FilesApiService.ctorParameters = () => [
    { type: RestService }
];

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FilesApiService: FilesApiService
});

var index$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Directories: index$3,
    Files: index$4
});

var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Application: index$1,
    File: index$5
});

var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class BannersApiService {
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
BannersApiService.ɵprov = ɵɵdefineInjectable({ factory: function BannersApiService_Factory() { return new BannersApiService(ɵɵinject(RestService)); }, token: BannersApiService, providedIn: "root" });
BannersApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
BannersApiService.ctorParameters = () => [
    { type: RestService }
];

var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$7,
    BannersApiService: BannersApiService
});

var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class RoutesApiService {
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
RoutesApiService.ɵprov = ɵɵdefineInjectable({ factory: function RoutesApiService_Factory() { return new RoutesApiService(ɵɵinject(RestService)); }, token: RoutesApiService, providedIn: "root" });
RoutesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RoutesApiService.ctorParameters = () => [
    { type: RestService }
];

var index$a = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$9,
    RoutesApiService: RoutesApiService
});

var index$b = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class WebSitesApiService {
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
WebSitesApiService.ɵprov = ɵɵdefineInjectable({ factory: function WebSitesApiService_Factory() { return new WebSitesApiService(ɵɵinject(RestService)); }, token: WebSitesApiService, providedIn: "root" });
WebSitesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
WebSitesApiService.ctorParameters = () => [
    { type: RestService }
];

var index$c = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$b,
    WebSitesApiService: WebSitesApiService
});

var index$d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Banners: index$8,
    Routes: index$a,
    WebSites: index$c
});

var index$e = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abp: index$6,
    Theme: index$d
});

var index$f = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$g = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Mvc: index$f
});

var index$h = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AspNetCore: index$g
});

var index$i = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$j = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Content: index$i
});

class DirectoryDescriptorService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'FileManagement';
        this.createByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/directory-descriptor`,
            body: input,
        }, { apiName: this.apiName });
        this.deleteById = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/file-management/directory-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.getById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.getContentByInput = (input) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor`,
            params: { filter: input.filter, sorting: input.sorting, id: input.id },
        }, { apiName: this.apiName });
        this.getListByParentId = (parentId) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/sub-directories`,
            params: { parentId: parentId },
        }, { apiName: this.apiName });
        this.moveByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/directory-descriptor/move`,
            body: input,
        }, { apiName: this.apiName });
        this.renameByIdAndInput = (id, input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/directory-descriptor/${id}`,
            body: input,
        }, { apiName: this.apiName });
    }
}
DirectoryDescriptorService.ɵprov = ɵɵdefineInjectable({ factory: function DirectoryDescriptorService_Factory() { return new DirectoryDescriptorService(ɵɵinject(RestService)); }, token: DirectoryDescriptorService, providedIn: "root" });
DirectoryDescriptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DirectoryDescriptorService.ctorParameters = () => [
    { type: RestService }
];

var index$k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DirectoryDescriptorService: DirectoryDescriptorService
});

class FileDescriptorService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'FileManagement';
        this.createByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor`,
            body: input,
        }, { apiName: this.apiName });
        this.deleteById = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/file-management/file-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.downloadById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/download/${id}`,
        }, { apiName: this.apiName });
        this.getById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.getContentById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/content`,
            params: { id: id },
        }, { apiName: this.apiName });
        this.getListByDirectoryId = (directoryId) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor`,
            params: { directoryId: directoryId },
        }, { apiName: this.apiName });
        this.getPreInfoByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/pre-upload-info`,
            body: input,
        }, { apiName: this.apiName });
        this.moveByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/move`,
            body: input,
        }, { apiName: this.apiName });
        this.renameByIdAndInput = (id, input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/${id}`,
            body: input,
        }, { apiName: this.apiName });
    }
}
FileDescriptorService.ɵprov = ɵɵdefineInjectable({ factory: function FileDescriptorService_Factory() { return new FileDescriptorService(ɵɵinject(RestService)); }, token: FileDescriptorService, providedIn: "root" });
FileDescriptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FileDescriptorService.ctorParameters = () => [
    { type: RestService }
];

var FileIconType;
(function (FileIconType) {
    FileIconType[FileIconType["FontAwesome"] = 0] = "FontAwesome";
    FileIconType[FileIconType["Url"] = 1] = "Url";
})(FileIconType || (FileIconType = {}));
const fileIconTypeOptions = mapEnumToOptions(FileIconType);

var index$l = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FileDescriptorService: FileDescriptorService,
    get FileIconType () { return FileIconType; },
    fileIconTypeOptions: fileIconTypeOptions
});

var index$m = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Directories: index$k,
    Files: index$l
});

var index$n = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abp: index$j,
    FileManagement: index$m
});

/**
 * Generated bundle index. Do not edit.
 */

export { index$e as Fs, index$h as Microsoft, index$n as Volo };
//# sourceMappingURL=fs-tw-theme-proxy.js.map
