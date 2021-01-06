(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme-core/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['theme-core'] = global['fs-tw']['theme-core'] || {}, global['fs-tw']['theme-core'].proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var FileService = /** @class */ (function () {
        function FileService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.delete = function (name) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/theme-core/file/" + name,
            }, { apiName: _this.apiName }); };
            this.getBase64ByName = function (name) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme-core/file/base64/" + name,
            }, { apiName: _this.apiName }); };
            this.getByName = function (name) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme-core/file/" + name,
            }, { apiName: _this.apiName }); };
            this.put = function (body) { return _this.restService.request({
                method: 'PUT',
                url: "/api/theme-core/file",
                body: body
            }, { apiName: _this.apiName }); };
            this.putByNameAndBase64 = function (name, base64) { return _this.restService.request({
                method: 'PUT',
                url: "/api/theme-core/file/" + name,
                body: base64,
            }, { apiName: _this.apiName }); };
        }
        return FileService;
    }());
    FileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.RestService)); }, token: FileService, providedIn: "root" });
    FileService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FileService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var DefinitionsService = /** @class */ (function () {
        function DefinitionsService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createThemeBannerByThemeNoAndInput = function (themeNo, input) { return _this.restService.request({
                method: 'POST',
                url: "/api/theme-core/banner/" + themeNo,
                body: input,
            }, { apiName: _this.apiName }); };
            this.createThemeMenuByThemeNoAndInput = function (themeNo, input) { return _this.restService.request({
                method: 'POST',
                url: "/api/theme-core/menu/" + themeNo,
                body: input,
            }, { apiName: _this.apiName }); };
            this.deleteThemeCodeById = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/theme-core/" + id,
            }, { apiName: _this.apiName }); };
            this.getThemeByThemeNo = function (themeNo) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme-core/" + themeNo,
            }, { apiName: _this.apiName }); };
            this.getThemeDefinitionChildren = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/theme-core/themeNos",
            }, { apiName: _this.apiName }); };
            this.putBannersForSortByThemeNoAndInput = function (themeNo, input) { return _this.restService.request({
                method: 'PUT',
                url: "/api/theme-core/banners-for-sort/" + themeNo,
                body: input,
            }, { apiName: _this.apiName }); };
            this.putThemeMenuByThemeNoAndInput = function (themeNo, input) { return _this.restService.request({
                method: 'PUT',
                url: "/api/theme-core/menu/" + themeNo,
                body: input,
            }, { apiName: _this.apiName }); };
            this.putThemeSettingByThemeNoAndInput = function (themeNo, input) { return _this.restService.request({
                method: 'PUT',
                url: "/api/theme-core/theme-setting/" + themeNo,
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return DefinitionsService;
    }());
    DefinitionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefinitionsService_Factory() { return new DefinitionsService(i0.ɵɵinject(i1.RestService)); }, token: DefinitionsService, providedIn: "root" });
    DefinitionsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DefinitionsService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    // export * as CodeSettings from './code-settings';

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DefinitionsService = DefinitionsService;
    exports.FileService = FileService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-core-proxy.umd.js.map
