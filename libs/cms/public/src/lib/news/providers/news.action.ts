import { PostDto,PostGetListDto } from '@fs-tw/cms/proxy';

export class GetPostsData {
  static readonly type = '[News] Get Posts Data';
  constructor(public payload?: PostGetListDto) {}
}

export class GetPostById {
  static readonly type = '[News] Get Post By Id';
  constructor(public payload: string) {}
}
