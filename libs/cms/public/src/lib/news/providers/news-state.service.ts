import { Injectable } from '@angular/core';
import { PostDto, PostGetListDto, PostWithDetailsDto } from '@fs-tw/cms/proxy';
//import { CodesWithDetailsDto } from '@fs/coding-management/core';
import { Store } from '@ngxs/store';
import { NewsState } from './news.state';
import { CodesWithSettingsOutput } from '@fs-tw/theme-core';

@Injectable({
  providedIn: 'root'
})
export class NewsStateService {
  constructor(private store: Store) { }

  getPostPageRequest(): PostGetListDto {
    return this.store.selectSnapshot(NewsState.getPostPageRequest);
  }

  gePostsData(): PostWithDetailsDto[] {
    return this.store.selectSnapshot(NewsState.gePostsData);
  }

  getPostsDataTotalCount(): number {
    return this.store.selectSnapshot(NewsState.getPostsDataTotalCount);
  }
}
