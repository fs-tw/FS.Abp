import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { BlogDto } from '@fs-tw/cms/proxy';
// import { CodesDto, CodingWithSettingTreeModel } from '@fs-tw/theme-core';
// import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
// import { Select } from '@ngxs/store';
// import { Observable, Subscription } from 'rxjs';
// import { PageService } from '../../../providers/page.service';
// import { PostState } from '../../../providers/post/post.state';
// import { PostsStateService } from '../../../providers/post/poststate.service';
@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // @Select(PostState.getPostsTotalCount)
  // totalCount$: Observable<number>;

  // blogDatas: BlogDto[] = [];

  // selectBlogCodeId = "";
  // news: CodingWithSettingTreeModel;
  // subscription: Subscription;
  // parentCode: CodesDto;

  // constructor(
  //   private confirmationService: ConfirmationService,
  //   private toasterService: ToasterService,
  //   private postsStateService: PostsStateService,
  //   private router: Router,
  //   private pageService: PageService,
  // ) {

  //   this.reload();
  //   let query = this.postsStateService.getPostQuery();
  //   this.selectBlogCodeId = query.param.blogCodeId ? query.param.blogCodeId : "";
  // }

  // reload() {
  //   this.pageService.blogGetList().subscribe(x => {
  //     this.blogDatas = x;
  //   });
  // }

  // ngOnDestroy(): void {
  // }

  ngOnInit(): void { }

  // showDetail(blog: BlogDto) {
  //   if (blog == null) {
  //     this.selectBlogCodeId = null;
  //     this.router.navigate(["/cms/post"], { queryParams: { blog: 'all', name: '全部' } })
  //   }
  //   else {
  //     this.selectBlogCodeId = blog.codesId;
  //     this.router.navigate(["/cms/post"], { queryParams: { blog: blog.codesId, name: blog.displayName } })
  //   }
  // }

  // deleteBlog(data: BlogDto) {
  //   let mes = `(注意：${data.displayName}下的所有文章將移至不分類。)`;

  //   this.confirmationService.warn(
  //     `確認要刪除${data.displayName}嗎？${mes}`,
  //     '系統訊息', {
  //     cancelText: "關閉",
  //     yesText: "確定"
  //   }).subscribe((status: Confirmation.Status) => {
  //     if (status === Confirmation.Status.confirm) {
  //       this.pageService.deleteBlog(data.codesId).subscribe(x => {
  //         this.toasterService.success("刪除成功！");
  //         this.reload();
  //       })
  //     }
  //   });

  // }

}
