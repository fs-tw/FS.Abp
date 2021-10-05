import { Component, Injectable, Injector, OnInit } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { FormControl, FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import {
  MEDIA_DESCRIPTORS_CREATE_FORM_PROPS,
  MEDIA_DESCRIPTORS_EDIT_FORM_PROPS,
  MEDIA_DESCRIPTORS_ENTITY_ACTIONS,
  MEDIA_DESCRIPTORS_ENTITY_PROPS,
  MEDIA_DESCRIPTORS_TOOLBAR_ACTIONS,
} from './defaults/index';
import type { PagedResultDto } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  constructor(
    private readonly injector: Injector,
  ) {
  }

  getList():
    Observable<PagedResultDto<any>>
  {
    return of(null);
  }
}

@Component({
  selector: 'fs-tw-media-descriptors',
  templateUrl: './media-descriptors.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: MediaDescriptorsComponent.NAME,
    },
  ],
})
export class MediaDescriptorsComponent implements OnInit {
  public static NAME: string = 'MediaDescriptors.MediaDescriptorsComponent';
  service: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorAdminService;
  getService: ComponentService;
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, MediaDescriptorsComponent.NAME, {
        entityAction: MEDIA_DESCRIPTORS_ENTITY_ACTIONS,
        toolbarActions: MEDIA_DESCRIPTORS_TOOLBAR_ACTIONS,
        entityProps: MEDIA_DESCRIPTORS_ENTITY_PROPS,
        createFormProps: MEDIA_DESCRIPTORS_CREATE_FORM_PROPS,
        editFormProps: MEDIA_DESCRIPTORS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
          case 'Create':
            this.onAdd();
            break;
          case 'Edit':
            break;
          case 'Delete':
            this.delete(x.data.record.id, x.data.record.name);
            break;
        }
      })
    );
    this.service = this.injector.get(Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorAdminService);
    this.getService = this.injector.get(ComponentService);
  }

  ngOnInit(): void {}

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Admin.MediaDescriptors.CreateMediaInputWithStream
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  create(formValue) {
    this.service
      .create("BlogPost", formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('CmsKit::MediaDescriptorDeletionConfirmationMessage', 'CmsKit::AreYouSure', {
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
