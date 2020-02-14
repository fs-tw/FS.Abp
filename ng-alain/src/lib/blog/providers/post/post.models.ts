import { ABP } from '@abp/ng.core';
import { PostDtos } from '@fs/cms';

export namespace Post{
    export interface State{

        posts:PostDtos.PostPage;

        postsPageQueryParam:PostDtos.PostPageQueryParams;

        postData:PostDtos.postData;

        postsInput:PostDtos.PostInput;

    }
}