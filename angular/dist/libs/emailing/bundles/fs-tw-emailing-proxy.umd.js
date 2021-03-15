(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/emailing/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].emailing = global['fs-tw'].emailing || {}, global['fs-tw'].emailing.proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var EmailingApiService = /** @class */ (function () {
        function EmailingApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getByEmailSettingsGet = function (EmailSettingsGet) { return _this.restService.request({
                method: 'GET',
                url: "/api/abp/emailing/email-settings",
                params: { providerName: EmailSettingsGet.providerName, providerKey: EmailSettingsGet.providerKey },
            }, { apiName: _this.apiName }); };
            this.updateByEmailSettingsAndProviderNameAndProviderKey = function (EmailSettings, providerName, providerKey) { return _this.restService.request({
                method: 'PUT',
                url: "/api/abp/emailing/email-settings",
                params: { providerName: providerName, providerKey: providerKey },
                body: EmailSettings,
            }, { apiName: _this.apiName }); };
        }
        return EmailingApiService;
    }());
    EmailingApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmailingApiService_Factory() { return new EmailingApiService(i0.ɵɵinject(i1.RestService)); }, token: EmailingApiService, providedIn: "root" });
    EmailingApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    EmailingApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$g = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$h,
        EmailingApiService: EmailingApiService
    });

    var index$f = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Emailing: index$g
    });

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$f
    });

    var AbpTenantService = /** @class */ (function () {
        function AbpTenantService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.findTenantByIdById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/abp/multi-tenancy/tenants/by-id/" + id,
            }, { apiName: _this.apiName }); };
            this.findTenantByNameByName = function (name) { return _this.restService.request({
                method: 'GET',
                url: "/api/abp/multi-tenancy/tenants/by-name/" + name,
            }, { apiName: _this.apiName }); };
        }
        return AbpTenantService;
    }());
    AbpTenantService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AbpTenantService_Factory() { return new AbpTenantService(i0.ɵɵinject(i1.RestService)); }, token: AbpTenantService, providedIn: "root" });
    AbpTenantService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AbpTenantService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$d = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AbpTenantService: AbpTenantService
    });

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MultiTenancy: index$d
    });

    var index$b = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$c
    });

    var AbpApiDefinitionService = /** @class */ (function () {
        function AbpApiDefinitionService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getByModel = function (model) { return _this.restService.request({
                method: 'GET',
                url: "/api/abp/api-definition",
                params: { includeTypes: model.includeTypes },
            }, { apiName: _this.apiName }); };
        }
        return AbpApiDefinitionService;
    }());
    AbpApiDefinitionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AbpApiDefinitionService_Factory() { return new AbpApiDefinitionService(i0.ɵɵinject(i1.RestService)); }, token: AbpApiDefinitionService, providedIn: "root" });
    AbpApiDefinitionService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AbpApiDefinitionService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AbpApiDefinitionService: AbpApiDefinitionService
    });

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var AbpApplicationConfigurationService = /** @class */ (function () {
        function AbpApplicationConfigurationService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.get = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/abp/application-configuration",
            }, { apiName: _this.apiName }); };
        }
        return AbpApplicationConfigurationService;
    }());
    AbpApplicationConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AbpApplicationConfigurationService_Factory() { return new AbpApplicationConfigurationService(i0.ɵɵinject(i1.RestService)); }, token: AbpApplicationConfigurationService, providedIn: "root" });
    AbpApplicationConfigurationService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    AbpApplicationConfigurationService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ObjectExtending: index$9,
        AbpApplicationConfigurationService: AbpApplicationConfigurationService
    });

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ApiExploring: index$a,
        ApplicationConfigurations: index$8,
        MultiTenancy: index$7
    });

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Mvc: index$6
    });

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Modeling: index$4
    });

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AspNetCore: index$5,
        Http: index$3,
        Localization: index$2
    });

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$1
    });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Fs = index$e;
    exports.Pages = index$b;
    exports.Volo = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-emailing-proxy.umd.js.map
