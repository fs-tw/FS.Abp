(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/form-management/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw']['form-management'] = global['fs-tw']['form-management'] || {}, global['fs-tw']['form-management'].proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

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

    var DocumentsApiService = /** @class */ (function () {
        function DocumentsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByDocumentDefinitionGetList = function (DocumentDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/documents/document-definition",
                params: { fields: DocumentDefinitionGetList.fields, value: DocumentDefinitionGetList.value, sorting: DocumentDefinitionGetList.sorting, skipCount: DocumentDefinitionGetList.skipCount, maxResultCount: DocumentDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByVersionGetList = function (VersionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/documents/version",
                params: { fields: VersionGetList.fields, value: VersionGetList.value, sorting: VersionGetList.sorting, skipCount: VersionGetList.skipCount, maxResultCount: VersionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/form-management/documents",
            }, { apiName: _this.apiName }); };
        }
        return DocumentsApiService;
    }());
    DocumentsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DocumentsApiService_Factory() { return new DocumentsApiService(i0.ɵɵinject(i1.RestService)); }, token: DocumentsApiService, providedIn: "root" });
    DocumentsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DocumentsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$3,
        DocumentsApiService: DocumentsApiService
    });

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var FormsApiService = /** @class */ (function () {
        function FormsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByFormalGetList = function (FormalGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/forms/formal",
                params: { fields: FormalGetList.fields, value: FormalGetList.value, sorting: FormalGetList.sorting, skipCount: FormalGetList.skipCount, maxResultCount: FormalGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByGroupGetList = function (GroupGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/forms/group",
                params: { fields: GroupGetList.fields, value: GroupGetList.value, sorting: GroupGetList.sorting, skipCount: GroupGetList.skipCount, maxResultCount: GroupGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByItemGetList = function (ItemGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/forms/item",
                params: { fields: ItemGetList.fields, value: ItemGetList.value, sorting: ItemGetList.sorting, skipCount: ItemGetList.skipCount, maxResultCount: ItemGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/form-management/forms",
            }, { apiName: _this.apiName }); };
        }
        return FormsApiService;
    }());
    FormsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FormsApiService_Factory() { return new FormsApiService(i0.ɵɵinject(i1.RestService)); }, token: FormsApiService, providedIn: "root" });
    FormsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FormsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$5,
        FormsApiService: FormsApiService
    });

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var RecordsApiService = /** @class */ (function () {
        function RecordsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByRecordGetList = function (RecordGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/records/record",
                params: { fields: RecordGetList.fields, value: RecordGetList.value, sorting: RecordGetList.sorting, skipCount: RecordGetList.skipCount, maxResultCount: RecordGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByRecordItemGetList = function (RecordItemGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/form-management/records/record-item",
                params: { fields: RecordItemGetList.fields, value: RecordItemGetList.value, sorting: RecordItemGetList.sorting, skipCount: RecordItemGetList.skipCount, maxResultCount: RecordItemGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/form-management/records",
            }, { apiName: _this.apiName }); };
        }
        return RecordsApiService;
    }());
    RecordsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RecordsApiService_Factory() { return new RecordsApiService(i0.ɵɵinject(i1.RestService)); }, token: RecordsApiService, providedIn: "root" });
    RecordsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    RecordsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$7,
        RecordsApiService: RecordsApiService
    });

    var SampleService = /** @class */ (function () {
        function SampleService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.get = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/FormManagement/sample",
            }, { apiName: _this.apiName }); };
            this.getAuthorized = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/FormManagement/sample/authorized",
            }, { apiName: _this.apiName }); };
        }
        return SampleService;
    }());
    SampleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SampleService_Factory() { return new SampleService(i0.ɵɵinject(i1.RestService)); }, token: SampleService, providedIn: "root" });
    SampleService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    SampleService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

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

    var DirectoryDescriptorService = /** @class */ (function () {
        function DirectoryDescriptorService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'FileManagement';
            this.createByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/directory-descriptor",
                body: input,
            }, { apiName: _this.apiName }); };
            this.deleteById = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/file-management/directory-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.getById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.getContentByInput = function (input) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor",
                params: { filter: input.filter, sorting: input.sorting, id: input.id },
            }, { apiName: _this.apiName }); };
            this.getListByParentId = function (parentId) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/sub-directories",
                params: { parentId: parentId },
            }, { apiName: _this.apiName }); };
            this.moveByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/directory-descriptor/move",
                body: input,
            }, { apiName: _this.apiName }); };
            this.renameByIdAndInput = function (id, input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/directory-descriptor/" + id,
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return DirectoryDescriptorService;
    }());
    DirectoryDescriptorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectoryDescriptorService_Factory() { return new DirectoryDescriptorService(i0.ɵɵinject(i1.RestService)); }, token: DirectoryDescriptorService, providedIn: "root" });
    DirectoryDescriptorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DirectoryDescriptorService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DirectoryDescriptorService: DirectoryDescriptorService
    });

    var FileDescriptorService = /** @class */ (function () {
        function FileDescriptorService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'FileManagement';
            this.createByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor",
                body: input,
            }, { apiName: _this.apiName }); };
            this.deleteById = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/file-management/file-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.downloadById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/download/" + id,
            }, { apiName: _this.apiName }); };
            this.getById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/" + id,
            }, { apiName: _this.apiName }); };
            this.getContentById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/content",
                params: { id: id },
            }, { apiName: _this.apiName }); };
            this.getListByDirectoryId = function (directoryId) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor",
                params: { directoryId: directoryId },
            }, { apiName: _this.apiName }); };
            this.getPreInfoByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/pre-upload-info",
                body: input,
            }, { apiName: _this.apiName }); };
            this.moveByInput = function (input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/move",
                body: input,
            }, { apiName: _this.apiName }); };
            this.renameByIdAndInput = function (id, input) { return _this.restService.request({
                method: 'POST',
                url: "/api/file-management/file-descriptor/" + id,
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return FileDescriptorService;
    }());
    FileDescriptorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FileDescriptorService_Factory() { return new FileDescriptorService(i0.ɵɵinject(i1.RestService)); }, token: FileDescriptorService, providedIn: "root" });
    FileDescriptorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FileDescriptorService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var FileIconType;
    (function (FileIconType) {
        FileIconType[FileIconType["FontAwesome"] = 0] = "FontAwesome";
        FileIconType[FileIconType["Url"] = 1] = "Url";
    })(FileIconType || (FileIconType = {}));
    var fileIconTypeOptions = i1.mapEnumToOptions(FileIconType);

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

    exports.Fs = index$b;
    exports.Microsoft = index$e;
    exports.Volo = index$k;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-form-management-proxy.umd.js.map
