(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/emailing/proxy', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].emailing = global['fs-tw'].emailing || {}, global['fs-tw'].emailing.proxy = {}), global.ng.core, global.i1));
}(this, (function (exports, i0, i1) { 'use strict';

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
    EmailingApiService.ɵfac = function EmailingApiService_Factory(t) { return new (t || EmailingApiService)(i0.ɵɵinject(i1.RestService)); };
    EmailingApiService.ɵprov = i0.ɵɵdefineInjectable({ token: EmailingApiService, factory: EmailingApiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailingApiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

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
    AbpTenantService.ɵfac = function AbpTenantService_Factory(t) { return new (t || AbpTenantService)(i0.ɵɵinject(i1.RestService)); };
    AbpTenantService.ɵprov = i0.ɵɵdefineInjectable({ token: AbpTenantService, factory: AbpTenantService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbpTenantService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

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
    AbpApiDefinitionService.ɵfac = function AbpApiDefinitionService_Factory(t) { return new (t || AbpApiDefinitionService)(i0.ɵɵinject(i1.RestService)); };
    AbpApiDefinitionService.ɵprov = i0.ɵɵdefineInjectable({ token: AbpApiDefinitionService, factory: AbpApiDefinitionService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbpApiDefinitionService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

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
    AbpApplicationConfigurationService.ɵfac = function AbpApplicationConfigurationService_Factory(t) { return new (t || AbpApplicationConfigurationService)(i0.ɵɵinject(i1.RestService)); };
    AbpApplicationConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ token: AbpApplicationConfigurationService, factory: AbpApplicationConfigurationService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbpApplicationConfigurationService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

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
