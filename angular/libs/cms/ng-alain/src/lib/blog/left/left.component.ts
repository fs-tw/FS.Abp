import { Component, OnInit } from '@angular/core';

import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { NotifyService } from '../../shared/services/notify/notify.service';
import { Select, Store } from '@ngxs/store';
import { BlogState } from '../providers/blog/blog.state';
import { Observable } from 'rxjs';
import { BlogDtos } from '@fs/cms'
import { GetBlogs,DeleteBlog } from '../providers/blog/blog.actions';

@Component({
  selector: 'fs-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.less']
})
export class LeftComponent implements OnInit {

 
  @Select(BlogState.getBlogs)
  data$: Observable<BlogDtos.BlogRequest[]>;

  @Select(BlogState.getBlogsTotalCount)
  getTotalCount$: Observable<number>;

  loading=false;
  pageQuery: BlogDtos.BlogPageQueryParams = { skipCount: 0, maxResultCount: 10 } as BlogDtos.BlogPageQueryParams;
  
  confirmModal: NzModalRef;
  pageNumber:number=0;
  dataCount: number = 0;

  datas:BlogDtos.BlogRequest[]=[];
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modal: NzModalService,
    private notifyService: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute    
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.pageNumber = queryParams['pageNumber'] || 1;
      var MaxResultCount = queryParams['MaxResultCount'] || 10;

      this.pageQuery.skipCount = (this.pageNumber - 1) * 10;      
      this.pageQuery.maxResultCount = MaxResultCount;

      this.loadData();
    });
   }

  ngOnInit() {
    this.data$.subscribe(x=>{
      this.datas = x;      
    });
  }

  delete(item: any) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '確定要刪除 ' + item.name + ' 嗎 ?',
      nzOnOk: () => {
        var isDelAll: boolean = this.dataCount == 1;
        this.loading = true;
        this.store
          .dispatch(new DeleteBlog(item.id))
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

    this.router.navigate(['cms/blog'], { queryParams: queryParams });
  }

  loadData() {
    this.loading = true;
    this.store
      .dispatch(new GetBlogs(this.pageQuery))
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => {},
      (error) => {
        this.notifyService.error('查詢失敗');
      });
  }

}
