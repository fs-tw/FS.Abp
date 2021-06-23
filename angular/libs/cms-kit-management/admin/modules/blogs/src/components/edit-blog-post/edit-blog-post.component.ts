import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ToasterService } from '@abp/ng.theme.shared';

import { Fs, Volo } from '@fs-tw/cms-kit-management/proxy';
import { PickCoverImageComponent, FileService } from '@fs-tw/cms-kit-management/shared';

import { PageStateService } from '../../providers/paget-state.service';

@Component({
  selector: 'fs-tw-edit-blog-post',
  templateUrl: './edit-blog-post.component.html'
})
export class EditBlogPostComponent implements OnInit {
  @ViewChild("CoverImage") pickCoverImageComponent: PickCoverImageComponent;

  blogsApiService: Fs.CmsKitManagement.Blogs.BlogsApiService = null;

  blogs: Fs.CmsKitManagement.Blogs.Dtos.BlogDto[] = [];
  blogPost: Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto;

  blogId: string;
  routeIds: string[] = [];
  attachmentMedias: Volo.CmsKit.Admin.MediaDescriptors.MediaDescriptorDto[] = [];
  coverImageMediaId: string;
  content: string;
  formGroup: FormGroup;

  loading: boolean = false;
  isEdit: boolean = false;

  constructor(
    injector: Injector,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private fileService: FileService,
    private pageStateService: PageStateService,
    private toasterService: ToasterService,
    private router: Router
  ) {
    this.blogsApiService = injector.get(Fs.CmsKitManagement.Blogs.BlogsApiService);
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogId = "";
    this.blogsApiService.get()
      .subscribe((x) => {
        // 不顯示講習文章、比賽文章
        this.blogs = x.filter(y => y.slug.toLowerCase().trim() != 'jiang-xi-wen-zhang' && y.slug.toLowerCase().trim() != 'bi-sai-wen-zhang');

        let selectedBlogId = this.pageStateService.getOne("SelectedBlogId");
        let selectedBlog = this.blogs.find(x => x.id == selectedBlogId);
        this.blogId = selectedBlog ? selectedBlog.id : (this.blogs.length > 0 ? this.blogs[0].id : "");
        this.initData();
      });
  }

  initData() {
    let vm = this;
    let blogPostId = this.activatedRoute.snapshot.params['blogPostId'];
    if (!blogPostId) {
      this.isEdit = false;
      initForm();
    } else {
      this.isEdit = true;
      this.blogsApiService.getBlogPostByIdById(blogPostId)
        .subscribe(x => {
          this.blogPost = x;
          initForm(x);
        })
    }

    function initForm(data: Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto = null) {
      vm.routeIds = data ? data.routes.map(y => y.id) : [];
      vm.attachmentMedias = data ? data.attachmentMedias : [];
      vm.coverImageMediaId = data?.coverImageMediaId;
      vm.content = data?.content;
      vm.blogId = data ? data.blogId : vm.blogId;
      vm.formGroup = vm.fb.group({
        blogId: new FormControl(vm.blogId, [Validators.required]),
        title: new FormControl(data?.title, [Validators.required]),
        slug: new FormControl(data?.slug, [Validators.required]),
        shortDescription: new FormControl(data?.shortDescription, [Validators.required])
      });
    }
  }

  save() {
    let formData = this.formGroup.value;
    let result = { ...this.blogPost, ...formData } as Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto;

    if (!result.extraProperties) result.extraProperties = { AttachmentMediaIds: [], ViewCount: 0 };
    result.extraProperties["AttachmentMediaIds"] = this.attachmentMedias.map(x => x.id);
    result.attachmentMedias = this.attachmentMedias;
    result.content = this.content;

    let routeIds = this.routeIds;

    this.loading = true;
    this.saveCoverImage()
      .pipe(
        mergeMap((x) => {
          result.coverImageMediaId = x;

          return this.blogsApiService.patchBlogPostByInput({
            blogPost: result,
            routeIds: routeIds
          } as Fs.CmsKitManagement.Blogs.Dtos.PetchBlogPostDto)
        })
      )
      .subscribe((x) => {
        this.toasterService.success("RSO::DataUpdateSuccess")
        this.loading = false;

        this.blogId = x.blogId;
        this.pageStateService.setOne("SelectedBlogId", this.blogId);
        this.back();
      }, (error) => {
        this.loading = false;
        this.toasterService.success("RSO::DataUpdateFaild")

        console.error(error)
      })
  }

  saveCoverImage(): Observable<string> {
    if (!this.pickCoverImageComponent) return of(null);
    
    let file = this.pickCoverImageComponent.getCoverImage();
    if (typeof(file) == 'string' || file == null) {
      let str: string = file as string;
      return of(str);
    }

    return this.fileService.uploadFile(file, "blogpost")
      .pipe(
        map((x) => {
          return x.id;
        })
      );
  }

  back() {
    this.router.navigateByUrl("/blog-post");
  }
}
