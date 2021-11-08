import { Component, Injector, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import {
  setDefaults,
} from '@fs-tw/components/extensions';
import { TAGS_CREATE_FORM_PROPS, TAGS_EDIT_FORM_PROPS, TAGS_ENTITY_ACTIONS, TAGS_ENTITY_PROPS, TAGS_TOOLBAR_ACTIONS } from './defaults/index';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { filter, switchMap, take } from 'rxjs/operators';

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
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Tags.TagDto;
  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    this.subs.add(
      setDefaults(injector, TagsComponent.NAME, {
        entityAction: TAGS_ENTITY_ACTIONS,
        toolbarActions: TAGS_TOOLBAR_ACTIONS,
        entityProps: TAGS_ENTITY_PROPS,
        createFormProps: TAGS_CREATE_FORM_PROPS,
        editFormProps: TAGS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
          case 'Create':
            this.onAdd();
            break;
          case 'Edit':
            this.onEdit(x.data.record.id);
            break;
          case 'Delete':
            this.delete(x.data.record.id, x.data.record.name);
            break;
        }
      })
    );
    this.service = injector.get(Volo.CmsKit.Admin.Tags.TagAdminService);
  }

  ngOnInit(): void {}

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Tags.TagDto
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  create(formValue) {
    this.service
      .create(formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .subscribe((selected) => {
        this.editSelectedRecord = selected;
        const data = new FormPropData(this.injector, selected);
        this.editForm = generateFormFromProps(data);

        this.editModalVisible = true;
      });
  }
  edit(formValue) {
    const request: Volo.CmsKit.Admin.Tags.TagUpdateDto = {
      ...formValue,
    };
    this.service
      .update(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('CmsKit::TagDeletionConfirmationMessage', 'CmsKit::AreYouSure', {
        messageLocalizationParams: [name],
      })
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.service.delete(id)),
        take(1)
      )
      .subscribe((_) => {
        this.list.get();
      });
  }
}
