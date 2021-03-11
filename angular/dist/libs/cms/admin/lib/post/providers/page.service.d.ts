import { Fs } from '@fs-tw/cms/proxy';
import * as i0 from "@angular/core";
export declare class PageService {
    private blogService;
    private postService;
    constructor(blogService: Fs.Cms.Blogs.BlogsApiService, postService: Fs.Cms.Posts.PostsApiService);
    getBlogs(input: Fs.Cms.Blogs.Dtos.BlogGetListDto): import("rxjs").Observable<import("@abp/ng.core").PagedResultDto<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>>;
    getBlogById(id: string): import("rxjs").Observable<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>;
    createBlog(input: Fs.Cms.Blogs.Dtos.BlogCreateDto): import("rxjs").Observable<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>;
    updateBlog(id: string, input: Fs.Cms.Blogs.Dtos.BlogUpdateDto): import("rxjs").Observable<Fs.Cms.Blogs.Dtos.BlogWithDetailsDto>;
    getPostsByBlogId(input: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput): import("rxjs").Observable<import("@abp/ng.core").PagedResultDto<Fs.Cms.Posts.Dtos.PostWithDetailsDto>>;
    static ɵfac: i0.ɵɵFactoryDef<PageService, never>;
    static ɵprov: i0.ɵɵInjectableDef<PageService>;
}
//# sourceMappingURL=page.service.d.ts.map