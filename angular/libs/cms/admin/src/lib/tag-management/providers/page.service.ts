import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Fs } from '@fs-tw/cms/proxy';
import { take, tap } from 'rxjs/operators';
@Injectable()
export class PageService {

  private allTagData = new Subject<any[]>();
  private tagData = new Subject<any>();

  public readonly allTagData$ = this.allTagData.asObservable();
  public readonly tagData$ = this.tagData.asObservable();

  getTageListFromApi() {
    // this.tagsApiService.tagGroupGetList().pipe(tap(x => this.allTagData.next(x))).subscribe()
  }

  getTagOneFromApi(groupId: string) {
    if (!groupId) {
      this.tagData.next(null);
      return;
    };
    // this.tagsApiService.tagGroupGetByIdById(groupId).pipe(tap(x => this.tagData.next(x))).subscribe();
  }


  constructor(
    //private tagsApiService: Fs.Cms.Tags.TagsApiService
  ) { }


  /**call api */

  // //create
  // createGroup(tagGroup: TagGroupForCreateDto) {
  //   return this.tagsApiService.tagGroupCreateByInput(tagGroup);
  // }

  // createGroupAndTags(id: string, tags: TagForCreateDto[]) {
  //   return this.tagsApiService.tagGroupAddTagsByIdAndTags(id, tags);
  // }

  // // update
  // updateGroup(id: string, newTagGroupName: string) {
  //   return this.tagsApiService.tagGroupUpdateByIdAndInput(id, { tagGroupName: newTagGroupName });
  // }

  // updateTag(id: string, newtagName: string) {
  //   return this.tagsApiService.putTagByIdAndInput(id, { name: newtagName });
  // }

  // // delate
  // deleteGroup(groupId: string) {
  //   return this.tagsApiService.tagGroupDeleteById(groupId)
  // }

  // delteTag(tagId: string) {
  //   return this.tagsApiService.tagDeleteById(tagId);
  // }
}
