import {
  Component,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import {
  BehaviorSubject,
  combineLatest,
  Subscription,
} from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  filter,
  mergeMap,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import {
  ExtensionsStore,
  setDefaults,
} from '@fs-tw/components/extensions';
import {
  AddToolbarAction,
  PAGES_CREATE_FORM_PROPS,
  PAGES_EDIT_FORM_PROPS,
  PAGES_ENTITY_PROPS,
  PAGES_TOOLBAR_ACTIONS,
} from './defaults/index';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import { MultiLingualModalComponent } from '@fs-tw/components/multi-lingual';
import { ImagePicker, ImagePickerModalComponent } from '@fs-tw/components/image-picker';

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
  
  @ViewChild(ImagePickerModalComponent) pageImage: ImagePickerModalComponent;

  public static NAME: string = 'Volo.CmsKit.Pages.Page';
  public EntityType = 'Volo.CmsKit.Pages.Page';
  public ShortEntityType = 'Page';
  public apiService: Volo.CmsKit.Admin.Pages.PageAdminService;

  subs: Subscription = new Subscription();
  feature: Array<string>;

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Pages.PageDto;
  ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  searchForm: FormGroup = this.fb.group({});
  pageImageInfo: ImagePicker.ImageFile[] = [];
  constructor(
    private fb: FormBuilder,
    private readonly injector: Injector,
    public readonly list: ListService,
    public entityTypeStore: EntityTypeStore,
    private confirmationService: ConfirmationService
  ) {
    this.apiService = injector.get(Volo.CmsKit.Admin.Pages.PageAdminService);
    this.entityTypeStore = injector.get(EntityTypeStore);
    let extensionsStore = injector.get(ExtensionsStore);
    
    let setDefaults$ = combineLatest([
      this.entityTypeStore.getEntityTypeByType$(this.EntityType, this.ShortEntityType),
    ]).pipe(
        mergeMap(([entityType]) => {
        this.searchForm = this.fb.group({ filter: "" });

        this.feature = entityType.map((y) => y.name);
        let result = extensionsStore.setDefaults<Volo.CmsKit.Admin.Pages.PageDto>(
          PagesComponent.NAME,
          {
            entityAction: AddToolbarAction(this.feature),
            toolbarActions: PAGES_TOOLBAR_ACTIONS,
            entityProps: PAGES_ENTITY_PROPS,
            createFormProps: PAGES_CREATE_FORM_PROPS,
            editFormProps: PAGES_EDIT_FORM_PROPS,
          },
          { shortEntityType: this.ShortEntityType }
        );
        this.ready$.next(true);
        return result;
      }),
      tap((x) => {
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

    this.subs.add(setDefaults$.subscribe());
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
      ...this.editForm.value,
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
    switch(method) {
      case "MultiLingual":
        this.multiLingualModal.openModal(entityId);
        break;
      case "MediaDescriptor":
        this.generatorMediaDescriptor(entityId);
        break;
    }
  }

  generatorMediaDescriptor(entityId: string) {
    this.apiService
      .get(entityId)
      .pipe(take(1))
      .pipe(
        tap((selected) => {
          this.pageImageInfo = [];
          this.pageImage.initBehaviorSubject();
          this.subs.add(
            this.pageImage.openModal().subscribe(x => {
              if(!x) return;
              this.saveImageToBlogPost(entityId, x);
            })
          );
        })
      )
      .subscribe((x) => {
      });
  }

  saveImageToBlogPost(entityId: string, imageIds: string[]) {
    this.apiService
      .get(entityId)
      .pipe(take(1))
      .pipe(
        mergeMap((selected) => {
          const request = { ...selected } as Volo.CmsKit.Admin.Pages.UpdatePageInputDto;
          return this.apiService.update(entityId, request).pipe(take(1));
        })
      )
      .subscribe((x) => {
        this.list.get();
      });
  }
}
