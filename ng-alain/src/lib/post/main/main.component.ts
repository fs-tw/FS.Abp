import { Component, OnInit } from '@angular/core';
import { finalize, pluck } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select, Store } from '@ngxs/store';
import { NotifyService } from '../../shared/services/notify/notify.service';
import { Observable } from 'rxjs';
import { Deletepost, GetPosts } from '../providers/post/post.actions';
import { PostState } from '../providers/post/post.state';
import { PostDtos } from '@fs/cms';
import { BlogState } from '../providers/blog/blog.state';
import { CodesWithDetailsDto } from '@fs/coding-management/core';
import { CodeProcessService, CodeDetailWithSettingObj } from '../../shared/services/code-process/code-process.service';
import { GetDefinitionByNo } from '../providers/blog/blog.action';
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
export class MainComponent implements OnInit {
 
 

  @Select(PostState.getPosts)
  data$: Observable<PostDtos.postData[]>;

  @Select(PostState.getPostsTotalCount)
  getTotalCount$: Observable<number>;

  news:CodeDetailWithSettingObj[] = []
  selectedValue="jack"; 

  loading = false;
  confirmModal: NzModalRef;
  datas=[];
  select:string="";
  pageNumber:number=0;
  dataCount: number = 0;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modal: NzModalService,
    private notifyService: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(x => {
      if (x && x.blog) {
          this.select = x.blog;
          this.loadData();
      }
    })

   }

  ngOnInit() {
   
    

  }

  loadData(){
    this.store.dispatch(new GetPosts({blogCodeId:this.select,skipCount:0,maxResultCount:10}))
    .pipe(pluck("PostState","posts"))
    .subscribe(x=>{
      console.log("ddd",x.items);
      this.datas = x.items;
    });
  }

  delete(item: any) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '確定要刪除 ' + item.name + ' 嗎 ?',
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

  changePage(){
    var queryParams = {      
      pageNumber: this.pageNumber
    }

    this.router.navigate(['cms/post'], { queryParams: queryParams });
  }

  columns: STColumn[] = [
    { title: '標題', index: 'title' },
    { title: '副標題', index: 'subtitle' },               
    { title: '顯示模式', index: 'displayMode', type: 'tag', tag: displayModeTAG },
    { title: '發佈時間',type: "date", dateFormat: "YYYY-MM-DD",  index: "published_At" },
    { title: '更新時間', type: "date", dateFormat: "YYYY-MM-DD", index: 'lastModificationTime' },
    {
      buttons: [
        {
          text: '編輯',
          click: (item) => {
            this.edit(item.id);
          }
        },
        {
          text: '刪除',
        },
      ],
    },
  ];

  edit(id){

  }

}
