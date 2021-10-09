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
    CONTENT_DEFINITION_CREATE_FORM_PROPS,
    CONTENT_DEFINITION_EDIT_FORM_PROPS,
    CONTENT_DEFINITION_ENTITY_ACTIONS,
    CONTENT_DEFINITION_ENTITY_PROPS,
    CONTENT_DEFINITION_TOOLBAR_ACTIONS,
    GetDefaults,
} from './defaults/index';
import type { PagedResultDto } from '@abp/ng.core';
import { EntityService } from '@fs-tw/components/page';

class ComponentService implements EntityService<
  Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto
> {
  constructor(
    private readonly injector: Injector,
  ) {}

  getList(ContentDefinition: Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionGetListDto):
    Observable<PagedResultDto<Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionWithDetailsDto>>
  {
    let service = this.injector.get(Fs.CmsKitManagement.Contents.ContentsApiService);
    return service.getListByContentDefinition(ContentDefinition);
  }
}

@Component({
  selector: 'fs-tw-content-definition',
  templateUrl: './content-definition.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: ContentDefinitionComponent.NAME,
    },
  ],
})
export class ContentDefinitionComponent implements OnInit {
  public static NAME: string = 'Contents.ContentDefinitionComponent';
  subs: Subscription = new Subscription();
  service: ComponentService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.service = new ComponentService(this.injector);

    let apiInput = {} as Fs.CmsKitManagement.Contents.Dtos.ContentDefinitionGetListDto;
    this.service.getList(apiInput).subscribe(x => {
      this.subs.add(
        setDefaults(injector, ContentDefinitionComponent.NAME, {
          entityAction: CONTENT_DEFINITION_ENTITY_ACTIONS,
          toolbarActions: CONTENT_DEFINITION_TOOLBAR_ACTIONS,
          entityProps: GetDefaults(x),
          createFormProps: CONTENT_DEFINITION_CREATE_FORM_PROPS,
          editFormProps: CONTENT_DEFINITION_EDIT_FORM_PROPS,
        }).subscribe((x) => {
          switch (x.method) {
          }
        })
      );
    });
  }

  ngOnInit(): void {
  }
}
