import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import * as _ from 'lodash';

@Component({
  selector: 'fs-tw-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  blogs: Array<Volo.CmsKit.Admin.Blogs.BlogDto>;
  selectedBlogId: string;

  constructor(
    @Inject(Volo.CmsKit.Admin.Blogs.BlogAdminService) 
    public blogService: Volo.CmsKit.Admin.Blogs.BlogAdminService
  ) {
    this.blogService.getList({ maxResultCount: 999 }).subscribe(x => {
      if(!x) return;
      this.blogs = x.items;
      this.selectedBlogId = _.head(x.items)?.id;
    })
  }

  ngOnInit(): void {
  }

  selectBlog($event) {
    this.selectedBlogId = this.blogs[$event].id;
  }
}
