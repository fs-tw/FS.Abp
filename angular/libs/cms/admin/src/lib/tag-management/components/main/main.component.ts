import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { PageService } from '../../providers/page.service';
import {Fs } from '@fs-tw/cms/proxy';
import { Subscription } from 'rxjs';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, switchMap, take } from 'rxjs/operators';
@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {

  tagGroupList: Fs.Cms.Tags.Dtos.TagDto[] = [];
  subscription: Subscription;
  constructor(private PageService: PageService,
    private confirmation: ConfirmationService,) { }

  ngOnInit() {
    this.subscription = this.PageService.allTagData$.subscribe(result => {
      this.tagGroupList = result;
    })
  }

  deleteGroup(id: string) {
    // this.confirmation
    //   .warn(`確認要刪除嗎？`, '系統訊息')
    //   .pipe(
    //     filter(res => res === Confirmation.Status.confirm),
    //     switchMap(() => this.PageService.deleteGroup(id)),
    //     take(1)
    //   )
    //   .subscribe(() => {
    //     this.PageService.getTageListFromApi();
    //   });
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
