import { Injectable } from '@angular/core';
import { Fs } from '@fs-tw/cms/proxy';
import * as i0 from "@angular/core";
import * as i1 from "@fs-tw/cms/proxy";
export class PageService {
    constructor(blogService, postService
    // private postService: PostsApiService,
    // private definitionsService: DefinitionsService,
    // private tagsApiService: TagsApiService,
    ) {
        this.blogService = blogService;
        this.postService = postService;
    }
    //#region  Blog
    getBlogs(input) {
        return this.blogService.getListByBlogGetList(input);
    }
    getBlogById(id) {
        return this.blogService.getByBlogPrimaryKey({ id: id });
    }
    createBlog(input) {
        return this.blogService.createByBlogCreate(input);
    }
    updateBlog(id, input) {
        return this.blogService.updateByBlogPrimaryKeyAndBlogUpdate({ id: id }, input);
    }
    //#endregion
    //#region Post
    getPostsByBlogId(input) {
        return this.postService.getPostsByBlogIdByInput(input);
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(i0.ɵɵinject(i1.Fs.Cms.Blogs.BlogsApiService), i0.ɵɵinject(i1.Fs.Cms.Posts.PostsApiService)); };
PageService.ɵprov = i0.ɵɵdefineInjectable({ token: PageService, factory: PageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageService, [{
        type: Injectable
    }], function () { return [{ type: i1.Fs.Cms.Blogs.BlogsApiService }, { type: i1.Fs.Cms.Posts.PostsApiService }]; }, null); })();
//# sourceMappingURL=page.service.js.map