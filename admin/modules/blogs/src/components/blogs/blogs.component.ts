import { Component, Injector, OnInit } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';
import {
  BLOGS_CREATE_FORM_PROPS,
  BLOGS_EDIT_FORM_PROPS,
  BLOGS_ENTITY_ACTIONS,
  BLOGS_ENTITY_PROPS,
  BLOGS_TOOLBAR_ACTIONS,

  BLOGS_ENTITY_PROPS_CON
} from './defaults/index';
import { eCmsKitManagementComponents } from '../../enums/components';
import { ExtensionsStore } from '@fs-tw/components/extensions';

@Component({
  selector: 'fs-tw-blogs',
  templateUrl: './blogs.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsKitManagementComponents.BlogsComponent,
    },
  ],
})
export class BlogsComponent implements OnInit {
  subs: Subscription = new Subscription();
  service: Volo.CmsKit.Admin.Blogs.BlogAdminService;
  blogFeatureService: Volo.CmsKit.Admin.Blogs.BlogFeatureAdminService;

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Blogs.BlogDto;
  editBlogFeatures: Volo.CmsKit.Blogs.BlogFeatureDto[];
  editBlogFeaturesForm: FormGroup;

  searchForm: FormGroup = this.fb.group({ filter: '' });

  constructor(
    private fb: FormBuilder,
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    const name = injector.get(EXTENSIONS_IDENTIFIER);
    let extensionsStore = injector.get(ExtensionsStore);

    let actionSub = extensionsStore
      .setDefaults(eCmsKitManagementComponents.BlogsComponent, {
        entityAction: BLOGS_ENTITY_ACTIONS,
        toolbarActions: BLOGS_TOOLBAR_ACTIONS,
        entityProps: BLOGS_ENTITY_PROPS,
        createFormProps: BLOGS_CREATE_FORM_PROPS,
        editFormProps: BLOGS_EDIT_FORM_PROPS,
      },{
        entityType:''
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
            this.delete(x.data.record.id, x.data.record.name);
            break;
        }
      });

      extensionsStore.actionEventHub.Register(eCmsKitManagementComponents.BlogsComponent).subscribe(x=>{


      })
    this.subs.add(actionSub);

    this.service = this.injector.get(Volo.CmsKit.Admin.Blogs.BlogAdminService);
    this.blogFeatureService = this.injector.get(
      Volo.CmsKit.Admin.Blogs.BlogFeatureAdminService
    );
  }

  ngOnInit(): void {}

  onAdd() {
    const data = new FormPropData(
      this.injector,
      {} as Volo.CmsKit.Admin.Blogs.CreateBlogDto
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
      .pipe(
        mergeMap((selected) =>
          this.blogFeatureService.getList(selected.id).pipe(
            tap((blogFeatures) => {
              this.editBlogFeatures = blogFeatures;
              this.editBlogFeaturesForm = new FormGroup({});
              blogFeatures.forEach((x) => {
                this.editBlogFeaturesForm.addControl(
                  x.featureName,
                  new FormControl(x.isEnabled)
                );
              });
            })
          )
        )
      )
      .subscribe((x) => {
        this.editModalVisible = true;
      });
  }
  edit(formValue) {
    const request: Volo.CmsKit.Admin.Blogs.UpdateBlogDto = {
      ...formValue,
    };
    const blogFeatures: Volo.CmsKit.Admin.Blogs.BlogFeatureInputDto[] =
      formValue.blogFeatures;

    this.service
      .update(this.editSelectedRecord.id, request)
      .pipe(
        mergeMap((x) => {
          if (blogFeatures.length === 0) return of(null);
          return forkJoin(
            blogFeatures.map((a) => this.blogFeatureService.set(x.id, a))
          );
        })
      )
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string, name: string) {
    this.confirmationService
      .warn('CmsKit::BlogDeletionConfirmationMessage', 'CmsKit::AreYouSure', {
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
}
