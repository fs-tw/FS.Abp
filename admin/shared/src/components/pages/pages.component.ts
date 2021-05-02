import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { Observable, Subscription } from 'rxjs';
import {
  ExtensionsService,
  eCmsKitComponents,
} from '@fs-tw/cms-kit-management/config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, switchMap, take } from 'rxjs/operators';

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
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Pages.PageDto;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private extensionsService: ExtensionsService,
    private confirmationService: ConfirmationService
  ) {
    this.service = this.injector.get(Volo.CmsKit.Admin.Pages.PageAdminService);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subs.add(
      this.extensionsService.Actions$[eCmsKitComponents.Pages].subscribe(
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
  }

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Admin.Pages.PageDto
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
      .subscribe((selected) => {
        this.editSelectedRecord = selected;
        const data = new FormPropData(this.injector, selected);
        this.editForm = generateFormFromProps(data);

        this.editModalVisible = true;
      });
  }
  edit(formValue) {
    const request: Volo.CmsKit.Admin.Pages.UpdatePageInputDto = {
      ...formValue
    };
    this.service
      .updateByIdAndInput(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe(_ => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string) {
    this.confirmationService
      .warn(
        'CmsKit::PageDeletionConfirmationMessage',
        'CmsKit::AreYouSure'
      )
      .pipe(
        filter(status => status === Confirmation.Status.confirm),
        switchMap(_ => this.service.deleteById(id)),
        take(1),
      )
      .subscribe(_ => {
        this.list.get();
      });
  }
}
