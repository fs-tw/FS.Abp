import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class FileService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.delete = (name) => this.restService.request({
            method: 'DELETE',
            url: `/api/theme-core/file/${name}`,
        }, { apiName: this.apiName });
        this.getBase64ByName = (name) => this.restService.request({
            method: 'GET',
            url: `/api/theme-core/file/base64/${name}`,
        }, { apiName: this.apiName });
        this.getByName = (name) => this.restService.request({
            method: 'GET',
            url: `/api/theme-core/file/${name}`,
        }, { apiName: this.apiName });
        this.put = (body) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/file`,
            body
        }, { apiName: this.apiName });
        this.putByNameAndBase64 = (name, base64) => this.restService.request({
            method: 'PUT',
            url: `/api/theme-core/file/${name}`,
            body: base64,
        }, { apiName: this.apiName });
    }
}
FileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.RestService)); }, token: FileService, providedIn: "root" });
FileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FileService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=file.service.js.map