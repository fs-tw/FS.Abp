import { Component, Input, OnInit } from '@angular/core';
// import { group } from '@angular/animations';
// import { PostTagMapDto, TagGroupDto } from '@fs-tw/cms/proxy';
// import * as _ from 'lodash';
// import { Observable } from 'rxjs';
// import { take } from 'rxjs/operators';
// import { PageService } from '../../providers/page.service';
@Component({
  selector: 'fs-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  ngOnInit() {

  }

  // postTagsDict: { [tagCodeId: string]: PostTagMapDto; } = {};

  // @Input() postId: string;

  // @Input()
  // set postTags(val: PostTagMapDto[]) {    
  //   for (let item of val) {
  //     this.postTagsDict[item.tagCodeId] = item;
  //   }

  //   this.existTagCodeIds = val.map(x => x.tagCodeId);

  //   this.pageService.getAllTags().pipe(take(1)).subscribe(x => {
  //     this.tagGroups = x;
  //     for (let group of this.tagGroups) {
  //       for (let tag of group.tags) {
  //         if (this.existTagCodeIds.includes(tag.id)) {
  //           tag.check = true;
  //           continue;
  //         }
  //       }
  //     }
  //   })
  // }

  // existTagCodeIds: string[] = [];
  // tagGroups: any[] = []
  // constructor(
  //   private pageService: PageService,
  // ) { }

  // ngOnInit(): void {}

  // checkParent(group: any) {
  //   group.check = !group.check;
  //   for (let item of group.tags) {
  //     item.check = group.check;
  //   }

  // }
  // checkChild(tag: any) {
  //   tag.check = !tag.check;
  // }


  // save(postId?: string): Observable<any>[] {
  //   if(!this.postId) this.postId = postId;
  //   let tags: any[] = _.flatMap(this.tagGroups, "tags").filter(x => x.check);
  //   let deleteTargetIds: string[] = _.xorWith(this.existTagCodeIds, tags.map(x => x.id));
  //   let action: Observable<any>[] = [];
  //   for (let tagCodeId of deleteTargetIds) {
  //     if (this.postTagsDict[tagCodeId]) {
  //       action.push(this.pageService.deletePostTagMap(this.postTagsDict[tagCodeId].id));
  //     } else {
  //       action.push(this.pageService.createPostTagMap(this.postId, tagCodeId));
  //     }
  //   }
  //   return action;
  // }
}
