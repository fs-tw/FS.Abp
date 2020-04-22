import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select, Store } from '@ngxs/store';
import { NotifyService } from '../../../shared/services/notify/notify.service';
import { Observable } from 'rxjs';
import { CodeProcessService, CodeDetailWithSettingObj } from '../../../shared/services/code-process/code-process.service';
import { BlogState } from '../../providers/blog/blog.state';
import { CodesWithDetailsDto } from '@fs/coding-management/core';
import { GetDefinitionByNo } from '../../providers/blog/blog.action';

@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Select(BlogState.getCodeingByNo)
  BlogCodedata$: Observable<CodesWithDetailsDto>;

  news:CodeDetailWithSettingObj[] = [];
  constructor(
    private store: Store,            
    private notifyService: NotifyService,
    private router: Router,
    private codeProcessService:CodeProcessService
  ) { }

  ngOnInit() {
    this.loadData();
    this.BlogCodedata$.subscribe(data=>{
      if(data.no){                    
        var result = this.codeProcessService.getCodeChildrenDetail(data.children,data.codeList);
        console.log("result",result.find(x=>{return x.no == "News"}))
        this.news = result.find(x=>{return x.no == "News"}).children;
      }
    })
  }

 



  showDetail(codeId){
    console.log(codeId)
  }

  delete(item: any) {
  
  }

  loadData(){
    this.store.dispatch(new GetDefinitionByNo("BlogDefinition")).subscribe();
  }
}
