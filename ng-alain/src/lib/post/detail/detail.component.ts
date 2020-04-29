import { Component, OnInit } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';
import { BlogStateService } from '../providers/blog/blog.state.service';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeProcessService, CodesWithDetailsDto } from '@fs/coding-management/core';
import { Createpost, GetPostById, Updatepost } from '../providers/post/post.actions';
import { PostDtos } from '@fs/cms';
import { NotifyService } from '../../shared/services/notify/notify.service';
import { PostsStateService } from '../providers/post/poststate.service';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'fs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  i:PostDtos.PostInput={   
    id:null, 
    title:"",
    published:true,
    published_By:new Date(),
    subtitle:"",
    readCount:0,    
    published_At:new Date(),
    blogCodeId:"",
    displayMode:0,
    url:"",
    content:""
  };
  fileList: any = [];
  uploadList = [];
  isUpdate=false;
  news: any;
  constructor(
    private i18n: NzI18nService,
    private store: Store,
    private blogStateService:BlogStateService,
    private notifyService: NotifyService,
    private router: Router,
    private postsStateService:PostsStateService,
    private activatedRoute: ActivatedRoute,    
    ) {
      this.activatedRoute.params.subscribe(x=>{
        if(x["id"]){
          this.store.dispatch(new GetPostById(x["id"]))
          .pipe(pluck("PostState","postData"))
          .subscribe(x=>{            
            this.i=x;            
            this.isUpdate=true;
          })          
        }        
      });
    }


  initData(){
    this.i ={   
      id:null, 
      title:"",
      published:true,
      published_By:new Date(),
      subtitle:"",
      readCount:0,    
      published_At:new Date(),
      blogCodeId:"",
      displayMode:0,
      url:"",
      content:""
    };
    this.isUpdate=false;
    this.fileList = [];
    this.uploadList = [];
    this.i.blogCodeId = this.news[0].id;
  }

  ngOnInit() {
    this.i18n.setLocale(en_US);
    this.news = this.blogStateService.getCodeChildrenDetail("News");    
    this.i.blogCodeId = this.news[0].id;
  }

  beforeUpload = (file: any): boolean => {
    //要顯示列表回傳 false 自行處理欲 上傳檔案的列表
    this.fileList.push(file);
    return false;
  };

  removeFile(file) {
    var result = this.fileList.filter(x => {
      return x.uid != file.uid;
    });
    this.fileList = result;
  }

  save(){
    console.log(this.i);
    var mes = "建立成功！";
    if(this.isUpdate)  mes = "更新成功！";
    this.store.dispatch(this.isUpdate?new Updatepost(this.i):new Createpost(this.i)).subscribe(x=>{
      this.notifyService.success(mes);
      this.initData();
    })
  } 

}
