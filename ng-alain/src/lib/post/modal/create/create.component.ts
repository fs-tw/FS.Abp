import { Component, OnInit } from '@angular/core';
import { BlogStateService } from '../../providers/blog/blog.state.service';
import { CodeDetailWithSettingObj } from '@fs/coding-management/core'
import { CodingManagementDtos } from '@fs/coding-management';
import { NotifyService } from '../../../shared/services/notify/notify.service';
@Component({
  selector: 'fs-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  isVisible = false;
  i: any = {
    enable: true
  };
  news: CodeDetailWithSettingObj;

  constructor(
    private blogStateService: BlogStateService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {

  }

  showModal() {
    this.isVisible = true;
    var blogCode = this.blogStateService.getOne("codings");
    this.news = blogCode.children.find(x => { return x.no == "News" });
  }

  handleCancel() {
    this.isVisible = false;
    this.i = {
      enable: true
    }
  }

  save() {
    var input: CodingManagementDtos.coding;
    input = { ...input, ...this.i }
    input.definitionId = this.news.definitionId;
    input.parentId = this.news.id
    this.blogStateService.dispatchAddNews(input).subscribe(x => {
      this.notifyService.success("建立成功！");
      this.handleCancel();
    })
  }

}
