import { Component, Injector, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import {
  setContributors,
  setDefaults,
} from '@fs-tw/theme-alain/shared/extensions';
import { COMMENTS_CREATE_FORM_PROPS, COMMENTS_EDIT_FORM_PROPS, COMMENTS_ENTITY_ACTIONS, COMMENTS_ENTITY_PROPS, COMMENTS_TOOLBAR_ACTIONS } from './defaults/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
  subs: Subscription = new Subscription();
  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Pages.PageDto;
  constructor(
    private readonly injector: Injector,
    public readonly list: ListService
  ) {
    this.subs.add(
      setDefaults(injector, CommentsComponent.NAME, {
        entityAction: COMMENTS_ENTITY_ACTIONS,
        toolbarActions: COMMENTS_TOOLBAR_ACTIONS,
        entityProps: COMMENTS_ENTITY_PROPS,
        createFormProps: COMMENTS_CREATE_FORM_PROPS,
        editFormProps: COMMENTS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
          case 'Create':
            break;
          case 'Edit':
            break;
          case 'Delete':
            break;
        }
      })
    );
    this.service = injector.get(Volo.CmsKit.Admin.Comments.CommentAdminService);
  }

  ngOnInit(): void {}
}
