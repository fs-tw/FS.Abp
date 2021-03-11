import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Fs } from '@fs-tw/cms/proxy';

import { PageService } from '../../providers/page.service';
import { PostStateService } from '../../providers/post-state.service';

// 
// import { PostWithDetailsDto } from '@fs-tw/cms/proxy';
// import { CodesDto } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select, Store } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { Deletepost, GetPosts } from '../../providers/post/post.actions';
// import { PostState } from '../../providers/post/post.state';
// import { PostsStateService } from '../../providers/post/poststate.service';
// import { PageService } from '../../providers/page.service';
@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  blog$: Observable<Fs.Cms.Blogs.Dtos.BlogDto>;
  blogId: string;
  blogName: string;

  postParams: Fs.Cms.Posts.Dtos.GetPostByBlogIdInput = {
    skipCount: 0,
    maxResultCount: 10,
    keyword: "",
    blogId: null
  } as Fs.Cms.Posts.Dtos.GetPostByBlogIdInput;

  posts: Fs.Cms.Posts.Dtos.PostWithDetailsDto[] = [];
  totalCount: number = 0;
  loading: boolean = false;

  constructor(
    private router: Router,
    private pageService: PageService,
    private postStateService: PostStateService
  ) { }

  

  ngOnInit() {
    this.blog$ = this.postStateService.getBlog();
    this.onBlogChange();
  }

  onBlogChange() {
    this.blog$.subscribe((blog) => {
      this.blogId = blog == null ? null : blog.id;
      this.blogName = blog == null ? "" : blog.displayName;

      this.postParams.blogId = this.blogId;
      this.changePage(1);
    })
  }

  gotoDetail(id?: string) {
    if (id) this.router.navigate(["/cms/post/detail/" + id]);
    else this.router.navigate(["/cms/post/detail"]);
  }

  changePage(page: number) {
    this.postParams.skipCount = (page - 1) * this.postParams.maxResultCount;

    this.loading = true;
    this.pageService.getPostsByBlogId(this.postParams).subscribe((x) => {
      this.loading = false;
      this.posts = x.items;
      this.totalCount = x.totalCount;
    })
  }

  deleteItem(item: Fs.Cms.Posts.Dtos.PostWithDetailsDto) {

  }

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  // blogName: string = "";

  // ngOnInit(): void {
  //   this.subscription = this.activatedRoute.queryParams.subscribe(x => {
  //     if (x.blog) {
  //       this.blogId = x.blog
  //       this.blogName = x.name;
  //       if (x.blog == 'all') this.blogId = "";
  //     } else {
  //       let query = this.postsStateService.getPostQuery();
  //       this.keyword = query.param.value;
  //       this.blogId = query.param.blogCodeId
  //       this.blogName = query.blogName;
  //     }
  //     this.changePage(1);
  //   });
  // }

  // gotoDetail(id?: string) {
  //   if (id) this.router.navigate(["/cms/post/detail/" + id]);
  //   else this.router.navigate(["/cms/post/detail"]);
  // }

  // deleteItem(data: PostWithDetailsDto) {
  //   this.confirmationService.warn(
  //     `確定要刪除 ${data.title}嗎？`,
  //     '系統訊息', {
  //     cancelText: "關閉",
  //     yesText: "確定"
  //   }).subscribe((status: Confirmation.Status) => {
  //     if (status === Confirmation.Status.confirm) {
  //       this.store.dispatch(new Deletepost(data.id))
  //       this.toasterService.success("刪除成功！");
  //     }
  //   });
  // }

  // changePage(event: number) {
  //   this.loading = true;
  //   this.store.dispatch(
  //     new GetPosts(
  //       {
  //         param: {
  //           value: this.keyword,
  //           fields: "Title,Subtitle",
  //           blogCodeId: this.blogId,
  //           skipCount: (event - 1) * 10,
  //           maxResultCount: 10,
  //           sorting: ""
  //         },
  //         blogName: this.blogName
  //       }
  //     )).subscribe(() => this.loading = false);
  // }

  // search() {
  //   this.changePage(1);
  // }

}
