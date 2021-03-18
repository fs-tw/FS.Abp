import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class FilesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getContentById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file/files/file-content`,
            params: { id: id },
        }, { apiName: this.apiName });
    }
}
FilesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FilesApiService_Factory() { return new FilesApiService(i0.ɵɵinject(i1.RestService)); }, token: FilesApiService, providedIn: "root" });
FilesApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FilesApiService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=files-api.service.js.map