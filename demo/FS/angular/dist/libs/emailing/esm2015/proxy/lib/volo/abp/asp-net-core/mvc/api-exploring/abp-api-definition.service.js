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
AbpApiDefinitionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AbpApiDefinitionService_Factory() { return new AbpApiDefinitionService(i0.ɵɵinject(i1.RestService)); }, token: AbpApiDefinitionService, providedIn: "root" });
AbpApiDefinitionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AbpApiDefinitionService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=abp-api-definition.service.js.map