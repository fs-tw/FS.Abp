import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class DocumentsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByDocumentDefinitionGetList = (DocumentDefinitionGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/documents/document-definition`,
            params: { fields: DocumentDefinitionGetList.fields, value: DocumentDefinitionGetList.value, sorting: DocumentDefinitionGetList.sorting, skipCount: DocumentDefinitionGetList.skipCount, maxResultCount: DocumentDefinitionGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByVersionGetList = (VersionGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/documents/version`,
            params: { fields: VersionGetList.fields, value: VersionGetList.value, sorting: VersionGetList.sorting, skipCount: VersionGetList.skipCount, maxResultCount: VersionGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/form-management/documents`,
        }, { apiName: this.apiName });
    }
}
DocumentsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DocumentsApiService_Factory() { return new DocumentsApiService(i0.ɵɵinject(i1.RestService)); }, token: DocumentsApiService, providedIn: "root" });
DocumentsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DocumentsApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=documents-api.service.js.map