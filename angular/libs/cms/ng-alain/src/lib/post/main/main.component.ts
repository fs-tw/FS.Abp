import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select, Store } from '@ngxs/store';
import { NotifyService } from '../../shared/services/notify/notify.service';
import { Observable } from 'rxjs';

import { Deletepost } from '../providers/post.actions';
import { PostState } from '../providers/post.state';
import { PostDtos } from '@fs/cms';
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

  loading = false;
  confirmModal: NzModalRef;
  datas=[];

  pageNumber:number=0;
  dataCount: number = 0;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modal: NzModalService,
    private notifyService: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.data$.subscribe(x=>{
      this.datas = x;     
      console.log(x); 
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


}
