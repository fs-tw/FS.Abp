import { PagedResultDto } from '@abp/ng.core';
//import { CodesWithDetailsDto } from '@fs-tw/coding-management/core';
import { PostDto,PostGetListDto, PostWithDetailsDto } from '@fs-tw/cms/proxy';
import { CodesWithSettingsOutput } from '@fs-tw/theme-core';

export namespace News {
  export interface State {
    PostPageRequest: PostGetListDto;
    PostDataResponse: PagedResultDto<PostWithDetailsDto>;
    SelectedPost: PostDto;
  }
}
