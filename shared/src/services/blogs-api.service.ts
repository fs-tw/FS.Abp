import { Injectable, Injector } from '@angular/core';
import { Fs } from '@fs-tw/proxy/cms-kit-management';

@Injectable({
  providedIn: 'root',
})
export class BlogsApiService {
  public Blogs: Fs.CmsKitManagement.Blogs.BlogsApiService;
  public BlogPostsQuerys: Fs.CmsKitManagement.Blogs.BlogPostsQuerysApiService;
  public BlogPostsCommands: Fs.CmsKitManagement.Blogs.BlogPostsCommandsApiService;
  public BlogsQuerys: Fs.CmsKitManagement.Blogs.BlogsQuerysApiService;

  constructor(private injector: Injector) {
    this.Blogs = injector.get(Fs.CmsKitManagement.Blogs.BlogsApiService);
    this.BlogPostsQuerys = injector.get(
      Fs.CmsKitManagement.Blogs.BlogPostsQuerysApiService
    );
    this.BlogPostsCommands = injector.get(
      Fs.CmsKitManagement.Blogs.BlogPostsCommandsApiService
    );
    this.BlogsQuerys = injector.get(
      Fs.CmsKitManagement.Blogs.BlogsQuerysApiService
    );
  }
}
