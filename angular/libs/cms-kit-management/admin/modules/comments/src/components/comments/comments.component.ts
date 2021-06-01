import { Component, Injector, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import {
  setContributors,
  setDefaults,
} from '@fs-tw/theme-alain/shared/extensions';
import { DEFAULT_COMMENTS_ENTITY_PROPS } from './defaults/index';

@Component({
  selector: 'fs-tw-comments',
  templateUrl: './comments.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: CommentsComponent.NAME,
    },
  ],
})
export class CommentsComponent implements OnInit {
  public static NAME: string = 'Comments.CommentsComponent';
  service: Volo.CmsKit.Admin.Comments.CommentAdminService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService
  ) {
    setDefaults(injector, CommentsComponent.NAME, {
      entityProps: DEFAULT_COMMENTS_ENTITY_PROPS,
    });
    this.service = injector.get(Volo.CmsKit.Admin.Comments.CommentAdminService);
  }

  ngOnInit(): void {}
}
