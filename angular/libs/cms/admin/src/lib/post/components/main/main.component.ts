import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import {
  EXTENSIONS_IDENTIFIER
} from '@abp/ng.theme.shared/extensions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { eCmsRouteNames, ExtensionsService } from '@fs-tw/cms/config';
import { Fs } from '@fs-tw/cms/proxy';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';


@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [
    ListService,
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eCmsRouteNames.Post,
    },
  ],
})
export class MainComponent implements OnInit {
  sub: Subscription;
  blog$: Observable<Fs.Cms.Blogs.Dtos.BlogDto>;
  blogId: string;
  blogName: string;
  hookToQueryScribe: Subscription;
  postParams: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput = {
    skipCount: 0,
    maxResultCount: 10,
    keyword: "",  
    blogId: null
  } as Fs.Cms.Posts.Dtos.GetPostByBlogIdInput;

  posts: Fs.Cms.Posts.Dtos.PostWithDetailsDto[] = [];
  totalCount: number = 0;

  constructor(
    private extensionsService: ExtensionsService,
    private router: Router,
    private toasterService: ToasterService,
    private confirmationService: ConfirmationService,
    private pageService: PageService,
    public readonly list: ListService,
    private postStateService: PostStateService
  ) {

  }



  ngOnInit() {
    this.extensionsService.Actions$[eCmsRouteNames.Post].subscribe(
      (x) => {
        switch (x.name) {
          case 'Edit':
            this.gotoDetail(x.record.id)
            break;
          case 'Delete':
            this.deleteItem(x.record)
            break;
        }
      });

    this.blog$ = this.postStateService.getBlog();
    this.onBlogChange();
  }

  onBlogChange() {
    this.sub = this.blog$.subscribe((blog) => {
      this.blogId = blog == null ? null : blog.id;
      this.blogName = blog == null ? "全部" : blog.displayName;

      this.postParams.blogId = this.blogId;
      this.hookToQuery();
    })
  }

  gotoDetail(id?: string) {
    if (id) this.router.navigate(["/cms/post/detail/" + id]);
    else this.router.navigate(["/cms/post/detail"], {
      queryParams: {
        blogId: this.postParams.blogId
      }
    });
  }

  hookToQuery() {

    if (this.hookToQueryScribe) this.hookToQueryScribe.unsubscribe();
    const query = (query) => {
      query.keyword = this.postParams.keyword;
      query.blogId = this.postParams.blogId;
      return this.pageService.getPostsByBlogId(query)
    };

    this.hookToQueryScribe = this.list.hookToQuery(query).subscribe((res) => {
      this.posts = res.items;
      this.totalCount = res.totalCount;
    });
  }

  deleteItem(item: Fs.Cms.Posts.Dtos.PostDto) {
    this.confirmationService
      .warn('確認要刪除嗎？', '系統訊息', {
        cancelText: "取消",
        yesText: "確定"
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          let files = item.attachmentFileInfos.map(x => x.fileId)
          let images = item.postImages.map(x => x.imageId);
          let deleteFileActions = files.concat(images).map(x => this.pageService.deleteFile(x));
          forkJoin(deleteFileActions).subscribe();

          this.pageService.deletePost(item.id).subscribe(x => {
            this.toasterService.success("刪除成功！")
            this.list.get();
          })
        }
      });
  }

  ngOnDestroy(): void {
    if (this.hookToQueryScribe) this.hookToQueryScribe.unsubscribe();
    if (this.sub) this.sub.unsubscribe();
  }

}
