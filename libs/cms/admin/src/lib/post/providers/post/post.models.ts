import { ABP } from '@abp/ng.core';
import { PostDto, PostWithDetailsDto, PostGetListDto } from '@fs-tw/cms/proxy';
import { PagedResultDto } from '@abp/ng.core';
import { CodesDto } from '@fs-tw/theme-core';
export namespace Post {
    export interface State {
        postsPageQueryParam: { param: PostGetListDto, blogName: string };
        posts: PagedResultDto<PostWithDetailsDto>;
    }
}