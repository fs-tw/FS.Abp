import { PostDto, PostsApiService, PostGetListDto, PostWithDetailsDto } from '@fs-tw/cms/proxy';
import { CodesWithSettingsOutput } from '@fs-tw/theme-core'
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetPostsData, GetPostById } from './news.action';
import { News } from './news.models';
import { Injectable } from '@angular/core';
import { DefinitionSettingAppService, ThemeCoreStateService } from '@fs-tw/theme-core';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
@State<News.State>({
  name: 'NewsState',
  defaults: {
    PostPageRequest: { skipCount: 0, maxResultCount: 5, blogCodeId: '' }
  } as News.State
})
export class NewsState {

  @Selector()
  static getPostPageRequest({
    PostPageRequest
  }: News.State): PostGetListDto {
    return PostPageRequest;
  }
  @Selector()
  static gePostsData({ PostDataResponse }: News.State): PostWithDetailsDto[] {
    return PostDataResponse.items || [];
  }
  @Selector()
  static getPostsDataTotalCount({ PostDataResponse }: News.State): number {
    return PostDataResponse.totalCount;
  }
  @Selector()
  static getPostById({ SelectedPost }: News.State): PostDto {
    return SelectedPost;
  }

  constructor(
    private postService: PostsApiService,
    private themeCoreStateService: ThemeCoreStateService,
  ) { }

  @Action(GetPostsData)
  getPostsData(
    { patchState }: StateContext<News.State>,
    { payload }: GetPostsData
  ) {
    return this.postService.getList(payload).pipe(
      tap(PostDataResponse =>
        patchState({
          PostPageRequest: payload,
          PostDataResponse
        })
      )
    );
  }

  @Action(GetPostById)
  getPostById(
    { patchState }: StateContext<News.State>,
    { payload }: GetPostById
  ) {
    return this.postService
      .get({id:payload})
      .pipe(tap(SelectedPost => patchState({ SelectedPost })));
  }
}
