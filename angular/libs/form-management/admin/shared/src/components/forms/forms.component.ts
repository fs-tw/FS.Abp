import { Component, Injector, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/form-management/proxy';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Observable, Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { setDefaults } from '@fs-tw/theme-alain/shared/extensions';
import {
  FORMS_TOOLBAR_ACTIONS,
  FORMS_ENTITY_ACTIONS,
  FORMS_ENTITY_PROPS,
  FORMS_CREATE_FORM_PROPS,
  FORMS_EDIT_FORM_PROPS,
} from './defaults';

@Component({
  selector: 'fs-tw-forms',
  templateUrl: './forms.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: FormsComponent.NAME,
    },
  ],
})
export class FormsComponent implements OnInit {
  public static NAME: string = 'FromManagement:FormsComponent';

  data$: Observable<PagedResultDto<Volo.Forms.Forms.FormDto>>;
  service: Volo.Forms.Forms.FormService;
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.Forms.Forms.FormDto;

  streamCreator = (q) => {
    return this.service.getListByInput(q);
  };

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    this.subs.add(
      setDefaults(injector, FormsComponent.NAME, {
        entityAction: FORMS_ENTITY_ACTIONS,
        toolbarActions: FORMS_TOOLBAR_ACTIONS,
        entityProps: FORMS_ENTITY_PROPS,
        editFormProps: FORMS_EDIT_FORM_PROPS,
        createFormProps: FORMS_CREATE_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
          case 'Create':
            this.onAdd();
            break;
          case 'Edit':
            this.onEdit(x.data.record.id);
            break;
          case 'Delete':
            this.delete(x.data.record.id);
            break;
        }
      })
    );
    this.service = this.injector.get(Volo.Forms.Forms.FormService);
  }

  ngOnInit(): void {
    this.data$ = this.list.hookToQuery(this.streamCreator);
  }

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.Forms.Forms.CreateFormDto
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  create(formValue) {
    this.service
      .createByInput(formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service
      .getById(id)
      .pipe(take(1))
      .pipe(
        tap((selected) => {
          this.editSelectedRecord = selected;
          const data = new FormPropData(this.injector, selected);
          this.editForm = generateFormFromProps(data);
        })
      )
      .subscribe((x) => {
        this.editModalVisible = true;
      });
  }
  edit(formValue) {
    const request: Volo.Forms.Forms.UpdateFormDto = {
      ...formValue,
    };

    this.service
      .updateByIdAndInput(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string) {
    this.confirmationService
      .warn('Forms::FormDeletionConfirmationMessage', 'CmsKit::AreYouSure')
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.service.deleteById(id)),
        take(1)
      )
      .subscribe((_) => {
        this.list.get();
      });
  }
}
