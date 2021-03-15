import { Injector } from '@angular/core';
import { Fs, Volo } from '@fs-tw/cms/proxy';
export declare class PageService {
    private injector;
    private blogService;
    private postService;
    private directoriesApiService;
    private fileDescriptorService;
    constructor(injector: Injector);
    getBlogs(input: Fs.Cms.Blogs.Dtos.BlogGetListDto): import("rxjs").Observable<import("@abp/ng.core").PagedResultDto<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>>;
    getBlogById(id: string): import("rxjs").Observable<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>;
    createBlog(input: Fs.Cms.Blogs.Dtos.BlogCreateDto): import("rxjs").Observable<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>;
    updateBlog(id: string, input: Fs.Cms.Blogs.Dtos.BlogUpdateDto): import("rxjs").Observable<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>;
    deleteBlog(id: string): import("rxjs").Observable<void>;
    findByProviderByKeyAndGroup(key: string, group?: string): import("rxjs").Observable<any>;
    deleteFile(id: string): import("rxjs").Observable<void>;
    getFileDescriptor(id: string): import("rxjs").Observable<Volo.FileManagement.Files.FileDescriptorDto>;
    getPostsByBlogId(input: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput): import("rxjs").Observable<import("@abp/ng.core").PagedResultDto<Fs.Cms.Posts.Dtos.PostWithDetailsDto>>;
    getPostById(id: string): import("rxjs").Observable<Fs.Cms.Posts.Dtos.PostWithDetailsDto>;
    createPost(input: Fs.Cms.Posts.Dtos.PostCreateDto): import("rxjs").Observable<Fs.Cms.Posts.Dtos.PostWithDetailsDto>;
    updatePost(id: string, input: Fs.Cms.Posts.Dtos.PostUpdateDto): import("rxjs").Observable<Fs.Cms.Posts.Dtos.PostWithDetailsDto>;
    deletePost(id: string): import("rxjs").Observable<void>;
}
