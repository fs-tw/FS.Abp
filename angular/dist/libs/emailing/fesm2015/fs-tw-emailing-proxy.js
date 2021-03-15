import { RestService } from '@abp/ng.core';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';

var index$h = /*#__PURE__*/Object.freeze({
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
EmailingApiService.ɵprov = ɵɵdefineInjectable({ factory: function EmailingApiService_Factory() { return new EmailingApiService(ɵɵinject(RestService)); }, token: EmailingApiService, providedIn: "root" });
EmailingApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
EmailingApiService.ctorParameters = () => [
    { type: RestService }
];

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
AbpTenantService.ɵprov = ɵɵdefineInjectable({ factory: function AbpTenantService_Factory() { return new AbpTenantService(ɵɵinject(RestService)); }, token: AbpTenantService, providedIn: "root" });
AbpTenantService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AbpTenantService.ctorParameters = () => [
    { type: RestService }
];

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
AbpApiDefinitionService.ɵprov = ɵɵdefineInjectable({ factory: function AbpApiDefinitionService_Factory() { return new AbpApiDefinitionService(ɵɵinject(RestService)); }, token: AbpApiDefinitionService, providedIn: "root" });
AbpApiDefinitionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AbpApiDefinitionService.ctorParameters = () => [
    { type: RestService }
];

var index$a = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbpApiDefinitionService: AbpApiDefinitionService
});

var index$9 = /*#__PURE__*/Object.freeze({
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
AbpApplicationConfigurationService.ɵprov = ɵɵdefineInjectable({ factory: function AbpApplicationConfigurationService_Factory() { return new AbpApplicationConfigurationService(ɵɵinject(RestService)); }, token: AbpApplicationConfigurationService, providedIn: "root" });
AbpApplicationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AbpApplicationConfigurationService.ctorParameters = () => [
    { type: RestService }
];

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

export { index$e as Fs, index$b as Pages, index as Volo };
//# sourceMappingURL=fs-tw-emailing-proxy.js.map
