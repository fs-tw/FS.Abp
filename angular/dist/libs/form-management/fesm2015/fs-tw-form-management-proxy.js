import { RestService, mapEnumToOptions } from '@abp/ng.core';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';

var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index
});

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Application: index$1
});

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class DocumentsApiService {
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
DocumentsApiService.ɵprov = ɵɵdefineInjectable({ factory: function DocumentsApiService_Factory() { return new DocumentsApiService(ɵɵinject(RestService)); }, token: DocumentsApiService, providedIn: "root" });
DocumentsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DocumentsApiService.ctorParameters = () => [
    { type: RestService }
];

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$3,
    DocumentsApiService: DocumentsApiService
});

var index$5 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class FormsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByFormalGetList = (FormalGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/forms/formal`,
            params: { fields: FormalGetList.fields, value: FormalGetList.value, sorting: FormalGetList.sorting, skipCount: FormalGetList.skipCount, maxResultCount: FormalGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByGroupGetList = (GroupGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/forms/group`,
            params: { fields: GroupGetList.fields, value: GroupGetList.value, sorting: GroupGetList.sorting, skipCount: GroupGetList.skipCount, maxResultCount: GroupGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByItemGetList = (ItemGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/forms/item`,
            params: { fields: ItemGetList.fields, value: ItemGetList.value, sorting: ItemGetList.sorting, skipCount: ItemGetList.skipCount, maxResultCount: ItemGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/form-management/forms`,
        }, { apiName: this.apiName });
    }
}
FormsApiService.ɵprov = ɵɵdefineInjectable({ factory: function FormsApiService_Factory() { return new FormsApiService(ɵɵinject(RestService)); }, token: FormsApiService, providedIn: "root" });
FormsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FormsApiService.ctorParameters = () => [
    { type: RestService }
];

var index$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$5,
    FormsApiService: FormsApiService
});

var index$7 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class RecordsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByRecordGetList = (RecordGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/records/record`,
            params: { fields: RecordGetList.fields, value: RecordGetList.value, sorting: RecordGetList.sorting, skipCount: RecordGetList.skipCount, maxResultCount: RecordGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByRecordItemGetList = (RecordItemGetList) => this.restService.request({
            method: 'GET',
            url: `/api/form-management/records/record-item`,
            params: { fields: RecordItemGetList.fields, value: RecordItemGetList.value, sorting: RecordItemGetList.sorting, skipCount: RecordItemGetList.skipCount, maxResultCount: RecordItemGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/form-management/records`,
        }, { apiName: this.apiName });
    }
}
RecordsApiService.ɵprov = ɵɵdefineInjectable({ factory: function RecordsApiService_Factory() { return new RecordsApiService(ɵɵinject(RestService)); }, token: RecordsApiService, providedIn: "root" });
RecordsApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RecordsApiService.ctorParameters = () => [
    { type: RestService }
];

var index$8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$7,
    RecordsApiService: RecordsApiService
});

class SampleService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.get = () => this.restService.request({
            method: 'GET',
            url: `/api/FormManagement/sample`,
        }, { apiName: this.apiName });
        this.getAuthorized = () => this.restService.request({
            method: 'GET',
            url: `/api/FormManagement/sample/authorized`,
        }, { apiName: this.apiName });
    }
}
SampleService.ɵprov = ɵɵdefineInjectable({ factory: function SampleService_Factory() { return new SampleService(ɵɵinject(RestService)); }, token: SampleService, providedIn: "root" });
SampleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SampleService.ctorParameters = () => [
    { type: RestService }
];

var index$9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SampleService: SampleService
});

var index$a = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Documents: index$4,
    Forms: index$6,
    Records: index$8,
    Samples: index$9
});

var index$b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abp: index$2,
    FormManagement: index$a
});

var index$c = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Mvc: index$c
});

var index$e = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AspNetCore: index$d
});

var index$f = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$g = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Content: index$f
});

class DirectoryDescriptorService {
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
DirectoryDescriptorService.ɵprov = ɵɵdefineInjectable({ factory: function DirectoryDescriptorService_Factory() { return new DirectoryDescriptorService(ɵɵinject(RestService)); }, token: DirectoryDescriptorService, providedIn: "root" });
DirectoryDescriptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DirectoryDescriptorService.ctorParameters = () => [
    { type: RestService }
];

var index$h = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DirectoryDescriptorService: DirectoryDescriptorService
});

class FileDescriptorService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'FileManagement';
        this.createByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor`,
            body: input,
        }, { apiName: this.apiName });
        this.deleteById = (id) => this.restService.request({
            method: 'DELETE',
            url: `/api/file-management/file-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.downloadById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/download/${id}`,
        }, { apiName: this.apiName });
        this.getById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/${id}`,
        }, { apiName: this.apiName });
        this.getContentById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/content`,
            params: { id: id },
        }, { apiName: this.apiName });
        this.getListByDirectoryId = (directoryId) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor`,
            params: { directoryId: directoryId },
        }, { apiName: this.apiName });
        this.getPreInfoByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/pre-upload-info`,
            body: input,
        }, { apiName: this.apiName });
        this.moveByInput = (input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/move`,
            body: input,
        }, { apiName: this.apiName });
        this.renameByIdAndInput = (id, input) => this.restService.request({
            method: 'POST',
            url: `/api/file-management/file-descriptor/${id}`,
            body: input,
        }, { apiName: this.apiName });
    }
}
FileDescriptorService.ɵprov = ɵɵdefineInjectable({ factory: function FileDescriptorService_Factory() { return new FileDescriptorService(ɵɵinject(RestService)); }, token: FileDescriptorService, providedIn: "root" });
FileDescriptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FileDescriptorService.ctorParameters = () => [
    { type: RestService }
];

var FileIconType;
(function (FileIconType) {
    FileIconType[FileIconType["FontAwesome"] = 0] = "FontAwesome";
    FileIconType[FileIconType["Url"] = 1] = "Url";
})(FileIconType || (FileIconType = {}));
const fileIconTypeOptions = mapEnumToOptions(FileIconType);

var index$i = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FileDescriptorService: FileDescriptorService,
    get FileIconType () { return FileIconType; },
    fileIconTypeOptions: fileIconTypeOptions
});

var index$j = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Directories: index$h,
    Files: index$i
});

var index$k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abp: index$g,
    FileManagement: index$j
});

/**
 * Generated bundle index. Do not edit.
 */

export { index$b as Fs, index$e as Microsoft, index$k as Volo };
//# sourceMappingURL=fs-tw-form-management-proxy.js.map
