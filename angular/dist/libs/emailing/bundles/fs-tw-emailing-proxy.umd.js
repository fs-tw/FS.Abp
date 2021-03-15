(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/emailing/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].emailing = global['fs-tw'].emailing || {}, global['fs-tw'].emailing.proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var index = /*#__PURE__*/Object.freeze({
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

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index,
        EmailingApiService: EmailingApiService
    });

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Emailing: index$1
    });

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$2
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

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AbpTenantService: AbpTenantService
    });

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MultiTenancy: index$4
    });

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$5
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

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AbpApiDefinitionService: AbpApiDefinitionService
    });

    var index$8 = /*#__PURE__*/Object.freeze({
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

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ObjectExtending: index$8,
        AbpApplicationConfigurationService: AbpApplicationConfigurationService
    });

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$b = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ApiExploring: index$7,
        ApplicationConfigurations: index$9,
        MultiTenancy: index$a
    });

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Mvc: index$b
    });

    var index$d = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Modeling: index$d
    });

    var index$f = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$g = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AspNetCore: index$c,
        Http: index$e,
        Localization: index$f
    });

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$g
    });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Fs = index$3;
    exports.Pages = index$6;
    exports.Volo = index$h;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-emailing-proxy.umd.js.map
