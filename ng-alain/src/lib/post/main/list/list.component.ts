import { Component, OnInit, OnDestroy } from '@angular/core';
import { CodeProcessService } from '@fs/coding-management/core'
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select, Store } from '@ngxs/store';
import { NotifyService } from '../../../shared/services/notify/notify.service';
import { MessagesService } from '../../../shared/services/messages/messages.service';

import { Observable, Subject } from 'rxjs';
import { BlogState } from '../../providers/blog/blog.state';
import { CodesWithDetailsDto, CodeDetailWithSettingObj } from '@fs/coding-management/core';
import { GetDefinitionByNo } from '../../providers/blog/blog.action';
import { takeUntil, filter, pairwise, combineLatest, tap } from 'rxjs/operators';
import { BlogStateService } from '../../providers/blog/blog.state.service';
@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  @Select(BlogState.getCodeingByNo)  
  BlogCodedata$: Observable<CodesWithDetailsDto>;
  private destroy$ = new Subject<void>();


  news: CodeDetailWithSettingObj[] = [];
  select;
  
  constructor(
    private store: Store,
    private notifyService: NotifyService,
    private messagesService:MessagesService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private codeProcessService: CodeProcessService,
    private blogStateService: BlogStateService
  ) { 
      this.activatedRoute.queryParams.subscribe(x=>{  
        console.log(x)      
        if(x.blog){
          this.select = x.blog
        }
      });
  }

  ngOnInit() {
    this.loadData();
    this.BlogCodedata$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(data => {
        if (data.no) {
          var result = this.codeProcessService.getCodeChildrenDetail(data.children, data.codeList);
          this.news = result.find(x => { return x.no == "News" }).children;
        }
      })



  }



  ngOnDestroy() {
    this.destroy$.next();
  }

  showDetail(codeId) {
    this.router.navigate(["/cms/post"], { queryParams: { blog: codeId } })
    // console.log(codeId)
  }

  delete(id: string) {    
    this.messagesService.confirm("確認要刪除嗎？",result=>{
      if(result){
        this.blogStateService.dispatchRemoveNews(id).subscribe(x=>{
          this.notifyService.success("刪除成功！");      
        })
      }
    })
    
  }

  loadData() {
    this.store.dispatch(new GetDefinitionByNo("BlogDefinition"))
      .subscribe();
  }
}
