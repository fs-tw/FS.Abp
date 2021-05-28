import { Component, Injector, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { eTagsComponents } from '../../enums/component-names';
import { Volo } from '@fs-tw/cms-kit-management/proxy';

@Component({
  selector: 'fs-tw-tags',
  templateUrl: './tags.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eTagsComponents.Tags,
    },
  ]    
})
export class TagsComponent implements OnInit {
  service: Volo.CmsKit.Admin.Tags.TagAdminService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService
  ) {
    this.service = injector.get(Volo.CmsKit.Admin.Tags.TagAdminService);
  }

  ngOnInit(): void {
  }

}
