import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { Observable, Subscription } from 'rxjs';
import {
  ExtensionsService,
  eCmsKitComponents,
} from '@fs-tw/cms-kit-management/config';

@Component({
  selector: 'fs-tw-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsKitComponents.Pages,
    },
  ],
})
export class PagesComponent implements OnInit, OnDestroy {
  service: Volo.CmsKit.Admin.Pages.PageAdminService;
  subs: Subscription[] = [];

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private extensionsService: ExtensionsService
  ) {
    this.service = this.injector.get(Volo.CmsKit.Admin.Pages.PageAdminService);
  }
  ngOnDestroy(): void {
    this.subs.forEach((x) => {
      x.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.subs.push(
      this.extensionsService.Action$[eCmsKitComponents.Pages].subscribe((x) => {
        console.log(x);
      })
    );
  }
}
