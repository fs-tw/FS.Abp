import { Component, Injector, OnInit } from '@angular/core';
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
    CONTENTS_CREATE_FORM_PROPS,
    CONTENTS_EDIT_FORM_PROPS,
    CONTENTS_ENTITY_ACTIONS,
    CONTENTS_ENTITY_PROPS,
    CONTENTS_TOOLBAR_ACTIONS,
} from './defaults/index';
import type { PagedResultDto } from '@abp/ng.core';
import { EntityService } from '@fs-tw/components/page';

class ComponentService implements EntityService<
  Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto
> {
  constructor(
    private readonly injector: Injector,
  ) {}

  getList(Content: Fs.CmsKitManagement.Contents.Dtos.ContentGetListDto):
    Observable<PagedResultDto<Fs.CmsKitManagement.Contents.Dtos.ContentWithDetailsDto>>
  {
    let service = this.injector.get(Fs.CmsKitManagement.Contents.ContentsApiService);
    return service.getListByContent(Content);
  }
}

@Component({
  selector: 'fs-tw-contents',
  templateUrl: './contents.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: ContentsComponent.NAME,
    },
  ],
})
export class ContentsComponent implements OnInit {
  public static NAME: string = 'Contents.ContentsComponent';
  subs: Subscription = new Subscription();
  service: ComponentService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, ContentsComponent.NAME, {
        entityAction:  CONTENTS_ENTITY_ACTIONS,
        toolbarActions:  CONTENTS_TOOLBAR_ACTIONS,
        entityProps:  CONTENTS_ENTITY_PROPS,
        createFormProps:  CONTENTS_CREATE_FORM_PROPS,
        editFormProps:  CONTENTS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
        }
      })
    );

    this.service = new ComponentService(this.injector);
  }

  ngOnInit(): void {
  }
}
