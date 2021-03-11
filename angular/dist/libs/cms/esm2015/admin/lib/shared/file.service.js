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
FileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i1.EnvironmentService)); }, token: FileService, providedIn: "root" });
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FileService.ctorParameters = () => [
    { type: RestService },
    { type: EnvironmentService }
];
//# sourceMappingURL=file.service.js.map