import { RestService, mapEnumToOptions } from '@abp/ng.core';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';

var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index
});

// import type { DirectoryDescriptorDto } from '../../../../../volo/file-management/directories/models';

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

class DirectoriesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.findByProviderByKeyAndGroup = (key, group) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/provider/${key}`,
            params: { group: group },
        }, { apiName: this.apiName });
        this.getDefinitions = () => this.restService.request({
            method: 'GET',
            url: `/api/file-management/directory-descriptor/definitions`,
        }, { apiName: this.apiName });
    }
}
DirectoriesApiService.ɵfac = function DirectoriesApiService_Factory(t) { return new (t || DirectoriesApiService)(ɵɵinject(RestService)); };
DirectoriesApiService.ɵprov = ɵɵdefineInjectable({ token: DirectoriesApiService, factory: DirectoriesApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DirectoriesApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dtos: index$2,
    DirectoriesApiService: DirectoriesApiService
});

// import type { IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
class FilesApiService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'Default';
        this.getContentById = (id) => this.restService.request({
            method: 'GET',
            url: `/api/file-management/file-descriptor/file-content`,
            params: { id: id },
        }, { apiName: this.apiName });
    }
}
FilesApiService.ɵfac = function FilesApiService_Factory(t) { return new (t || FilesApiService)(ɵɵinject(RestService)); };
FilesApiService.ɵprov = ɵɵdefineInjectable({ token: FilesApiService, factory: FilesApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FilesApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

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
    __proto__: null,
    Abp: index$6,
    Cms: index$h
});

var index$j = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Mvc: index$j
});

var index$l = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AspNetCore: index$k
});

var index$m = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var index$n = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Content: index$m
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
DirectoryDescriptorService.ɵfac = function DirectoryDescriptorService_Factory(t) { return new (t || DirectoryDescriptorService)(ɵɵinject(RestService)); };
DirectoryDescriptorService.ɵprov = ɵɵdefineInjectable({ token: DirectoryDescriptorService, factory: DirectoryDescriptorService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DirectoryDescriptorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

var index$o = /*#__PURE__*/Object.freeze({
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
FileDescriptorService.ɵfac = function FileDescriptorService_Factory(t) { return new (t || FileDescriptorService)(ɵɵinject(RestService)); };
FileDescriptorService.ɵprov = ɵɵdefineInjectable({ token: FileDescriptorService, factory: FileDescriptorService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FileDescriptorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: RestService }]; }, null); })();

var FileIconType;
(function (FileIconType) {
    FileIconType[FileIconType["FontAwesome"] = 0] = "FontAwesome";
    FileIconType[FileIconType["Url"] = 1] = "Url";
})(FileIconType || (FileIconType = {}));
const fileIconTypeOptions = mapEnumToOptions(FileIconType);

var index$p = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FileDescriptorService: FileDescriptorService,
    get FileIconType () { return FileIconType; },
    fileIconTypeOptions: fileIconTypeOptions
});

var index$q = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Directories: index$o,
    Files: index$p
});

var index$r = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Abp: index$n,
    FileManagement: index$q
});

/**
 * Generated bundle index. Do not edit.
 */

export { index$i as Fs, index$l as Microsoft, index$r as Volo };
//# sourceMappingURL=fs-tw-cms-proxy.js.map
