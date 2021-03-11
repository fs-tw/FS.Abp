import { Component, OnInit } from '@angular/core';

import { Fs } from '@fs-tw/cms/proxy';
import { PageService } from '../../../providers/page.service';
import { PostStateService } from '../../../providers/post-state.service';

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

  // news: CodingWithSettingTreeModel;
  // subscription: Subscription;
  // parentCode: CodesDto;
  
  blogDatas: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto[] = [];
  selectBlogCodeId = "";

  loading: boolean = false;

  constructor(
    private pageService: PageService,
    private postStateService: PostStateService
  ) {
    
  }


  ngOnInit() { 
    this.reload();
  }

  reload() {
    let input: Fs.Cms.Blogs.Dtos.BlogGetListDto = {
      skipCount: 0,
      maxResultCount: 999,
      sorting: 'sequence'
    } as Fs.Cms.Blogs.Dtos.BlogGetListDto;

    this.loading = true;
    this.pageService.getBlogs(input).subscribe((x) => {
      this.blogDatas = x.items;
      this.loading = false;
    }, (error) => {
      this.loading = false;
    })
  }

  showDetail(blog: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto) {
    if (blog == null) {
      this.selectBlogCodeId = null;
      return;
    }

    this.selectBlogCodeId = blog.id;
    this.postStateService.setBlog(blog);
  }

  deleteBlog(blog: Fs.Cms.Blogs.Dtos.BlogWithDetailsDto) {

  }

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
