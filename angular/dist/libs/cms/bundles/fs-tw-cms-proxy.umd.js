(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@fs-tw/cms/proxy', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['fs-tw'] = global['fs-tw'] || {}, global['fs-tw'].cms = global['fs-tw'].cms || {}, global['fs-tw'].cms.proxy = {}), global.ng.core, global.i1));
}(this, (function (exports, i0, i1) { 'use strict';

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
    BlogsApiService.ɵfac = function BlogsApiService_Factory(t) { return new (t || BlogsApiService)(i0.ɵɵinject(i1.RestService)); };
    BlogsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: BlogsApiService, factory: BlogsApiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlogsApiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

    var index$4 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$3,
        BlogsApiService: BlogsApiService
    });

    var index$5 = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var index$6 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$5
    });

    var index$7 = /*#__PURE__*/Object.freeze({
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
    DocumentsApiService.ɵfac = function DocumentsApiService_Factory(t) { return new (t || DocumentsApiService)(i0.ɵɵinject(i1.RestService)); };
    DocumentsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: DocumentsApiService, factory: DocumentsApiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DocumentsApiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

    var index$8 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$7,
        DocumentsApiService: DocumentsApiService
    });

    var index$9 = /*#__PURE__*/Object.freeze({
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
    PostsApiService.ɵfac = function PostsApiService_Factory(t) { return new (t || PostsApiService)(i0.ɵɵinject(i1.RestService)); };
    PostsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: PostsApiService, factory: PostsApiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsApiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

    var index$a = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$9,
        get DisplayMode () { return DisplayMode; },
        displayModeOptions: displayModeOptions,
        PostsApiService: PostsApiService
    });

    var index$b = /*#__PURE__*/Object.freeze({
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
    TagsApiService.ɵfac = function TagsApiService_Factory(t) { return new (t || TagsApiService)(i0.ɵɵinject(i1.RestService)); };
    TagsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: TagsApiService, factory: TagsApiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagsApiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.RestService }]; }, null);
    })();

    var index$c = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Dtos: index$b,
        TagsApiService: TagsApiService
    });

    var index$d = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Blogs: index$4,
        Core: index$6,
        Documents: index$8,
        Posts: index$a,
        Tags: index$c
    });

    var index$e = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Abp: index$2,
        Cms: index$d
    });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Fs = index$e;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tw-cms-proxy.umd.js.map
