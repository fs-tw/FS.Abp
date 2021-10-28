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
import { setDefaults } from '@fs-tw/components/extensions';
import {
  SHAPES_CREATE_FORM_PROPS,
  SHAPES_EDIT_FORM_PROPS,
  SHAPES_ENTITY_ACTIONS,
  SHAPES_ENTITY_PROPS,
  SHAPES_TOOLBAR_ACTIONS,
} from './defaults/index';
import type { PagedResultDto } from '@abp/ng.core';
import { EntityService } from '@fs-tw/components/page';

class ComponentService
  implements
    EntityService<
      Fs.CmsKitManagement.MediaDescriptors.Dtos.AttachmentMediaWithDetailsDto
    >
{
  constructor(private readonly injector: Injector) {}

  getList(
    Shape: Fs.CmsKitManagement.Shapes.Dtos.ShapeGetListDto
  ): Observable<
    PagedResultDto<Fs.CmsKitManagement.Shapes.Dtos.ShapeWithDetailsDto>
  > {
    let service = this.injector.get(
      Fs.CmsKitManagement.Shapes.ShapesApiService
    );
    return service.getListByShape(Shape);
  }
}

@Component({
  selector: 'fs-tw-shapes',
  templateUrl: './shapes.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: ShapesComponent.NAME,
    },
  ],
})
export class ShapesComponent implements OnInit {
  public static NAME: string = 'Shapes.ShapesComponent';
  subs: Subscription = new Subscription();
  service: ComponentService;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    this.subs.add(
      setDefaults(injector, ShapesComponent.NAME, {
        entityAction: SHAPES_ENTITY_ACTIONS,
        toolbarActions: SHAPES_TOOLBAR_ACTIONS,
        entityProps: SHAPES_ENTITY_PROPS,
        createFormProps: SHAPES_CREATE_FORM_PROPS,
        editFormProps: SHAPES_EDIT_FORM_PROPS,
      }).subscribe((x) => {
        switch (x.method) {
        }
      })
    );

    this.service = new ComponentService(this.injector);
  }

  ngOnInit(): void {}
}
