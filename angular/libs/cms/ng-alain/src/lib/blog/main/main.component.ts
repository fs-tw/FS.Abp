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
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
 
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private modal: NzModalService,
    private notifyService: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute    
  ) {   
   }

  ngOnInit() {
  
  }




}
