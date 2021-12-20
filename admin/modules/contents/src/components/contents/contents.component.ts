import { Component, Inject, Injector, OnInit } from '@angular/core';
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
import { setDefaults } from '@fs-tw/components/extensions';
import {
  CONTENTS_CREATE_FORM_PROPS,
  CONTENTS_EDIT_FORM_PROPS,
  CONTENTS_ENTITY_ACTIONS,
  CONTENTS_ENTITY_PROPS,
  CONTENTS_TOOLBAR_ACTIONS,
} from './defaults/index';

// class ComponentService
//   implements
//     EntityService<
//       Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto
//     >
// {
//   constructor(private readonly service: Fs.CmsKitManagement.Contents.EntityContentCrudService) {}

//   getList(
//     Content: Fs.CmsKitManagement.Contents.Dtos.EntityContentGetListDto
//   ): Observable<
//     PagedResultDto<Fs.CmsKitManagement.Contents.Dtos.EntityContentWithDetailsDto>
//   > {
//     return this.service.getList(Content);
//   }
// }

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
  // componentService: ComponentService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    @Inject(Fs.CmsKitManagement.Contents.EntityContentCrudService) 
    public readonly service :Fs.CmsKitManagement.Contents.EntityContentCrudService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, ContentsComponent.NAME, {
        entityAction: CONTENTS_ENTITY_ACTIONS,
        toolbarActions: CONTENTS_TOOLBAR_ACTIONS,
        entityProps: CONTENTS_ENTITY_PROPS,
        createFormProps: CONTENTS_CREATE_FORM_PROPS,
        editFormProps: CONTENTS_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
        }
      })
    );

    // this.componentService = new ComponentService(service);
  }

  ngOnInit(): void {}
}
