import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Select } from '@ngxs/store';
import { NotifyService } from '../../../shared/services/notify/notify.service';
import { MessagesService } from '../../../shared/services/messages/messages.service';

import { Observable, Subject } from 'rxjs';
import { BlogState } from '../../providers/blog/blog.state';
import { CodesWithDetailsDto, CodeDetailWithSettingObj } from '@fs/coding-management/core';
import { BlogStateService } from '../../providers/blog/blog.state.service';
@Component({
  selector: 'fs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Select(BlogState.getCodeingByNo)
  BlogCodedata$: Observable<CodesWithDetailsDto>;
 
  news: CodeDetailWithSettingObj[] = [];
  select;
  
  constructor(    
    private notifyService: NotifyService,
    private messagesService: MessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,    
    private blogStateService: BlogStateService
  ) {
    this.activatedRoute.queryParams.subscribe(x => {
      if (x.blog) {
        this.select = x.blog
      }
    });
  }

  ngOnInit() {
    this.news = this.blogStateService.getCodeChildrenDetail("News");    
  }

 

  showDetail(codeId) {
    this.router.navigate(["/cms/post"], { queryParams: { blog: codeId } })
  }

  delete(id: string) {
    this.messagesService.confirm("確認要刪除嗎？", result => {
      if (result) {
        this.blogStateService.dispatchRemoveNews(id).subscribe(x => {
          this.notifyService.success("刪除成功！");
          this.news = this.blogStateService.getCodeChildrenDetail("News"); 
        })
      }
    })
  }

  refresh(){
    this.news = this.blogStateService.getCodeChildrenDetail("News"); 
  }
}
