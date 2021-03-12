import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
// import type { IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
export class FilesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getContentById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/file-content`,
            params: { id: id },
        }, { apiName: this.apiName });
    }
}
FilesApiService.ɵfac = function FilesApiService_Factory(t) { return new (t || FilesApiService)(i0.ɵɵinject(i1.RestService)); };
FilesApiService.ɵprov = i0.ɵɵdefineInjectable({ token: FilesApiService, factory: FilesApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilesApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=files-api.service.js.map