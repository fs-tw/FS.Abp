import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class DefinitionsService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getBasicDataDefinition = () => this.restService.request({
            method: 'GET',
            url: `/api/crm/definitions/basic-data-definition`,
        }, { apiName: this.apiName });
    }
}
DefinitionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefinitionsService_Factory() { return new DefinitionsService(i0.ɵɵinject(i1.RestService)); }, token: DefinitionsService, providedIn: "root" });
DefinitionsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DefinitionsService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=definitions.service.js.map