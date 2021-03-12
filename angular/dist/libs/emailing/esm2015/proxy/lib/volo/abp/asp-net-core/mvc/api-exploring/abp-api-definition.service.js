import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class AbpApiDefinitionService {
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
AbpApiDefinitionService.ɵfac = function AbpApiDefinitionService_Factory(t) { return new (t || AbpApiDefinitionService)(i0.ɵɵinject(i1.RestService)); };
AbpApiDefinitionService.ɵprov = i0.ɵɵdefineInjectable({ token: AbpApiDefinitionService, factory: AbpApiDefinitionService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbpApiDefinitionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=abp-api-definition.service.js.map