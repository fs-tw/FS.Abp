import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { finalize, pluck } from 'rxjs/operators';
import { NotifyService } from '../../../shared/services/notify/notify.service';
import { GetBlogById, UpdateBlog, CreateBlog } from '../../providers/blog.actions';
import { Blog } from '../../providers/blog.models';
import { BlogDtos } from '@fs/cms';
@Component({
  selector: 'fs-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  i: any = {};
  loading=false;
  @Input()
  id;

  data:BlogDtos.BlogRequest;
  tplModal: NzModalRef;
  constructor(
    private modalService: NzModalService,
    private store: Store,    
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
  }
  
  createModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    if(this.id) this.getData();
    else  this.buildForm();

    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false
    });
  }

  close(): void {
    this.tplModal.destroy();
  }

  save(){
    var mes = this.id ? "更新" : "新增";    
    if(this.id)  this.i.id=this.id;

    this.store
      .dispatch(
        this.id ?
          new UpdateBlog(this.i) :
          new CreateBlog(this.i)
      )
      .pipe(finalize(() => console.log("success"))) //finalize 完成或錯誤時執行
      .subscribe(() => {
        this.notifyService.success("資料" + mes + "成功");
        this.i={};
        this.close();
      }, (error) => {
        this.notifyService.error("資料" + mes + "失敗");
      });
    
 
  }
  
  getData(){
    this.store
    .dispatch(new GetBlogById(this.id))
    .pipe(pluck('BlogState'))
    .subscribe((state: Blog.State) => {
      this.data = state.blogRequest;     
      this.buildForm();
    }, (error) => {
      this.notifyService.error('無法取得資料');
    });

  }

  buildForm(){
    if(this.id){
      this.i={
        name:this.data.name,
        shortName:this.data.shortName,
        description:this.data.description,
      }
    }else{
      this.i={};
    }
    
    
  }

}
