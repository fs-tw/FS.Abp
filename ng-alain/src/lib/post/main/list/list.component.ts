import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select, Store } from '@ngxs/store';
import { NotifyService } from '../../../shared/services/notify/notify.service';
import { Observable, Subject } from 'rxjs';
import { CodeProcessService, CodeDetailWithSettingObj } from '../../../shared/services/code-process/code-process.service';
import { BlogState } from '../../providers/blog/blog.state';
import { CodesWithDetailsDto } from '@fs/coding-management/core';
import { GetDefinitionByNo } from '../../providers/blog/blog.action';
import { takeUntil, filter, pairwise, combineLatest, tap } from 'rxjs/operators';
@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {

  @Select(BlogState.getCodeingByNo)
  BlogCodedata$: Observable<CodesWithDetailsDto>;
  private destroy$ = new Subject<void>();
  news:CodeDetailWithSettingObj[] = [];
  constructor(
    private store: Store,            
    private notifyService: NotifyService,
    private router: Router,
    private codeProcessService:CodeProcessService
  ) { }

  ngOnInit() {
    this.loadData();
    this.BlogCodedata$
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(data=>{
      if(data.no){                    
        var result = this.codeProcessService.getCodeChildrenDetail(data.children,data.codeList);
        console.log("result",result.find(x=>{return x.no == "News"}))
        this.news = result.find(x=>{return x.no == "News"}).children;
      }
    })

   
  
  }

 

  ngOnDestroy() {
    this.destroy$.next();
  }

  showDetail(codeId){
    this.router.navigate(["/cms/post"],{queryParams:{blog:codeId}})
    // console.log(codeId)
  }

  delete(item: any) {
  
  }

  loadData(){
    this.store.dispatch(new GetDefinitionByNo("BlogDefinition"))
    .subscribe();
  }
}
