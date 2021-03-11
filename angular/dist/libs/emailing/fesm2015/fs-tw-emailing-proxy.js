import { RestService } from '@abp/ng.core';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class EmailingApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getByEmailSettingsGet = (EmailSettingsGet) => this.restService.request({
            method: 'GET',
            url: `/api/abp/emailing/email-settings`,
            params: { providerName: EmailSettingsGet.providerName, providerKey: EmailSettingsGet.providerKey },
        }, { apiName: this.apiName });
        this.updateByEmailSettingsAndProviderNameAndProviderKey = (EmailSettings, providerName, providerKey) => this.restService.request({
            method: 'PUT',
            url: `/api/abp/emailing/email-settings`,
            params: { providerName: providerName, providerKey: providerKey },
            body: EmailSettings,
        }, { apiName: this.apiName });
    }
}
EmailingApiService.ɵfac = function EmailingApiService_Factory(t) { return new (t || EmailingApiService)(ɵɵinject(RestService)); };
EmailingApiService.ɵprov = ɵɵdefineInjectable({ token: EmailingApiService, factory: EmailingApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EmailingApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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

class AbpTenantService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.findTenantByIdById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-id/${id}`,
        }, { apiName: this.apiName });
        this.findTenantByNameByName = (name) => this.restService.request({
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${name}`,
        }, { apiName: this.apiName });
    }
}
AbpTenantService.ɵfac = function AbpTenantService_Factory(t) { return new (t || AbpTenantService)(ɵɵinject(RestService)); };
AbpTenantService.ɵprov = ɵɵdefineInjectable({ token: AbpTenantService, factory: AbpTenantService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AbpTenantService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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

class AbpApiDefinitionService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getByModel = (model) => this.restService.request({
            method: 'GET',
            url: `/api/abp/api-definition`,
            params: { includeTypes: model.includeTypes },
        }, { apiName: this.apiName });
    }
}
AbpApiDefinitionService.ɵfac = function AbpApiDefinitionService_Factory(t) { return new (t || AbpApiDefinitionService)(ɵɵinject(RestService)); };
AbpApiDefinitionService.ɵprov = ɵɵdefineInjectable({ token: AbpApiDefinitionService, factory: AbpApiDefinitionService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AbpApiDefinitionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbpApiDefinitionService: AbpApiDefinitionService
});

var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class AbpApplicationConfigurationService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.get = () => this.restService.request({
            method: 'GET',
            url: `/api/abp/application-configuration`,
        }, { apiName: this.apiName });
    }
}
AbpApplicationConfigurationService.ɵfac = function AbpApplicationConfigurationService_Factory(t) { return new (t || AbpApplicationConfigurationService)(ɵɵinject(RestService)); };
AbpApplicationConfigurationService.ɵprov = ɵɵdefineInjectable({ token: AbpApplicationConfigurationService, factory: AbpApplicationConfigurationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AbpApplicationConfigurationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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

export { index$3 as Fs, index$6 as Pages, index$h as Volo };
//# sourceMappingURL=fs-tw-emailing-proxy.js.map
