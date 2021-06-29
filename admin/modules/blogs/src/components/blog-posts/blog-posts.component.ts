import { Component, OnInit, Injector } from '@angular/core';
import {
  PagedAndSortedResultRequestDto,
  EnvironmentService,
} from '@abp/ng.core';
import {
  ToasterService,
  ConfirmationService,
  Confirmation,
} from '@abp/ng.theme.shared';
import { forkJoin } from 'rxjs';

import { Fs } from '@fs-tw/proxy/cms-kit-management';
import { Volo } from '@fs-tw/proxy/cms-kit';
import { PageStateService } from '../../providers/paget-state.service';

@Component({
  selector: 'fs-tw-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css'],
})
export class BlogPostsComponent implements OnInit {
  defaultImageUrl: string;

  blogsApiService: Fs.CmsKitManagement.Blogs.BlogsApiService = null;
  blogPostAdminService: Volo.CmsKit.Admin.Blogs.BlogPostAdminService = null;

  blogsQuerysApiService: Fs.CmsKitManagement.Blogs.BlogsQuerysApiService = null;
  blogPostsQuerysApiService: Fs.CmsKitManagement.Blogs.BlogPostsQuerysApiService = null;

  blogs: Fs.CmsKitManagement.Blogs.Dtos.BlogDto[] = [];
  selectBlogSlug: string = null;

  page: number = 0;
  totalCount: number = 0;
  posts: Fs.CmsKitManagement.Blogs.Dtos.BlogPostDto[] = [];

  coverMediaUrls: { [id: string]: string } = {};

  constructor(
    injector: Injector,
    private environmentService: EnvironmentService,
    private pageStateService: PageStateService,
    private toasterService: ToasterService,
    private confirmationService: ConfirmationService
  ) {
    this.blogsApiService = injector.get(
      Fs.CmsKitManagement.Blogs.BlogsApiService
    );
    this.blogPostAdminService = injector.get(
      Volo.CmsKit.Admin.Blogs.BlogPostAdminService
    );
    this.blogPostsQuerysApiService = injector.get(
      Fs.CmsKitManagement.Blogs.BlogPostsQuerysApiService
    );
    this.blogsQuerysApiService = injector.get(
      Fs.CmsKitManagement.Blogs.BlogsQuerysApiService
    );
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    let getBlogs = this.blogsQuerysApiService.query({
      maxResultCount: 30,
      skipCount: 0,
    });
    let getBlogPostSetting = this.blogsApiService.getByBlogPostSettingGetAndFallback(
      {
        providerKey: null,
        providerName: 'T',
      } as Fs.CmsKitManagement.Blogs.Dtos.BlogPostSettingGetDto
    );

    forkJoin([getBlogs, getBlogPostSetting]).subscribe(([blog, setting]) => {
      this.blogs = blog;
      this.defaultImageUrl = setting.defaultImage;

      let selectedBlogId = this.pageStateService.getOne('SelectedBlogId');
      let selectedBlog = this.blogs.find((x) => x.id == selectedBlogId);
      let slug = selectedBlog
        ? selectedBlog.slug
        : this.blogs.length > 0
        ? this.blogs[0].slug
        : '';
      this.onSelectBlogSlugChange(slug);
    });
  }

  onSelectBlogSlugChange(slug: string) {
    this.selectBlogSlug = slug;

    let blog = this.blogs.find((x) => x.slug == slug);
    let blogId = blog ? blog.id : null;
    this.pageStateService.setOne('SelectedBlogId', blogId);

    this.refreshPost(1);
  }

  refreshPost(page: number) {
    this.page = page;
    let input = {
      skipCount: (page - 1) * 10,
      maxResultCount: 10,
      sorting: 'creationTime desc',
    } as PagedAndSortedResultRequestDto;

    var request: Fs.CmsKitManagement.Blogs.Querys.BlogPosts.BlogQuery = {
      blogSlug: this.selectBlogSlug,
      input: input,
    };

    this.blogPostsQuerysApiService.blogQuery(request).subscribe((x) => {
      this.coverMediaUrls = {};
      x.items.forEach((x) => {
        let url = `${this.environmentService.getApiUrl(
          'cms-kit'
        )}/api/cms-kit/media/${x.coverImageMediaId}`;
        this.coverMediaUrls[x.coverImageMediaId] = x.coverImageMediaId
          ? url
          : this.defaultImageUrl;
      });

      this.totalCount = x.totalCount;
      this.posts = x.items;
      console.log(x);
    });
  }

  deletePost(id: string) {
    let self = this;

    this.confirmationService
      .warn('CmsKitManagement::AreYouSureToDelete', 'CmsKitManagement::Warn')
      .subscribe((x) => {
        if (x != Confirmation.Status.confirm) return;
        toDelete(id);
      });

    function toDelete(id: string) {
      self.blogPostAdminService.deleteById(id).subscribe(
        () => {
          if (self.posts.length == 1 && self.page > 1) self.page--;

          self.refreshPost(self.page);
          self.toasterService.success('CmsKitManagement::DataDeleteSuccess');
        },
        (error) => {
          console.error(error);
          self.toasterService.error('CmsKitManagement::DataDeleteFaild');
        }
      );
    }
  }
}
