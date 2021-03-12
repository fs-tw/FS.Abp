import { Injectable } from '@angular/core';
import { EnvironmentService, RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class FileService {
    constructor(restService, environmentService) {
        this.restService = restService;
        this.environmentService = environmentService;
    }
    getFileUrl(id) {
        if (!id)
            return "";
        return this.environmentService.getApiUrl() + "/api/file-management/file-descriptor/file-content?id=" + id;
    }
    uploadFile(file, directoryId) {
        const formData = new FormData();
        formData.append("relativePath", null);
        formData.append("file", file);
        formData.append("name", file.name);
        formData.append("type", file.type);
        return this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/upload`,
            body: formData,
            params: { directoryId: directoryId }
        });
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i1.EnvironmentService)); };
FileService.ɵprov = i0.ɵɵdefineInjectable({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.RestService }, { type: i1.EnvironmentService }]; }, null); })();
//# sourceMappingURL=file.service.js.map