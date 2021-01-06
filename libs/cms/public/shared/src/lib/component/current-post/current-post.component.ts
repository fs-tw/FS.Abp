import { Component, OnInit, Input } from '@angular/core';
import { PostsApiService, PostGetListDto } from '@fs-tw/cms/proxy';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigStateService, TrackByService, trackBy,EnvironmentService } from '@abp/ng.core';
import { ThemeCoreStateService } from '@fs-tw/theme-core';
import { ListService } from '@abp/ng.core';
import * as _ from 'lodash';

@Component({
  selector: 'fs-the-project-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css'],
  providers: [
    ListService
  ]
})
export class CurrentPostComponent implements OnInit {

  @Input()
  count: number = 3;
  @Input()
  showImg: boolean = false;
  @Input()
  targetBlogId: string;
  @Input()
  displayType: string = null;

  loading: boolean = false;
  selectedPostType;

  baseUrl: string = '';
  datas = [];
  totalCount;
  newsDefinition;
  params: any;
  constructor(
    private environmentService: EnvironmentService,
    private postService: PostsApiService,
    public readonly track: TrackByService<PostGetListDto>,
    private router: Router, private route: ActivatedRoute,
    private configStateService: ConfigStateService,
    private themeCoreStateService: ThemeCoreStateService,
    public readonly list: ListService,
  ) {
    this.baseUrl = this.environmentService.getApiUrl() + '/';
    this.params= {
      skipCount: 0,
      maxResultCount: this.count,
      blogCodeId: this.targetBlogId,
      sorting: 'LastModificationTime DESC'
    };    
  }

  ngOnInit(): void {
    this.params.blogCodeId = this.targetBlogId;
    this.params.maxResultCount = this.count;
    var definition = this.themeCoreStateService.getSingleDefinitionChildren('CmsDefinition');
    this.newsDefinition = definition.rawDatas.filter(x => x.codes.parentId !== definition.definition.codes.id);
    this.newsDefinition = _.orderBy(this.newsDefinition, ['codes.no'], ['asc']);
    this.loadData();
  }
  loadData() {
    //const postStreamCreator = query => this.postService.getPostByBlogDefinitionByInput(this.params);
    // this.loading = true;
    // this.list.hookToQuery(postStreamCreator).subscribe(
    //   response => {
    //     this.datas = response.items;
    //     this.totalCount = response.totalCount;
    //     this.loading = false;
    //     // If you use OnPush change detection strategy,
    //     // call detectChanges method of ChangeDetectorRef here.
    //   }
    // ); // Subscription is auto-cleared on destroy.
  }

  setDate(value: string) {
    return new Date(value);
  }
  setImgUrl(images: any[]) {
    let imgUrl =
      images.length > 0 ? images.find(x => x.isCover === true).url : null;
    return this.baseUrl + imgUrl;
  }
  goToItems(id, postType?) {

    if (id)
      this.router.navigate(['/cms/news/' + id], { relativeTo: this.route });
    else {
      if (postType)
        this.router.navigate(['/cms/news'], { relativeTo: this.route, queryParams: { id: postType.id } });
      else {
        this.router.navigate(['/cms/news'], { relativeTo: this.route,queryParams:{id:this.targetBlogId} });
      }
    }

  }

  selectNews(item) {
    this.selectedPostType = item;
    this.params.blogCodeId = item ? item.id : null;
    this.list.get();
  }
}
