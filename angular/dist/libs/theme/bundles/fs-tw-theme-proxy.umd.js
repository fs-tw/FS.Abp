(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].theme = global['fs-tw'].theme || {}, global['fs-tw'].theme.proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

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

    var DirectoriesApiService = /** @class */ (function () {
        function DirectoriesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.findByProviderByKeyAndGroup = function (key, group) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/provider/" + key,
                params: { group: group },
            }, { apiName: _this.apiName }); };
            this.getDefinitions = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/definitions",
            }, { apiName: _this.apiName }); };
        }
        return DirectoriesApiService;
    }());
    DirectoriesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectoriesApiService_Factory() { return new DirectoriesApiService(i0.ɵɵinject(i1.RestService)); }, token: DirectoriesApiService, providedIn: "root" });
    DirectoriesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DirectoriesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$2,
        DirectoriesApiService: DirectoriesApiService
    });

    var FilesApiService = /** @class */ (function () {
        function FilesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getContentById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/file-content",
                params: { id: id },
            }, { apiName: _this.apiName }); };
        }
        return FilesApiService;
    }());
    FilesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FilesApiService_Factory() { return new FilesApiService(i0.ɵɵinject(i1.RestService)); }, token: FilesApiService, providedIn: "root" });
    FilesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FilesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

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

    var BannersApiService = /** @class */ (function () {
        function BannersApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByBannerDefinitionGetList = function (BannerDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/banners/banner-definition",
                params: { fields: BannerDefinitionGetList.fields, value: BannerDefinitionGetList.value, sorting: BannerDefinitionGetList.sorting, skipCount: BannerDefinitionGetList.skipCount, maxResultCount: BannerDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByBannerGetList = function (BannerGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/banners/banner",
                params: { fields: BannerGetList.fields, value: BannerGetList.value, sorting: BannerGetList.sorting, skipCount: BannerGetList.skipCount, maxResultCount: BannerGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/theme/banners",
            }, { apiName: _this.apiName }); };
        }
        return BannersApiService;
    }());
    BannersApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BannersApiService_Factory() { return new BannersApiService(i0.ɵɵinject(i1.RestService)); }, token: BannersApiService, providedIn: "root" });
    BannersApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    BannersApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$7,
        BannersApiService: BannersApiService
    });

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var RoutesApiService = /** @class */ (function () {
        function RoutesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByRouteDefinitionGetList = function (RouteDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/routes/route-definition",
                params: { fields: RouteDefinitionGetList.fields, value: RouteDefinitionGetList.value, sorting: RouteDefinitionGetList.sorting, skipCount: RouteDefinitionGetList.skipCount, maxResultCount: RouteDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByRouteGetList = function (RouteGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/routes/route",
                params: { fields: RouteGetList.fields, value: RouteGetList.value, sorting: RouteGetList.sorting, skipCount: RouteGetList.skipCount, maxResultCount: RouteGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/theme/routes",
            }, { apiName: _this.apiName }); };
        }
        return RoutesApiService;
    }());
    RoutesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesApiService_Factory() { return new RoutesApiService(i0.ɵɵinject(i1.RestService)); }, token: RoutesApiService, providedIn: "root" });
    RoutesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    RoutesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$9,
        RoutesApiService: RoutesApiService
    });

    var index$b = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var WebSitesApiService = /** @class */ (function () {
        function WebSitesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByWebSiteDefinitionGetList = function (WebSiteDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/web-sites/web-site-definition",
                params: { fields: WebSiteDefinitionGetList.fields, value: WebSiteDefinitionGetList.value, sorting: WebSiteDefinitionGetList.sorting, skipCount: WebSiteDefinitionGetList.skipCount, maxResultCount: WebSiteDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/theme/web-sites",
            }, { apiName: _this.apiName }); };
        }
        return WebSitesApiService;
    }());
    WebSitesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function WebSitesApiService_Factory() { return new WebSitesApiService(i0.ɵɵinject(i1.RestService)); }, token: WebSitesApiService, providedIn: "root" });
    WebSitesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    WebSitesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

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

    var DirectoryDescriptorService = /** @class */ (function () {
        function DirectoryDescriptorService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'FileManagement';
            this.createByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/directory-descriptor",
                body: input,
            }, { apiName: _this.apiName }); };
            this.deleteById = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/file-management/directory-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.getById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.getContentByInput = function (input) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor",
                params: { filter: input.filter, sorting: input.sorting, id: input.id },
            }, { apiName: _this.apiName }); };
            this.getListByParentId = function (parentId) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/sub-directories",
                params: { parentId: parentId },
            }, { apiName: _this.apiName }); };
            this.moveByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/directory-descriptor/move",
                body: input,
            }, { apiName: _this.apiName }); };
            this.renameByIdAndInput = function (id, input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/directory-descriptor/" + id,
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return DirectoryDescriptorService;
    }());
    DirectoryDescriptorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectoryDescriptorService_Factory() { return new DirectoryDescriptorService(i0.ɵɵinject(i1.RestService)); }, token: DirectoryDescriptorService, providedIn: "root" });
    DirectoryDescriptorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DirectoryDescriptorService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$k = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DirectoryDescriptorService: DirectoryDescriptorService
    });

    var FileDescriptorService = /** @class */ (function () {
        function FileDescriptorService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'FileManagement';
            this.createByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor",
                body: input,
            }, { apiName: _this.apiName }); };
            this.deleteById = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/file-management/file-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.downloadById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/download/" + id,
            }, { apiName: _this.apiName }); };
            this.getById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.getContentById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/content",
                params: { id: id },
            }, { apiName: _this.apiName }); };
            this.getListByDirectoryId = function (directoryId) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor",
                params: { directoryId: directoryId },
            }, { apiName: _this.apiName }); };
            this.getPreInfoByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/pre-upload-info",
                body: input,
            }, { apiName: _this.apiName }); };
            this.moveByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/move",
                body: input,
            }, { apiName: _this.apiName }); };
            this.renameByIdAndInput = function (id, input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/" + id,
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return FileDescriptorService;
    }());
    FileDescriptorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileDescriptorService_Factory() { return new FileDescriptorService(i0.ɵɵinject(i1.RestService)); }, token: FileDescriptorService, providedIn: "root" });
    FileDescriptorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FileDescriptorService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var FileIconType;
    (function (FileIconType) {
        FileIconType[FileIconType["FontAwesome"] = 0] = "FontAwesome";
        FileIconType[FileIconType["Url"] = 1] = "Url";
    })(FileIconType || (FileIconType = {}));
    var fileIconTypeOptions = i1.mapEnumToOptions(FileIconType);

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

    exports.Fs = index$e;
    exports.Microsoft = index$h;
    exports.Volo = index$n;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-proxy.umd.js.map
