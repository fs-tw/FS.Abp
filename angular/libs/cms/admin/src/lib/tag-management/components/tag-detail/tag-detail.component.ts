import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import * as _ from 'lodash';
import { Location } from '@angular/common'
import { forkJoin, Subscription } from 'rxjs';
import { PageService } from '../../providers/page.service';
import { Fs } from '@fs-tw/cms/proxy';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'fs-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.less'],
})
export class TagDetailComponent implements OnInit {

  @Input() isCreate: boolean = false;
  subscription: Subscription;

  deleteTargetTagIds: string[] = []

  data: Fs.Cms.Tags.Dtos.TagDto = {
   
   
  } as any;

  constructor(
    private pageService: PageService,
    private location: Location,
    private toasterService: ToasterService,
  ) { }


  inputList:  Fs.Cms.Tags.Dtos.TagCreateDto[] = [
    // { name: '' }
  ];

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  ngOnInit(): void {
    this.subscription = this.pageService.tagData$.subscribe(x => {
      this.data = x;
    })
  }


  addOption() {
    this.inputList.push();
  }

  removeOption(index: number) {
    this.inputList.splice(index, 1);
  }

  removeOldOption(id: string) {
    // this.data.tags = this.data.tags.filter(x => x.id != id);
    this.deleteTargetTagIds.push(id);
  }

  save() {
    // if (this.inputList.filter(x => x.name == '').length > 0 && this.data.tagGroupName != '') {
    //   this.toasterService.error("不能有空值！")
    //   return;
    // }
    // if (this.isCreate) this.create()
    // else this.update();
  }

  update() {
    // this.pageService.updateGroup(this.data.id, this.data.tagGroupName).subscribe(x => {
    //   let createTarget = this.pageService.createGroupAndTags(this.data.id, this.inputList);
    //   let target = this.updateTags().concat(this.deleteTags());
    //   target.push(createTarget)
    //   forkJoin(target).subscribe(()=>{
    //     this.location.back();
    //     this.toasterService.success("修改成功！")
    //   })
      
    // })
  }


  updateTags() {
    // let obsList = this.data.tags.map(x => {
    //   return this.pageService.updateTag(x.id, x.name)
    // });
    // return obsList
    // forkJoin(obsList).subscribe();
  }

  deleteTags() {
    // let obsList = this.deleteTargetTagIds.map(x => {
    //   return this.pageService.delteTag(x);
    // })
    // return obsList;
    // forkJoin(obsList).subscribe()
  }

  create() {
    // this.pageService.createGroup({
    //   tagGroupName: this.data.tagGroupName
    // }).pipe(tap(x => this.createTags(x.id))).subscribe()
  }

  createTags(groupId: string) {
    // this.pageService.createGroupAndTags(groupId, this.inputList).subscribe(() => {
    //   this.pageService.getTageListFromApi();
    //   this.toasterService.success("新增成功！");
    //   this.clear();
    // })
  }

  clear() {
    // this.inputList = [
    //   { name: '' }
    // ];
    // this.deleteTargetTagIds = [];
    // this.data = {
    //   id: '',
    //   tagGroupName: '',
    //   tags: [
    //     {
    //       id: '',
    //       name: ''
    //     }
    //   ]
    // };
  }
}
