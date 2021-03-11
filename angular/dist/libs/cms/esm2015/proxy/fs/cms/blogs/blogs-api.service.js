import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class BlogsApiService {
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
BlogsApiService.ɵfac = function BlogsApiService_Factory(t) { return new (t || BlogsApiService)(i0.ɵɵinject(i1.RestService)); };
BlogsApiService.ɵprov = i0.ɵɵdefineInjectable({ token: BlogsApiService, factory: BlogsApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlogsApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RestService }]; }, null); })();
//# sourceMappingURL=blogs-api.service.js.map