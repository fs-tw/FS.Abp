(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var index$r = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$q = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$r
    });

    var index$p = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var DirectoriesApiService = /** @class */ (function () {
        function DirectoriesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.findByProviderByKeyAndGroup = function (key, group) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/provider/" + key,
                params: { group: group },
            }, { apiName: _this.apiName }); };
            this.getDefinitions = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/directory-descriptor/definitions",
            }, { apiName: _this.apiName }); };
        }
        return DirectoriesApiService;
    }());
    DirectoriesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectoriesApiService_Factory() { return new DirectoriesApiService(i0.ɵɵinject(i1.RestService)); }, token: DirectoriesApiService, providedIn: "root" });
    DirectoriesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DirectoriesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$o = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$p,
        DirectoriesApiService: DirectoriesApiService
    });

    // import type { IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
    var FilesApiService = /** @class */ (function () {
        function FilesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getContentById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file-management/file-descriptor/file-content",
                params: { id: id },
            }, { apiName: _this.apiName }); };
        }
        return FilesApiService;
    }());
    FilesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FilesApiService_Factory() { return new FilesApiService(i0.ɵɵinject(i1.RestService)); }, token: FilesApiService, providedIn: "root" });
    FilesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FilesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$n = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FilesApiService: FilesApiService
    });

    var index$m = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Directories: index$o,
        Files: index$n
    });

    var index$l = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Application: index$q,
        File: index$m
    });

    var index$k = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var BlogsApiService = /** @class */ (function () {
        function BlogsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByBlogCreate = function (BlogCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/cms/blogs/blog",
                body: BlogCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByBlogPrimaryKey = function (BlogPrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/cms/blogs/blog/id",
                params: { id: BlogPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByBlogPrimaryKey = function (BlogPrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/blogs/blog/id",
                params: { id: BlogPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByBlogGetList = function (BlogGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/blogs/blog",
                params: { fields: BlogGetList.fields, value: BlogGetList.value, sorting: BlogGetList.sorting, skipCount: BlogGetList.skipCount, maxResultCount: BlogGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/cms/blogs",
            }, { apiName: _this.apiName }); };
            this.updateByBlogPrimaryKeyAndBlogUpdate = function (BlogPrimaryKey, BlogUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/cms/blogs/blog/id",
                params: { id: BlogPrimaryKey.id },
                body: BlogUpdate,
            }, { apiName: _this.apiName }); };
        }
        return BlogsApiService;
    }());
    BlogsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BlogsApiService_Factory() { return new BlogsApiService(i0.ɵɵinject(i1.RestService)); }, token: BlogsApiService, providedIn: "root" });
    BlogsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    BlogsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$j = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$k,
        BlogsApiService: BlogsApiService
    });

    var index$i = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$i
    });

    var index$g = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var DocumentsApiService = /** @class */ (function () {
        function DocumentsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByDocumentDefinitionGetList = function (DocumentDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/documents/document-definition",
                params: { fields: DocumentDefinitionGetList.fields, value: DocumentDefinitionGetList.value, sorting: DocumentDefinitionGetList.sorting, skipCount: DocumentDefinitionGetList.skipCount, maxResultCount: DocumentDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByDocumentGetList = function (DocumentGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/documents/document",
                params: { fields: DocumentGetList.fields, value: DocumentGetList.value, sorting: DocumentGetList.sorting, skipCount: DocumentGetList.skipCount, maxResultCount: DocumentGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/cms/documents",
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

    var index$f = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$g,
        DocumentsApiService: DocumentsApiService
    });

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var DisplayMode;
    (function (DisplayMode) {
        DisplayMode[DisplayMode["\u5167\u6587"] = 0] = "\u5167\u6587";
        DisplayMode[DisplayMode["\u9023\u7D50"] = 1] = "\u9023\u7D50";
    })(DisplayMode || (DisplayMode = {}));
    var displayModeOptions = i1.mapEnumToOptions(DisplayMode);

    var PostsApiService = /** @class */ (function () {
        function PostsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByPostCreate = function (PostCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/cms/posts/post",
                body: PostCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByPostPrimaryKey = function (PostPrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/cms/posts/post/id",
                params: { id: PostPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByPostPrimaryKey = function (PostPrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/posts/post/id",
                params: { id: PostPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByPostGetList = function (PostGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/posts/post",
                params: { fields: PostGetList.fields, value: PostGetList.value, sorting: PostGetList.sorting, skipCount: PostGetList.skipCount, maxResultCount: PostGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByPostTagMapGetList = function (PostTagMapGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/posts/post-tag-map",
                params: { fields: PostTagMapGetList.fields, value: PostTagMapGetList.value, sorting: PostTagMapGetList.sorting, skipCount: PostTagMapGetList.skipCount, maxResultCount: PostTagMapGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getPostsByBlogIdByInput = function (input) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/posts/get-posts-by-blog-id",
                params: { blogId: input.blogId, keyword: input.keyword, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/cms/posts",
            }, { apiName: _this.apiName }); };
            this.updateByPostPrimaryKeyAndPostUpdate = function (PostPrimaryKey, PostUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/cms/posts/post/id",
                params: { id: PostPrimaryKey.id },
                body: PostUpdate,
            }, { apiName: _this.apiName }); };
        }
        return PostsApiService;
    }());
    PostsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PostsApiService_Factory() { return new PostsApiService(i0.ɵɵinject(i1.RestService)); }, token: PostsApiService, providedIn: "root" });
    PostsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    PostsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$d = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$e,
        get DisplayMode () { return DisplayMode; },
        displayModeOptions: displayModeOptions,
        PostsApiService: PostsApiService
    });

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var TagsApiService = /** @class */ (function () {
        function TagsApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.createByTagCreate = function (TagCreate) { return _this.restService.request({
                method: 'POST',
                url: "/api/cms/tags/tag",
                body: TagCreate,
            }, { apiName: _this.apiName }); };
            this.deleteByTagPrimaryKey = function (TagPrimaryKey) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/cms/tags/tag/id",
                params: { id: TagPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getByTagPrimaryKey = function (TagPrimaryKey) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/tags/tag/id",
                params: { id: TagPrimaryKey.id },
            }, { apiName: _this.apiName }); };
            this.getListByTagGetList = function (TagGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/cms/tags/tag",
                params: { fields: TagGetList.fields, value: TagGetList.value, sorting: TagGetList.sorting, skipCount: TagGetList.skipCount, maxResultCount: TagGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/cms/tags",
            }, { apiName: _this.apiName }); };
            this.updateByTagPrimaryKeyAndTagUpdate = function (TagPrimaryKey, TagUpdate) { return _this.restService.request({
                method: 'PUT',
                url: "/api/cms/tags/tag/id",
                params: { id: TagPrimaryKey.id },
                body: TagUpdate,
            }, { apiName: _this.apiName }); };
        }
        return TagsApiService;
    }());
    TagsApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TagsApiService_Factory() { return new TagsApiService(i0.ɵɵinject(i1.RestService)); }, token: TagsApiService, providedIn: "root" });
    TagsApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    TagsApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$b = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$c,
        TagsApiService: TagsApiService
    });

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Blogs: index$j,
        Core: index$h,
        Documents: index$f,
        Posts: index$d,
        Tags: index$b
    });

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$l,
        Cms: index$a
    });

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$7 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Mvc: index$8
    });

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AspNetCore: index$7
    });

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Content: index$5
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

    var index$3 = /*#__PURE__*/Object.freeze({
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

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FileDescriptorService: FileDescriptorService,
        get FileIconType () { return FileIconType; },
        fileIconTypeOptions: fileIconTypeOptions
    });

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Directories: index$3,
        Files: index$2
    });

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$4,
        FileManagement: index$1
    });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Fs = index$9;
    exports.Microsoft = index$6;
    exports.Volo = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-proxy.umd.js.map
