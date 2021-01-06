import { ConfigStateService } from '@abp/ng.core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogDto, PostWithDetailsDto } from '@fs-tw/cms/proxy';
import { CodesDto } from '@fs-tw/theme-core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NewsState } from '../../providers/news.state';
import { NewsStateService } from '../../providers/news-state.service';
import { GetPostsData } from '../../providers/news.action';
import { ThemeCoreStateService } from '@fs-tw/theme-core';
import * as _ from 'lodash';
import { PaginationComponent } from '@fs-tw/cms/the-project/shared'
import { PageService } from '../../providers/page.service';
import { ThemeCoreService,FileService } from '@fs-tw/theme-core';
@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //new
  blogDatas: BlogDto[] = [];


  // old
  title = "全部";
  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent;
  keyword = "";

  @Select(NewsState.gePostsData)
  postsData$: Observable<PostWithDetailsDto[]>;

  @Select(NewsState.getPostsDataTotalCount)
  totalCount$: Observable<number>;

  page = 1;
  selectedBlogId = '';
  baseUrl: string = '';
  parentCode: CodesDto;  
  constructor(
    private store: Store,
    private pageService: PageService,
    private router: Router,
    private fileService:FileService,
    private newsStateService: NewsStateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((value) => {      
      this.selectedBlogId = value['id'];
      this.getBlog();     
      this.search();      
    });
  }

  getBlog() {
    this.pageService.blogGetList().subscribe(x => {
      this.blogDatas = x;
      this.setTitle();
    });
  }

  selectBlog(item: BlogDto = null) {
    this.selectedBlogId = item ? item.codesId : null;   
    this.router.navigate(
      [], { relativeTo: this.route, queryParams: { 'id': item ? item.codesId : null }, });
  }

  setTitle() {    
    if (this.selectedBlogId == null) this.title = "全部";    
    else{
      let targetBlog = this.blogDatas.find(x=>x.codesId == this.selectedBlogId)
      this.title = targetBlog.displayName;    
    }
  }


  changPostPage(event: { skipCount: number; maxResultCount: number }) {
    let pageRequest = this.newsStateService.getPostPageRequest();
    pageRequest.skipCount = event.skipCount;
    this.store.dispatch(new GetPostsData(pageRequest));
  }


  search() {
    let pageRequest = this.newsStateService.getPostPageRequest();
    pageRequest.fields = "Title,Subtitle";
    pageRequest.value = this.keyword;
    pageRequest.blogCodeId = this.selectedBlogId ? this.selectedBlogId : '';
    pageRequest.skipCount = 0;
    pageRequest.maxResultCount = 5;
    pageRequest.sorting = '';
    this.store.dispatch(new GetPostsData(pageRequest));
  }

    
  getUrl(x) {
    return this.fileService.getFileByName(x);
  }


}
