import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize, pluck, takeUntil } from 'rxjs/operators';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select, Store } from '@ngxs/store';
import { NotifyService } from '../../shared/services/notify/notify.service';
import { Observable, Subject } from 'rxjs';
import { Deletepost, GetPosts } from '../providers/post/post.actions';
import { PostState } from '../providers/post/post.state';
import { PostDtos } from '@fs/cms';
import { CodeProcessService, CodeDetailWithSettingObj } from '@fs/coding-management/core';

@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, OnDestroy {
  @Select(PostState.getPosts)
  data$: Observable<PostDtos.postData[]>;

  @Select(PostState.getPostsTotalCount)
  getTotalCount$: Observable<number>;

  total = 0;
  news: CodeDetailWithSettingObj[] = []
  loading = false;
  confirmModal: NzModalRef;
  datas = [];
  select: string = "";
  pageNumber: number = 0;  
  destroy$ = new Subject<void>();
  mapOfExpandData: { [key: string]: boolean } = {};
  keyword = "";
  constructor(
    private store: Store,
    private modal: NzModalService,
    private notifyService: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe(x => {
      if (x && x.blog) {
        this.select = x.blog;
        if (x.pageNumber) this.pageNumber = x.pageNumber - 1;
        this.keyword = x.keyword;
        this.loadData();
      }
    })

  }



  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit() {
    this.data$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(x => {
      this.datas = x;
    })
  }

  loadData() {
    this.store.dispatch(new GetPosts({ value: this.keyword, fields: "Title,Subtitle", blogCodeId: this.select, skipCount: this.pageNumber * 10, maxResultCount: 10 }))
      .pipe(pluck("PostState", "posts"))
      .subscribe(x => {
        this.total = x.totalCount;
      });
  }



  delete(item: any) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '確定要刪除 ' + item.title + ' 嗎 ?',
      nzOnOk: () => {       
        this.loading = true;
        this.store
          .dispatch(new Deletepost(item.id))
          .pipe(finalize(() => this.loading = false))
          .subscribe(() => {
            this.notifyService.success('刪除成功');
            this.changePage(1);            
          }, (error) => {
            this.notifyService.error('刪除失敗');
          });
      }
    });
  }

  changePage(e?, keyword?) {
    var queryParams = {
      blog: this.select,
      pageNumber: e,
      keyword
    }

    this.router.navigate(['cms/post'], { queryParams: queryParams });
  }

  search() {
    this.changePage(1, this.keyword);
  }



  gotoDetail(id?: string) {
    if (id) this.router.navigate(["/cms/post/detail/" + id]);
    else this.router.navigate(["/cms/post/detail"]);
  }

}
