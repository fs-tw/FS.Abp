import { Component, Injector, Input, OnInit } from '@angular/core';
import { ListService,PagedResultDto } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { eFormsComponents,ExtensionsService } from '@fs-tw/form-management/config';
import { Volo } from '@fs-tw/form-management/proxy';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Observable, Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'fs-tw-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eFormsComponents.Form,
    },
  ],
})
export class FormsComponent implements OnInit {
  data$: Observable<PagedResultDto<Volo.Forms.Forms.FormDto>>;
  service: Volo.Forms.Forms.FormService;
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.Forms.Forms.FormDto;

  streamCreator=(q)=>{
    return this.service.getListByInput(q);
  }

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    private extensionsService: ExtensionsService
  ) {
    this.service = this.injector.get(Volo.Forms.Forms.FormService);

   }

  ngOnInit(): void {
    this.subs.add(
      this.extensionsService.Actions$[eFormsComponents.Form].subscribe(
        (x) => {
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
        }
      )
    );    

    this.data$=this.list.hookToQuery(this.streamCreator);
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
