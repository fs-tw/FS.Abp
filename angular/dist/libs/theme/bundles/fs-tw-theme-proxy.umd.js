(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/theme/proxy', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].theme = global['fs-tw'].theme || {}, global['fs-tw'].theme.proxy = {}), global.i1, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index
    });

    var index$2 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var DirectoriesApiService = /** @class */ (function () {
        function DirectoriesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.findByProviderByKeyAndGroup = function (key, group) { return _this.restService.request({
                method: 'GET',
                url: "/api/file/directories/provider/" + key,
                params: { group: group },
            }, { apiName: _this.apiName }); };
            this.getDefinitions = function () { return _this.restService.request({
                method: 'GET',
                url: "/api/file/directories/definitions",
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

    var index$3 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$2,
        DirectoriesApiService: DirectoriesApiService
    });

    var FilesApiService = /** @class */ (function () {
        function FilesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getContentById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/file/files/file-content",
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

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FilesApiService: FilesApiService
    });

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Directories: index$3,
        Files: index$4
    });

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Application: index$1,
        File: index$5
    });

    var index$7 = /*#__PURE__*/Object.freeze({
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

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$7,
        BlogsApiService: BlogsApiService
    });

    var index$9 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$9
    });

    var index$b = /*#__PURE__*/Object.freeze({
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

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$b,
        DocumentsApiService: DocumentsApiService
    });

    var index$d = /*#__PURE__*/Object.freeze({
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

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$d,
        get DisplayMode () { return DisplayMode; },
        displayModeOptions: displayModeOptions,
        PostsApiService: PostsApiService
    });

    var index$f = /*#__PURE__*/Object.freeze({
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

    var index$g = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$f,
        TagsApiService: TagsApiService
    });

    var index$h = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Blogs: index$8,
        Core: index$a,
        Documents: index$c,
        Posts: index$e,
        Tags: index$g
    });

    var index$i = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var DocumentsApiService$1 = /** @class */ (function () {
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
    DocumentsApiService$1.ɵprov = i0.ɵɵdefineInjectable({ factory: function DocumentsApiService_Factory() { return new DocumentsApiService$1(i0.ɵɵinject(i1.RestService)); }, token: DocumentsApiService$1, providedIn: "root" });
    DocumentsApiService$1.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DocumentsApiService$1.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$j = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$i,
        DocumentsApiService: DocumentsApiService$1
    });

    var index$k = /*#__PURE__*/Object.freeze({
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

    var index$l = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$k,
        FormsApiService: FormsApiService
    });

    var index$m = /*#__PURE__*/Object.freeze({
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

    var index$n = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$m,
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

    var index$o = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SampleService: SampleService
    });

    var index$p = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Documents: index$j,
        Forms: index$l,
        Records: index$n,
        Samples: index$o
    });

    var index$q = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var BannersApiService = /** @class */ (function () {
        function BannersApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByBannerDefinitionGetList = function (BannerDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/banners/banner-definition",
                params: { fields: BannerDefinitionGetList.fields, value: BannerDefinitionGetList.value, sorting: BannerDefinitionGetList.sorting, skipCount: BannerDefinitionGetList.skipCount, maxResultCount: BannerDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByBannerGetList = function (BannerGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/banners/banner",
                params: { fields: BannerGetList.fields, value: BannerGetList.value, sorting: BannerGetList.sorting, skipCount: BannerGetList.skipCount, maxResultCount: BannerGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/theme/banners",
            }, { apiName: _this.apiName }); };
        }
        return BannersApiService;
    }());
    BannersApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BannersApiService_Factory() { return new BannersApiService(i0.ɵɵinject(i1.RestService)); }, token: BannersApiService, providedIn: "root" });
    BannersApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    BannersApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$r = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$q,
        BannersApiService: BannersApiService
    });

    var index$s = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var RoutesApiService = /** @class */ (function () {
        function RoutesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByRouteDefinitionGetList = function (RouteDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/routes/route-definition",
                params: { fields: RouteDefinitionGetList.fields, value: RouteDefinitionGetList.value, sorting: RouteDefinitionGetList.sorting, skipCount: RouteDefinitionGetList.skipCount, maxResultCount: RouteDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getListByRouteGetList = function (RouteGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/routes/route",
                params: { fields: RouteGetList.fields, value: RouteGetList.value, sorting: RouteGetList.sorting, skipCount: RouteGetList.skipCount, maxResultCount: RouteGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/theme/routes",
            }, { apiName: _this.apiName }); };
        }
        return RoutesApiService;
    }());
    RoutesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutesApiService_Factory() { return new RoutesApiService(i0.ɵɵinject(i1.RestService)); }, token: RoutesApiService, providedIn: "root" });
    RoutesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    RoutesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$t = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$s,
        RoutesApiService: RoutesApiService
    });

    var index$u = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var WebSitesApiService = /** @class */ (function () {
        function WebSitesApiService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'Default';
            this.getListByWebSiteDefinitionGetList = function (WebSiteDefinitionGetList) { return _this.restService.request({
                method: 'GET',
                url: "/api/theme/web-sites/web-site-definition",
                params: { fields: WebSiteDefinitionGetList.fields, value: WebSiteDefinitionGetList.value, sorting: WebSiteDefinitionGetList.sorting, skipCount: WebSiteDefinitionGetList.skipCount, maxResultCount: WebSiteDefinitionGetList.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.options = function () { return _this.restService.request({
                method: 'OPTIONS',
                url: "/api/theme/web-sites",
            }, { apiName: _this.apiName }); };
        }
        return WebSitesApiService;
    }());
    WebSitesApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function WebSitesApiService_Factory() { return new WebSitesApiService(i0.ɵɵinject(i1.RestService)); }, token: WebSitesApiService, providedIn: "root" });
    WebSitesApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    WebSitesApiService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var index$v = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$u,
        WebSitesApiService: WebSitesApiService
    });

    var index$w = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Banners: index$r,
        Routes: index$t,
        WebSites: index$v
    });

    var index$x = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$6,
        Cms: index$h,
        FormManagement: index$p,
        Theme: index$w
    });

    var index$y = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$z = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Mvc: index$y
    });

    var index$A = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AspNetCore: index$z
    });

    var index$B = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$C = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Content: index$B
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

    var index$D = /*#__PURE__*/Object.freeze({
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

    var index$E = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FileDescriptorService: FileDescriptorService,
        get FileIconType () { return FileIconType; },
        fileIconTypeOptions: fileIconTypeOptions
    });

    var index$F = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Directories: index$D,
        Files: index$E
    });

    var index$G = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$C,
        FileManagement: index$F
    });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Fs = index$x;
    exports.Microsoft = index$A;
    exports.Volo = index$G;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-theme-proxy.umd.js.map
