import { Injector, Injectable } from '@angular/core';
import { Fs, Volo } from '@fs-tw/cms/proxy';
// @dynamic
export class PageService {
    constructor(injector) {
        this.injector = injector;
        this.blogService = injector.get(Fs.Cms.Blogs.BlogsApiService);
        this.postService = injector.get(Fs.Cms.Posts.PostsApiService);
        this.directoriesApiService = injector.get(Fs.Abp.File.Directories.DirectoriesApiService);
        this.fileDescriptorService = injector.get(Volo.FileManagement.Files.FileDescriptorService);
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
    deleteBlog(id) {
        return this.blogService.deleteByBlogPrimaryKey({ id });
    }
    //#endregion
    //#region File
    findByProviderByKeyAndGroup(key, group) {
        return this.directoriesApiService.findByProviderByKeyAndGroup(key, group);
    }
    deleteFile(id) {
        return this.fileDescriptorService.deleteById(id);
    }
    getFileDescriptor(id) {
        return this.fileDescriptorService.getById(id);
    }
    //#endregion
    //#region Post
    getPostsByBlogId(input) {
        return this.postService.getPostsByBlogIdByInput(input);
    }
    getPostById(id) {
        return this.postService.getByPostPrimaryKey({ id: id });
    }
    createPost(input) {
        return this.postService.createByPostCreate(input);
    }
    updatePost(id, input) {
        return this.postService.updateByPostPrimaryKeyAndPostUpdate({ id: id }, input);
    }
    deletePost(id) {
        return this.postService.deleteByPostPrimaryKey({ id });
    }
}
PageService.decorators = [
    { type: Injectable }
];
PageService.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=page.service.js.map