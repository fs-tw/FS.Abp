import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class PostsApiService {
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
PostsApiService.ɵfac = function PostsApiService_Factory(t) { return new (t || PostsApiService)(i0.ɵɵinject(i1.RestService)); };
PostsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: PostsApiService, factory: PostsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=posts-api.service.js.map