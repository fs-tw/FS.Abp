import { Injectable, Injector } from '@angular/core';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';

@Injectable({
  providedIn: 'root',
})
export class BlogsApiService {
  public BlogPostsQuerys: Fs.CmsKitManagement.Blogs.BlogPostsQuerysApiService;
  public BlogPostsCommands: Fs.CmsKitManagement.Blogs.BlogPostsCommandsApiService;
  public BlogsQuerys: Fs.CmsKitManagement.Blogs.BlogsQuerysApiService;

  constructor(private injector: Injector) {
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
