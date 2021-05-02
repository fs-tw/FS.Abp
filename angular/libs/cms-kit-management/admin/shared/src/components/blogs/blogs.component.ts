import { Component, Injector, OnInit } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import {
  eCmsKitComponents,
  ExtensionsService,
} from '@fs-tw/cms-kit-management/config';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { FormControl, FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { forkJoin, of, Subscription } from 'rxjs';

@Component({
  selector: 'fs-tw-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsKitComponents.Blogs,
    },
  ],
})
export class BlogsComponent implements OnInit {
  service: Volo.CmsKit.Admin.Blogs.BlogAdminService;
  blogFeatureService: Volo.CmsKit.Admin.Blogs.BlogFeatureAdminService;
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Pages.PageDto;
  editBlogFeatures: Volo.CmsKit.Blogs.BlogFeatureDto[];
  editBlogFeaturesForm: FormGroup;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    private extensionsService: ExtensionsService
  ) {
    this.service = this.injector.get(Volo.CmsKit.Admin.Blogs.BlogAdminService);
    this.blogFeatureService = this.injector.get(
      Volo.CmsKit.Admin.Blogs.BlogFeatureAdminService
    );
  }

  ngOnInit(): void {
    this.subs.add(
      this.extensionsService.Actions$[eCmsKitComponents.Blogs].subscribe(
        (x) => {
          switch (x.method) {
            case 'Create':
              this.onAdd();
              break;
            case 'Edit':
              this.onEdit(x.data.record.id);
              break;
            case 'Delete':
              this.delete(x.data.record.id);
              break;
          }
        }
      )
    );
  }

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
      .createByInput(formValue)
      .pipe(take(1))
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id: string) {
    this.service
      .getById(id)
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
          this.blogFeatureService.getListByBlogId(selected.id).pipe(
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
      .updateByIdAndInput(this.editSelectedRecord.id, request)
      .pipe(
        mergeMap((x) => {
          if (blogFeatures.length === 0) return of(null);
          return forkJoin(
            blogFeatures.map((a) =>
              this.blogFeatureService.setByBlogIdAndDto(x.id, a)
            )
          );
        })
      )
      .pipe(take(1))
      .subscribe((_) => {
        this.editModalVisible = false;
        this.list.get();
      });
  }

  delete(id: string) {
    this.confirmationService
      .warn('CmsKit::BlogDeletionConfirmationMessage', 'CmsKit::AreYouSure')
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.service.deleteById(id)),
        take(1)
      )
      .subscribe((_) => {
        this.list.get();
      });
  }
}
