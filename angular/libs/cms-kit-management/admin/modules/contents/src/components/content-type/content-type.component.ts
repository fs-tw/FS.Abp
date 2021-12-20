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
  CONTENT_TYPE_CREATE_FORM_PROPS,
  CONTENT_TYPE_EDIT_FORM_PROPS,
  CONTENT_TYPE_ENTITY_ACTIONS,
  CONTENT_TYPE_ENTITY_PROPS,
  CONTENT_TYPE_TOOLBAR_ACTIONS,
} from './defaults/index';
import type { PagedResultDto } from '@abp/ng.core';
import { EntityService } from '@fs-tw/components/page';

// class ComponentService
//   implements
//     EntityService<
//       Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto
//     >
// {
//   constructor(private readonly injector: Injector) {}

//   getList(
//     ContentType: Fs.CmsKitManagement.Contents.Dtos.ContentPropertyGetListDto
//   ): Observable<
//     PagedResultDto<Fs.CmsKitManagement.Contents.Dtos.ContentPropertyWithDetailsDto>
//   > {
//     let service = this.injector.get(
//       Fs.CmsKitManagement.Contents.ContentPropertyCrudService
//     );
//     return service.getList(ContentType);
//   }
// }

@Component({
  selector: 'fs-tw-content-type',
  templateUrl: './content-type.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: ContentTypeComponent.NAME,
    },
  ],
})
export class ContentTypeComponent implements OnInit {
  public static NAME: string = 'Contents.ContentTypeComponent';
  subs: Subscription = new Subscription();
  //service: ComponentService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    @Inject(Fs.CmsKitManagement.Contents.ContentPropertyCrudService)
    public service:Fs.CmsKitManagement.Contents.ContentPropertyCrudService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, ContentTypeComponent.NAME, {
        entityAction: CONTENT_TYPE_ENTITY_ACTIONS,
        toolbarActions: CONTENT_TYPE_TOOLBAR_ACTIONS,
        entityProps: CONTENT_TYPE_ENTITY_PROPS,
        createFormProps: CONTENT_TYPE_CREATE_FORM_PROPS,
        editFormProps: CONTENT_TYPE_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
        }
      })
    );
  }

  ngOnInit(): void {}
}
