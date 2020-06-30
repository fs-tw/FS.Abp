import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogStateService } from '../../providers/blog/blog.state.service';
import { CodeDetailWithSettingObj, CodesWithDetailsDto  } from '@fs/coding-management/core'
import { CodingManagementDtos } from '../../../shared/coding-management.dtos';
import { NotifyService } from '../../../shared/services/notify/notify.service';
@Component({
  selector: 'fs-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  isVisible = false;
  @Input() input:CodingManagementDtos.coding;
  @Output()  saveOutput = new EventEmitter();
  i: any = {
    enable: true
  };
  news: CodesWithDetailsDto ;

  constructor(
    private blogStateService: BlogStateService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {

  }

  showModal() {    
    if(this.input) this.i=this.input;
    this.isVisible = true;
    var blogCode = this.blogStateService.getOne("codings");
    this.news = blogCode.children.find(x => { return x.no == "News" });
  }

  handleCancel() {
    this.isVisible = false;
    this.i = {
      enable: true
    }
    this.saveOutput.emit();
  }

  save() {
    if(!this.input){
      var input: CodingManagementDtos.coding;
      input = { ...input, ...this.i }
      input.definitionId = this.news.definitionId;
      input.parentId = this.news.id;

      this.blogStateService.dispatchAddNews(input).subscribe(x => {
        this.notifyService.success("建立成功！");
        this.handleCancel();
      });
      
    } else {
      this.blogStateService.dispatchPatchNewsById(this.input).subscribe(x => {
        this.notifyService.success("建立成功！");
        this.handleCancel();
      })
    }
  }

  

}
