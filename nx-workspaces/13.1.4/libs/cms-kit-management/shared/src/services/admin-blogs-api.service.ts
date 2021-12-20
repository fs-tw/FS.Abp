import { Injectable, Injector } from '@angular/core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

@Injectable({
  providedIn: 'root',
})
export class AdminBlogsApiService {
  public BlogPost: Volo.CmsKit.Admin.Blogs.BlogPostAdminService = null;

  constructor(private injector: Injector) {
    this.BlogPost = injector.get(Volo.CmsKit.Admin.Blogs.BlogPostAdminService);
  }
}
