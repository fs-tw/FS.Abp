import { Component, OnInit, Injector } from '@angular/core';
import {
  EXTENSIONS_IDENTIFIER,
  FormPropData,
  generateFormFromProps,
} from '@abp/ng.theme.shared/extensions';
import { ListService } from '@abp/ng.core';
import { Volo } from '@fs-tw/cms-kit-management/proxy/cms-kit';
import { Subscription } from 'rxjs';
import {
  setDefaults,
} from '@fs-tw/theme-alain/extensions';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { BLOG_POSTS_CREATE_FORM_PROPS, BLOG_POSTS_EDIT_FORM_PROPS, BLOG_POSTS_ENTITY_ACTIONS, BLOG_POSTS_ENTITY_PROPS, BLOG_POSTS_TOOLBAR_ACTIONS } from './defaults';
import { FormGroup } from '@angular/forms';
import { filter, switchMap, take, tap } from 'rxjs/operators';

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
  public static NAME: string = 'BlogPosts.BlogPostsComponent';
  service: Volo.CmsKit.Admin.Blogs.BlogPostAdminService;
  subs: Subscription = new Subscription();

  createModalVisible = false;
  addForm: FormGroup;

  editModalVisible = false;
  editForm: FormGroup;
  editSelectedRecord: Volo.CmsKit.Admin.Blogs.BlogPostDto;
  constructor(
    private readonly injector: Injector,
    public readonly list: ListService,
    private confirmationService: ConfirmationService
  ) {
    this.subs.add(
      setDefaults(injector, BlogPostsComponent.NAME, {
        entityAction: BLOG_POSTS_ENTITY_ACTIONS,
        toolbarActions: BLOG_POSTS_TOOLBAR_ACTIONS,
        entityProps: BLOG_POSTS_ENTITY_PROPS,
        createFormProps: BLOG_POSTS_CREATE_FORM_PROPS,
        editFormProps: BLOG_POSTS_EDIT_FORM_PROPS,
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
        }
      })
    );
    this.service = injector.get(Volo.CmsKit.Admin.Blogs.BlogPostAdminService);
  }

  ngOnInit(): void {
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
}
