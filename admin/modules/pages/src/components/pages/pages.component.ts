import { Component, Inject, Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { filter, switchMap, take } from 'rxjs/operators';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import {
  AddToolbarAction,
  PAGES_CREATE_FORM_PROPS,
  PAGES_EDIT_FORM_PROPS,
  PAGES_ENTITY_PROPS,
  PAGES_TOOLBAR_ACTIONS,
} from './defaults/index';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import { MultiLingualModalComponent } from '@fs-tw/components/multi-lingual';

@Component({
  selector: 'fs-tw-pages',
  templateUrl: './pages.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: PagesComponent.NAME,
    },
  ],
})
export class PagesComponent implements OnInit, OnDestroy {
  @ViewChild(MultiLingualModalComponent)
  multiLingualModal: MultiLingualModalComponent<Volo.CmsKit.Admin.Pages.PageDto>;

  public static NAME: string = 'Pages.PagesComponent';
  public EntityType = "Volo.CmsKit.Pages.Page";
  public EntityId: string;
  public apiService: Volo.CmsKit.Admin.Pages.PageAdminService;
  
  subs: Subscription = new Subscription();
  feature: Array<string>;

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Pages.PageDto;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    public entityTypeService: EntityTypeStore,
    private confirmationService: ConfirmationService,
  ) {
    this.apiService = injector.get(Volo.CmsKit.Admin.Pages.PageAdminService);
    this.entityTypeService = injector.get(EntityTypeStore);

    this.subs.add(this.entityTypeService.getEntityTypeByType$(this.EntityType).subscribe(x => {
      this.feature = x.map(y => y.name);
      this.subs.add(
        setDefaults(injector, PagesComponent.NAME, {
          entityAction: AddToolbarAction(this.feature),
          toolbarActions: PAGES_TOOLBAR_ACTIONS,
          entityProps: PAGES_ENTITY_PROPS,
          createFormProps: PAGES_CREATE_FORM_PROPS,
          editFormProps: PAGES_EDIT_FORM_PROPS,
        }).subscribe((x) => {
          switch (x.method) {
            case 'Create':
              this.onAdd();
              break;
            case 'Edit':
              this.onEdit(x.data.record.id);
              break;
            case 'Delete':
              this.delete(x.data.record.id, x.data.record.title);
              break;
            default:
              this.featureFunction(x.method, x.data.record.id);
              break;
          }
        })
      );
    }));
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {}

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Admin.Pages.PageDto
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  create(formValue) {
    this.apiService
      .create(formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.apiService
      .get(id)
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
      ...formValue,
    };
    this.apiService
      .update(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, title: string) {
    this.confirmationService
      .warn('CmsKit::PageDeletionConfirmationMessage', 'CmsKit::AreYouSure', {
        messageLocalizationParams: [title],
      })
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.apiService.delete(id)),
        take(1)
      )
      .subscribe((_) => {
        this.list.get();
      });
  }

  featureFunction(method: string, entityId: string) {
    this.EntityId = entityId;
    this.multiLingualModal.openModal();
  }
}
