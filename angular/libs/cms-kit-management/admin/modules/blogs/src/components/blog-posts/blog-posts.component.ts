import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { setDefaults } from '@fs-tw/components/extensions';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { AddBlogIdItems, AddToolbarAction, BLOG_POSTS_EDIT_FORM_PROPS, BLOG_POSTS_ENTITY_PROPS, BLOG_POSTS_TOOLBAR_ACTIONS } from './defaults';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { EntityTypeStore } from '@fs-tw/entity-type-management/config';
import { ImagePicker, ImagePickerModalComponent } from '@fs-tw/components/image-picker';
import { MultiLingualModalComponent } from '@fs-tw/components/multi-lingual';
import * as _ from 'lodash';
import { ExtensionsStore } from '@fs-tw/components/extensions';

@Component({
  selector: 'fs-tw-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: BlogPostsComponent.NAME,
    },
  ]
})
export class BlogPostsComponent implements OnInit {
  @ViewChild(MultiLingualModalComponent)
  multiLingualModal: MultiLingualModalComponent<Volo.CmsKit.Admin.Pages.PageDto>;
  
  @ViewChild(ImagePickerModalComponent) postImage: ImagePickerModalComponent;
  public static NAME: string = 'Blogs.BlogPostsComponent';
  public EntityType = 'Volo.CmsKit.Blogs.BlogPost';
  public ShortEntityType = 'BlogPost';
  blogService: Volo.CmsKit.Admin.Blogs.BlogAdminService;
  service: Volo.CmsKit.Admin.Blogs.BlogPostAdminService;
  subs: Subscription = new Subscription();
  feature: Array<string>;
  blogList: Array<{ name: string, id: string }>;

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Blogs.BlogPostDto;

  ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  searchForm: FormGroup = this.fb.group({ filter: "", blogId: null });

  blogPostImageInfo: ImagePicker.ImageFile[] = [];
  constructor(
    private fb: FormBuilder,
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    public entityTypeStore: EntityTypeStore,
  ) {
    this.blogService = injector.get(Volo.CmsKit.Admin.Blogs.BlogAdminService);
    this.service = injector.get(Volo.CmsKit.Admin.Blogs.BlogPostAdminService);
    this.entityTypeStore = injector.get(EntityTypeStore);

    let setDefaults$ = combineLatest([
      this.entityTypeStore.getEntityTypeByType$(this.EntityType, this.ShortEntityType),
      this.blogService.getList({ maxResultCount: 999 })
    ]).pipe(
        mergeMap(([entityType, blogList]) => {
        this.feature = entityType.map((y) => y.name);
        this.blogList = blogList.items.map(x => { return { name: x.name, id: x.id } });
        let result = setDefaults<Volo.CmsKit.Admin.Pages.PageDto>(
          injector,
          BlogPostsComponent.NAME,
          {
            entityAction: AddToolbarAction(this.feature),
            toolbarActions: BLOG_POSTS_TOOLBAR_ACTIONS,
            entityProps: BLOG_POSTS_ENTITY_PROPS,
            createFormProps: AddBlogIdItems(this.blogList),
            editFormProps: BLOG_POSTS_EDIT_FORM_PROPS,
          }
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

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Admin.Blogs.CreateBlogPostDto
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  create(formValue) {
    this.service
      .create(formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service
      .get(id)
      .pipe(take(1))
      .pipe(
        tap((selected) => {
          this.editSelectedRecord = selected;
          const data = new FormPropData(this.injector, selected);
          this.editForm = generateFormFromProps(data);
        })
      )
      .subscribe((x) => {
        this.editModalVisible = true;
      });
  }
  edit(formValue) {
    const request: Volo.CmsKit.Admin.Blogs.UpdateBlogPostDto = {
      ...formValue,
    };

    this.service
      .update(this.editSelectedRecord.id, request)
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('CmsKit::BlogPostDeletionConfirmationMessage', 'CmsKit::AreYouSure', {
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
    this.service
      .get(entityId)
      .pipe(take(1))
      .pipe(
        tap((selected) => {
          this.blogPostImageInfo = [
            {
              fileName: selected.coverImageMediaId,
              fileUid: selected.coverImageMediaId,
              fileUrl: "/api/cms-kit/media/" + selected.coverImageMediaId
            }
          ];
          this.postImage.initBehaviorSubject();
          this.subs.add(
            this.postImage.openModal().subscribe(x => {
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
    this.service
      .get(entityId)
      .pipe(take(1))
      .pipe(
        mergeMap((selected) => {
          const request = { ...selected } as Volo.CmsKit.Admin.Blogs.UpdateBlogPostDto;
          request.coverImageMediaId = _.head(imageIds);
          return this.service.update(entityId, request).pipe(take(1));
        })
      )
      .subscribe((x) => {
        this.list.get();
      });
  }
}
