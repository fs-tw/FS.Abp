import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class DirectoryDescriptorService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'FileManagement';
        this.createByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/directory-descriptor`,
            body: input,
        }, { apiName: this.apiName });
        this.deleteById = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/file-management/directory-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.getById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.getContentByInput = (input) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor`,
            params: { filter: input.filter, sorting: input.sorting, id: input.id },
        }, { apiName: this.apiName });
        this.getListByParentId = (parentId) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/sub-directories`,
            params: { parentId: parentId },
        }, { apiName: this.apiName });
        this.moveByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/directory-descriptor/move`,
            body: input,
        }, { apiName: this.apiName });
        this.renameByIdAndInput = (id, input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/directory-descriptor/${id}`,
            body: input,
        }, { apiName: this.apiName });
    }
}
DirectoryDescriptorService.ɵfac = function DirectoryDescriptorService_Factory(t) { return new (t || DirectoryDescriptorService)(i0.ɵɵinject(i1.RestService)); };
DirectoryDescriptorService.ɵprov = i0.ɵɵdefineInjectable({ token: DirectoryDescriptorService, factory: DirectoryDescriptorService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectoryDescriptorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=directory-descriptor.service.js.map