import { Component, OnInit, Injector } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';

@Component({
  selector: 'fs-tw-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: BlogPostsComponent.NAME,
    },
  ]
})
export class BlogPostsComponent implements OnInit {
  public static NAME: string = 'BlogPosts.BlogPostsComponent';
  service: Volo.CmsKit.Admin.Blogs.BlogPostAdminService;
  constructor(
    injector: Injector,
    public readonly list: ListService,
  ) {
    this.service = injector.get(Volo.CmsKit.Admin.Blogs.BlogPostAdminService);
  }

  ngOnInit(): void {
  }
}
