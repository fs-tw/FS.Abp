import { Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { ExtensionsStore } from '@fs-tw/components/extensions';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BLOG_POST_CREATE_FORM_PROPS, BLOG_POST_EDIT_FORM_PROPS, BLOG_POST_ENTITY_ACTIONS, BLOG_POST_ENTITY_PROPS, BLOG_POST_TOOLBAR_ACTIONS } from './defaults';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { ImagePicker, ImagePickerModalComponent } from '@fs-tw/components/image-picker';
import { QUILL_EDITOR_DOWNLOAD_TOKEN } from '@fs-tw/components/quill-editor';

let BlogPostComponentNAME: string = 'WSTM.BlogPostComponent';

@Component({
  selector: 'wstm-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: BlogPostComponentNAME,
    },
  ]
})
export class BlogPostComponent implements OnInit {
  @ViewChild(ImagePickerModalComponent) postImage: ImagePickerModalComponent;
  public EntityType = 'Volo.CmsKit.Blogs.BlogPost';
  public ShortEntityType = 'BlogPost';
  
  subs: Subscription = new Subscription();
  blogList: Array<{ name: string, id: string }>;
  
  @Input()
  blogId: string;

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Blogs.BlogPostDto;

  searchForm: FormGroup = this.fb.group({ filter: "", blogId: null });

  blogPostImageInfo: ImagePicker.ImageFile[] = [];
  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    @Inject(QUILL_EDITOR_DOWNLOAD_TOKEN) 
    private token: string,

    @Inject(Volo.CmsKit.Admin.Blogs.BlogPostAdminService) 
    public service: Volo.CmsKit.Admin.Blogs.BlogPostAdminService
  ) {
    let extensionsStore = injector.get(ExtensionsStore);

    let actionSub = extensionsStore
      .setDefaults(BlogPostComponentNAME, {
        entityAction: BLOG_POST_ENTITY_ACTIONS,
        toolbarActions: BLOG_POST_TOOLBAR_ACTIONS,
        entityProps: BLOG_POST_ENTITY_PROPS,
        createFormProps: BLOG_POST_CREATE_FORM_PROPS,
        editFormProps: BLOG_POST_EDIT_FORM_PROPS,
      })
      .subscribe((x) => {
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
      });

    this.subs.add(actionSub);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnChanges() {
    if(!this.blogId) return;

    this.searchForm.patchValue({
      blogId: this.blogId
    })
    this.list.get();
  }

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {
        blogId: this.blogId
      } as Volo.CmsKit.Admin.Blogs.CreateBlogPostDto
    );
    this.addForm = generateFormFromProps(data);
    this.createModalVisible = true;
  }
  create(formValue) {
    formValue['slug'] = formValue['title'];
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
      slug: formValue['title']
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
              fileUrl: this.token + selected.coverImageMediaId
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
