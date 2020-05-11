import { Component, OnInit } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';
import { BlogStateService } from '../providers/blog/blog.state.service';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeProcessService, CodesWithDetailsDto } from '@fs/coding-management/core';
import { Createpost, GetPostById, Updatepost } from '../providers/post/post.actions';
import { PostDtos } from '@fs/cms';
import { AddRoute, ABP, PatchRouteByName, ConfigStateService } from '@abp/ng.core';
import { NotifyService } from '../../shared/services/notify/notify.service';
import { PostsStateService } from '../providers/post/poststate.service';
import { pluck, delay } from 'rxjs/operators';
import { HttpRequest, HttpClient, JsonpClientBackend } from '@angular/common/http';
import * as _ from 'lodash';
@Component({
  selector: 'fs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  apiUrl = "";
  i: PostDtos.PostInput = {
    id: null,
    images: [],
    title: "",
    published: true,
    published_By: new Date(),
    subtitle: "",
    readCount: 0,
    published_At: new Date(),
    blogCodeId: "",
    displayMode: 0,
    url: "",
    content: ""
  };
  fileList: any = [];

  showList = [];
  deleteList = [];
  selectPostId;
  news: any;
  constructor(
    private i18n: NzI18nService,
    private store: Store,
    private blogStateService: BlogStateService,
    private notifyService: NotifyService,
    private http: HttpClient,
    private postsStateService: PostsStateService,
    private configStateService: ConfigStateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.apiUrl = this.configStateService.getApiUrl() + "/";
    this.activatedRoute.params.subscribe(x => {
      if (x["id"]) {
        this.store.dispatch(new GetPostById(x["id"]))
          .pipe(pluck("PostState", "postData"))
          .subscribe(x => {
            this.i = x;
            this.selectPostId = x["id"];
            this.i.images.forEach((item, index) => {

              this.showList.push({
                uid: index.toString(),
                name: item.title,
                status: 'done',
                type: "image/jpeg",
                url: this.apiUrl + item.url,
                thumbUrl: this.apiUrl + item.url,
                needDelete: true,
                isCover: item.isCover
              })
            });

          })
      }
    });
  }



  initData() {
    this.i = {
      id: null,
      title: "",
      images: [],
      published: true,
      published_By: new Date(),
      subtitle: "",
      readCount: 0,
      published_At: new Date(),
      blogCodeId: "",
      displayMode: 0,
      url: "",
      content: ""
    };

    this.showList = [];
    this.deleteList = [];
    this.selectPostId = "";
    this.fileList = [];
    this.i.blogCodeId = this.news[0].id;
    this.router.navigate(["cms/post"], { queryParams: { blog: this.news[0].id } });

  }

  ngOnInit() {
    this.i18n.setLocale(en_US);
    this.news = this.blogStateService.getCodeChildrenDetail("News");
    this.i.blogCodeId = this.news[0].id;
  }

  beforeUpload = (file: any): boolean => {
    //要顯示列表回傳 false 自行處理欲 上傳檔案的列表
    file.needDelete = false;
    this.fileList.push(file);
    this.showList.push(file);
    return false;
  };

  delete(item: any, needDelete: boolean) {
    if (!needDelete) {
      var fileListIndex = this.fileList.indexOf(item);
      this.fileList.splice(fileListIndex, 1);
      this.showList.splice(fileListIndex, 1);
    } else {
      var saveListIndex = this.showList.indexOf(item);
      this.deleteList.push(item);
      this.showList.splice(saveListIndex, 1);
    }
  }
  mapOfCheckedId: { [key: string]: boolean } = {};
  save() {
    var mes = "建立成功！";
    if (this.selectPostId) mes = "更新成功！";
    
    var cover = this.showList.filter(x => { return x.isCover == true });    
    if (cover.length > 0) {
      this.i.images.forEach(x => {
        if (x.title != cover[0].name) x.isCover = false;
        else x.isCover = true;
      });
    }

    this.store.dispatch(this.selectPostId ? new Updatepost(this.i) : new Createpost(this.i))
      .pipe(pluck("PostState"))
      .subscribe(x => {
        this.notifyService.success(mes);
        if (!this.selectPostId) this.selectPostId = x.posts.items.filter(y => y.title == this.i.title)[0].id;
        this.handleUpload(this.selectPostId);
        this.initData();
      })
  }



  handleUpload(id: string) {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });

    var input = {
      originFiles: this.showList.map(x => x.name),
      deleteFiles: this.deleteList.map(x => x.name),
      isCoverName: ""
    }

    var cover = this.showList.filter(x => { return x.isCover == true });    
    if (cover.length > 0) {
      input.isCoverName = cover[0].name;
    }

    formData.append('input', JSON.stringify(input));

    const req = new HttpRequest(
      'POST',
      this.apiUrl + 'api/Cms/UploadFile/PostUploadImage?PostId=' + id,
      formData,
      {}
    );

    this.http.request(req).subscribe(
      (x: any) => { },
      error => {
        this.notifyService.error('無法上傳');
      }
    );
  }

  refreshStatus(input) {
    console.log(this.showList);
    this.showList.forEach(x => {
      if (x.uid != input.uid) x.isCover = false;
    });
  }


 
}
