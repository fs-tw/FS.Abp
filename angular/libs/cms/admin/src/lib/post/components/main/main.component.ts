import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
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

  // @Select(PostState.getPosts)
  // posts$: Observable<PostWithDetailsDto[]>;

  // @Select(PostState.getPostsTotalCount)
  // totalCount$: Observable<number>;

  // loading = false;

  ngOnInit() {
    
  }

  // mapOfExpandData: { [key: string]: boolean } = {};
  // blogCode: CodesDto;
  // blogId: string = "";
  // keyword: string = "";

  // subscription: Subscription;
  // constructor(
  //   private store: Store,
  //   private router: Router,
  //   private pageService: PageService,
  //   private activatedRoute: ActivatedRoute,
  //   private confirmationService: ConfirmationService,
  //   private toasterService: ToasterService,
  //   private postsStateService: PostsStateService,
  // ) { }

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
