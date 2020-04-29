import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize, pluck, takeUntil } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
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
import { STColumn, STPage, STColumnTag } from '@delon/abc';

const displayModeTAG: STColumnTag = {
  0: { text: '內文', color: 'green' },
  1: { text: '連結', color: 'blue' },
};
@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit , OnDestroy{



  @Select(PostState.getPosts)
  data$: Observable<PostDtos.postData[]>;

  @Select(PostState.getPostsTotalCount)
  getTotalCount$: Observable<number>;

  news: CodeDetailWithSettingObj[] = []
  loading = false;
  confirmModal: NzModalRef;
  datas = [];
  select: string = "";
  pageNumber: number = 0;
  dataCount: number = 0;
  destroy$= new Subject<void>();
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
        this.loadData();
      }
    })

  }

  ngOnDestroy() {
    this.destroy$.next();
  }  

  ngOnInit() {
    this.data$ .pipe(
      takeUntil(this.destroy$),
    ).subscribe(x=>{
      this.datas = x;
    })
  }

  loadData() {
    this.store.dispatch(new GetPosts({ blogCodeId: this.select, skipCount: 0, maxResultCount: 10 }))
      .pipe(pluck("PostState", "posts"))
      .subscribe(x => {});
  }

  delete(item: any) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '確定要刪除 ' + item.title + ' 嗎 ?',
      nzOnOk: () => {
        var isDelAll: boolean = this.dataCount == 1;
        this.loading = true;
        this.store
          .dispatch(new Deletepost(item.id))
          .pipe(finalize(() => this.loading = false))
          .subscribe(() => {
            this.notifyService.success('刪除成功');

            if (isDelAll && this.pageNumber != 1) {
              this.pageNumber--;
              this.changePage();
            }
          }, (error) => {
            this.notifyService.error('刪除失敗');
          });
      }
    });
  }

  changePage() {
    var queryParams = {
      pageNumber: this.pageNumber
    }

    this.router.navigate(['cms/post'], { queryParams: queryParams });
  }

  columns: STColumn[] = [
    { title: '標題', index: 'title' },
    { title: '副標題', index: 'subtitle' },
    { title: '顯示模式', index: 'displayMode', type: 'tag', tag: displayModeTAG },
    { title: '發佈時間', type: "date", dateFormat: "YYYY-MM-DD", index: "published_At" },
    { title: '更新時間', type: "date", dateFormat: "YYYY-MM-DD", index: 'lastModificationTime' },
    {
      buttons: [
        {
          text: '編輯',
          click: (item) => {
            this.gotoDetail(item.id);
          }
        },
        {
          text: '刪除',
          click: (item) => {
            this.delete(item);
          }
        },
      ],
    },
  ];

  gotoDetail(id?:string){
    if(id)this.router.navigate(["/cms/post/detail/"+id]);   
    else this.router.navigate(["/cms/post/detail"]);   
  }

}
