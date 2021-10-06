import { Component, Injectable, Injector, OnInit } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Fs } from '@fs-tw/cms-kit-management/proxy/cms-kit-management';
import { FormControl, FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import {
  ATTACH_MENTMEDIA_CREATE_FORM_PROPS,
  ATTACH_MENTMEDIA_EDIT_FORM_PROPS,
  ATTACH_MENTMEDIA_ENTITY_ACTIONS,
  ATTACH_MENTMEDIA_ENTITY_PROPS,
  ATTACH_MENTMEDIA_TOOLBAR_ACTIONS,
} from './defaults/index';
import type { PagedResultDto } from '@abp/ng.core';
import { EntityService } from '@fs-tw/components/page';

class ComponentService implements EntityService<
  Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto
> {
  constructor(
    private readonly injector: Injector,
  ) {}

  getList(AttachmentMedia: Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaGetListDto):
    Observable<PagedResultDto<Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto>>
  {
    let service = this.injector.get(Fs.CmsKitManagement.MediaDescriptors.MediaDescriptorsApiService);
    return service.getListByAttachmentMedia(AttachmentMedia);
  }
}

@Component({
  selector: 'fs-tw-attachment-media',
  templateUrl: './attachment-media.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: AttachmentMediaComponent.NAME,
    },
  ],
})
export class AttachmentMediaComponent implements OnInit {
  public static NAME: string = 'MediaDescriptors.AttachmentMediaComponent';
  service: ComponentService;
  subs: Subscription = new Subscription();

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, AttachmentMediaComponent.NAME, {
        entityAction: ATTACH_MENTMEDIA_ENTITY_ACTIONS,
        toolbarActions: ATTACH_MENTMEDIA_TOOLBAR_ACTIONS,
        entityProps: ATTACH_MENTMEDIA_ENTITY_PROPS,
        createFormProps: ATTACH_MENTMEDIA_CREATE_FORM_PROPS,
        editFormProps: ATTACH_MENTMEDIA_EDIT_FORM_PROPS,
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
    this.service = new ComponentService(this.injector);
  }

  ngOnInit(): void {}
}
