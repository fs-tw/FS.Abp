import { Component, Injector, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import {
  setDefaults,
  setContributors,
} from '@fs-tw/theme-alain/shared/extensions';
import { DEFAULT_TAGS_ENTITY_PROPS } from './defaults/index';

@Component({
  selector: 'fs-tw-tags',
  templateUrl: './tags.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: TagsComponent.NAME,
    },
  ],
})
export class TagsComponent implements OnInit {
  public static NAME: string = 'Tags.TagsComponent';
  service: Volo.CmsKit.Admin.Tags.TagAdminService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService
  ) {
    setDefaults(injector, TagsComponent.NAME, {
      entityProps: DEFAULT_TAGS_ENTITY_PROPS,
    });
    this.service = injector.get(Volo.CmsKit.Admin.Tags.TagAdminService);
  }

  ngOnInit(): void {}
}
