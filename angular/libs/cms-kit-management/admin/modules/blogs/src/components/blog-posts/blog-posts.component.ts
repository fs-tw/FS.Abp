import { Component, Injector, OnInit } from '@angular/core';
import { ListService, RestService, PagedResultDto } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { Volo } from '@fs-tw/cms-kit-management/proxy';
import { filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import {
  setContributors,
  setDefaults,
} from '@fs-tw/theme-alain/shared/extensions';
import {
  BLOG_POSTS_CREATE_FORM_PROPS,
  DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS,
  BLOG_POSTS_ENTITY_ACTIONS,
  BLOG_POSTS_ENTITY_PROPS,
  BLOG_POSTS_TOOLBAR_ACTIONS,
} from './defaults/index';

@Component({
  selector: 'fs-tw-blog-posts',
  templateUrl: './blog-posts.component.html',
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: BlogPostsComponent.NAME,
    },
  ],
})
export class BlogPostsComponent implements OnInit {
  public static NAME: string = 'Posts.BlogPostsComponent';
  blogAdminService: Volo.CmsKit.Admin.Blogs.BlogAdminService;
  blogPostAdminService: Volo.CmsKit.Admin.Blogs.BlogPostAdminService;
  mediaService: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorAdminService;

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Blogs.BlogPostDto;

  public tabs$: Observable<any>;
  selectedTabId: string;

  data$: Observable<PagedResultDto<Volo.CmsKit.Admin.Blogs.BlogPostListDto>>;

  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService,
    private restService: RestService
  ) {
    setDefaults(injector, BlogPostsComponent.NAME, {
      entityAction: BLOG_POSTS_ENTITY_ACTIONS,
      toolbarActions: BLOG_POSTS_TOOLBAR_ACTIONS,
      entityProps: BLOG_POSTS_ENTITY_PROPS,
      createFormProps: BLOG_POSTS_CREATE_FORM_PROPS,
      editFormProps: DEFAULT_BLOG_POSTS_EDIT_FORM_PROPS,
    }).subscribe((x) => {
      switch (x.method) {
        case 'Create':
          this.onAdd();
          break;
        case 'Delete':
          this.delete(x.data.record.id, x.data.record.name);
          break;
        case 'Edit':
          this.onEdit(x.data.record.id);
          break;
      }
    });

    this.blogAdminService = injector.get(
      Volo.CmsKit.Admin.Blogs.BlogAdminService
    );
    this.blogPostAdminService = injector.get(
      Volo.CmsKit.Admin.Blogs.BlogPostAdminService
    );
    this.mediaService = injector.get(
      Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorAdminService
    );
  }

  ngOnInit(): void {
    this.tabs$ = this.blogAdminService.getListByInput({} as any).pipe(
      map((json) => {
        return json.items.map((i) => {
          return {
            key: i.id,
            tab: i.name,
          };
        });
      })
    );

    let streamCreator = (q: Volo.CmsKit.Admin.Blogs.BlogPostGetListInput) => {
      q.blogId = this.selectedTabId;

      return this.blogPostAdminService.getListByInput(q as any);
    };

    this.data$ = this.list.hookToQuery(streamCreator);
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
    const request: Volo.CmsKit.Admin.Blogs.CreateBlogPostDto = formValue;
    const file = formValue.coverImageMediaFile;

    this.createByEntityTypeAndInputStream('blogpost', file)
      .pipe(
        mergeMap((x) => {
          request.coverImageMediaId = x.id;
          return this.blogPostAdminService.createByInput(request).pipe(
            tap((x) => {
              //todo add tags
            })
          );
        })
      )
      .subscribe((_) => {
        this.createModalVisible = false;
        this.list.get();
      });
  }

  onEdit(id) {
    this.blogPostAdminService
      .getById(id)
      .pipe(
        tap((selected) => {
          this.editSelectedRecord = selected;
          const data = new FormPropData(this.injector, this.editSelectedRecord);
          this.editForm = generateFormFromProps(data);
        })
      )
      .subscribe((_) => {
        this.editModalVisible = true;
      });
  }

  edit(formValue) {}

  delete(id: string, name) {
    this.confirmationService
      .warn(
        'CmsKit::BlogPostDeletionConfirmationMessage',
        'CmsKit::AreYouSure',
        {
          messageLocalizationParams: [name],
        }
      )
      .pipe(
        filter((status) => status === Confirmation.Status.confirm),
        switchMap((_) => this.blogPostAdminService.deleteById(id)),
        take(1)
      )
      .subscribe((_) => {
        this.list.get();
      });
  }
  //todo:now proxy is not support upload file
  createByEntityTypeAndInputStream = (
    entityType: string,
    file: NzUploadFile
  ) => {
    var formdata = new FormData();
    formdata.append('inputStream.name', file.name);
    formdata.append('inputStream.file', file as any, file.name);

    return this.restService.request<
      any,
      Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto
    >(
      {
        method: 'POST',
        url: `/api/cms-kit-admin/media/${entityType}`,
        body: formdata,
      },
      { apiName: 'CmsKitAdmin' }
    );
  };

  selectedChanged(tab) {
    this.selectedTabId = tab?.key;
    this.list.get();
  }
}
