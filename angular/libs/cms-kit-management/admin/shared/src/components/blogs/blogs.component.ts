import { Component, Injector, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { eCmsKitComponents } from '@fs-tw/cms-kit-management/config';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

@Component({
  selector: 'fs-tw-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsKitComponents.Blogs,
    },
  ]  
})
export class BlogsComponent implements OnInit {
  service: Volo.CmsKit.Admin.Blogs.BlogAdminService;

  constructor(
    private readonly injector:Injector,
    public readonly list: ListService
  ) {
    this.service=injector.get(Volo.CmsKit.Admin.Blogs.BlogAdminService);
  }

  ngOnInit(): void {
  }

}
