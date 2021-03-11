import { RestService, mapEnumToOptions } from '@abp/ng.core';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

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

class BlogsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByBlogCreate = (BlogCreate) => this.restService.request({
            method: 'POST',
            url: `/api/cms/blogs/blog`,
            body: BlogCreate,
        }, { apiName: this.apiName });
        this.deleteByBlogPrimaryKey = (BlogPrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/cms/blogs/blog/id`,
            params: { id: BlogPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByBlogPrimaryKey = (BlogPrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/cms/blogs/blog/id`,
            params: { id: BlogPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByBlogGetList = (BlogGetList) => this.restService.request({
            method: 'GET',
            url: `/api/cms/blogs/blog`,
            params: { fields: BlogGetList.fields, value: BlogGetList.value, sorting: BlogGetList.sorting, skipCount: BlogGetList.skipCount, maxResultCount: BlogGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/cms/blogs`,
        }, { apiName: this.apiName });
        this.updateByBlogPrimaryKeyAndBlogUpdate = (BlogPrimaryKey, BlogUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/cms/blogs/blog/id`,
            params: { id: BlogPrimaryKey.id },
            body: BlogUpdate,
        }, { apiName: this.apiName });
    }
}
BlogsApiService.ɵfac = function BlogsApiService_Factory(t) { return new (t || BlogsApiService)(ɵɵinject(RestService)); };
BlogsApiService.ɵprov = ɵɵdefineInjectable({ token: BlogsApiService, factory: BlogsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BlogsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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

class DocumentsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getListByDocumentDefinitionGetList = (DocumentDefinitionGetList) => this.restService.request({
            method: 'GET',
            url: `/api/cms/documents/document-definition`,
            params: { fields: DocumentDefinitionGetList.fields, value: DocumentDefinitionGetList.value, sorting: DocumentDefinitionGetList.sorting, skipCount: DocumentDefinitionGetList.skipCount, maxResultCount: DocumentDefinitionGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByDocumentGetList = (DocumentGetList) => this.restService.request({
            method: 'GET',
            url: `/api/cms/documents/document`,
            params: { fields: DocumentGetList.fields, value: DocumentGetList.value, sorting: DocumentGetList.sorting, skipCount: DocumentGetList.skipCount, maxResultCount: DocumentGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/cms/documents`,
        }, { apiName: this.apiName });
    }
}
DocumentsApiService.ɵfac = function DocumentsApiService_Factory(t) { return new (t || DocumentsApiService)(ɵɵinject(RestService)); };
DocumentsApiService.ɵprov = ɵɵdefineInjectable({ token: DocumentsApiService, factory: DocumentsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DocumentsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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
const displayModeOptions = mapEnumToOptions(DisplayMode);

class PostsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByPostCreate = (PostCreate) => this.restService.request({
            method: 'POST',
            url: `/api/cms/posts/post`,
            body: PostCreate,
        }, { apiName: this.apiName });
        this.deleteByPostPrimaryKey = (PostPrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/cms/posts/post/id`,
            params: { id: PostPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByPostPrimaryKey = (PostPrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/cms/posts/post/id`,
            params: { id: PostPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByPostGetList = (PostGetList) => this.restService.request({
            method: 'GET',
            url: `/api/cms/posts/post`,
            params: { fields: PostGetList.fields, value: PostGetList.value, sorting: PostGetList.sorting, skipCount: PostGetList.skipCount, maxResultCount: PostGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getListByPostTagMapGetList = (PostTagMapGetList) => this.restService.request({
            method: 'GET',
            url: `/api/cms/posts/post-tag-map`,
            params: { fields: PostTagMapGetList.fields, value: PostTagMapGetList.value, sorting: PostTagMapGetList.sorting, skipCount: PostTagMapGetList.skipCount, maxResultCount: PostTagMapGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.getPostsByBlogIdByInput = (input) => this.restService.request({
            method: 'GET',
            url: `/api/cms/posts/get-posts-by-blog-id`,
            params: { blogId: input.blogId, keyword: input.keyword, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/cms/posts`,
        }, { apiName: this.apiName });
        this.updateByPostPrimaryKeyAndPostUpdate = (PostPrimaryKey, PostUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/cms/posts/post/id`,
            params: { id: PostPrimaryKey.id },
            body: PostUpdate,
        }, { apiName: this.apiName });
    }
}
PostsApiService.ɵfac = function PostsApiService_Factory(t) { return new (t || PostsApiService)(ɵɵinject(RestService)); };
PostsApiService.ɵprov = ɵɵdefineInjectable({ token: PostsApiService, factory: PostsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PostsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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

class TagsApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.createByTagCreate = (TagCreate) => this.restService.request({
            method: 'POST',
            url: `/api/cms/tags/tag`,
            body: TagCreate,
        }, { apiName: this.apiName });
        this.deleteByTagPrimaryKey = (TagPrimaryKey) => this.restService.request({
            method: 'DELETE',
            url: `/api/cms/tags/tag/id`,
            params: { id: TagPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getByTagPrimaryKey = (TagPrimaryKey) => this.restService.request({
            method: 'GET',
            url: `/api/cms/tags/tag/id`,
            params: { id: TagPrimaryKey.id },
        }, { apiName: this.apiName });
        this.getListByTagGetList = (TagGetList) => this.restService.request({
            method: 'GET',
            url: `/api/cms/tags/tag`,
            params: { fields: TagGetList.fields, value: TagGetList.value, sorting: TagGetList.sorting, skipCount: TagGetList.skipCount, maxResultCount: TagGetList.maxResultCount },
        }, { apiName: this.apiName });
        this.options = () => this.restService.request({
            method: 'OPTIONS',
            url: `/api/cms/tags`,
        }, { apiName: this.apiName });
        this.updateByTagPrimaryKeyAndTagUpdate = (TagPrimaryKey, TagUpdate) => this.restService.request({
            method: 'PUT',
            url: `/api/cms/tags/tag/id`,
            params: { id: TagPrimaryKey.id },
            body: TagUpdate,
        }, { apiName: this.apiName });
    }
}
TagsApiService.ɵfac = function TagsApiService_Factory(t) { return new (t || TagsApiService)(ɵɵinject(RestService)); };
TagsApiService.ɵprov = ɵɵdefineInjectable({ token: TagsApiService, factory: TagsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TagsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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

export { index$e as Fs };
//# sourceMappingURL=fs-tw-cms-proxy.js.map
