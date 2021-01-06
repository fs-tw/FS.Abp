import { ConfigStateService,EnvironmentService } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { PostDto } from '@fs-tw/cms/proxy';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { NewsState } from '../../providers/news.state';
import { ThemeCoreService,FileService } from '@fs-tw/theme-core';
@Component({
  selector: 'fs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Select(NewsState.getPostById)
  data$: Observable<PostDto>;

  baseUrl: string = '';

  constructor(
    private environmentService: EnvironmentService,
    private configStateService: ConfigStateService,
    private fileService:FileService,
    
    private location:Location) {}

  ngOnInit() {
    this.baseUrl = this.environmentService.getApiUrl() + '/';
  }

  setImgUrl(url: string) {
    return this.fileService.getFileByName(url);    
  }

  
  getUrl(x) {
    return this.fileService.getFileByName(x);
  }

  getFileName(x: string) {
    let splitStr = x.split("\\");
    return splitStr[splitStr.length - 1];
  }

  back(){
    this.location.back();
  }
}
